import { useState, useEffect } from "react";
import DashHeader from "../DashboardPage/DashHeader";
import OptionExpand from "./OptionExpand.jsx";
import { useSelector } from "react-redux";

const UpdateItemPage = () => {
  const [products, setProducts] = useState([]);
  const SERVER_URL = useSelector((state) => state.url);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${SERVER_URL}/products`, {
        method: "GET",
      });
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <DashHeader />
      <table>
        <tr>
          <th>PRODUCT NAME</th>
          <th>PRICE</th>
          <th>STOCK</th>
          <th>PRODUCT DESCRIPTION</th>
        </tr>

        {products.map((product, index) => {
          return <OptionExpand product={product} index={index} />;
        })}
      </table>
    </div>
  );
};

export default UpdateItemPage;
