import "./styles.css";
import Navbar from "../Navbar/index";
import Product from "./Product";
import { useState, useEffect } from "react";
import CartArea from "./CartArea";
import useMediaQuery from "@mui/material/useMediaQuery";
import CartBottomBar from "./CartBottomBar.jsx";
import { useSelector } from "react-redux";

const StorePage = () => {
  const [products, setProducts] = useState(["1","1","1","1","1","1","1","1"]);
  const SERVER_URL = useSelector((state) => state.url);

  const getProducts = async () => {
    const response = await fetch(`${SERVER_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setProducts(await response.json());
  };

  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div id="store-page">
      <Navbar />
      <div className="flex store-content">
        <div className="products">
          {products.map((product) => {
            return <Product data={product} />;
          })}
        </div>
        {isMobile ? <CartBottomBar /> : <CartArea />}
      </div>
    </div>
  );
};

export default StorePage;
