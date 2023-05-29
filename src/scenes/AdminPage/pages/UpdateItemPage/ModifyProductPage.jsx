import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { useSelector } from "react-redux";

const ModifyProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState("");
  const SERVER_URL = useSelector((state) => state.url);

  const getProductDetails = async () => {
    const response = await fetch(`${SERVER_URL}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setProduct( await response.json() );
    // console.log(product.name);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div id="modify-product-page">
      <h1 className="dash-h1">Update This Product</h1>
      <Form product={product} />
    </div>
  );
};

export default ModifyProductPage;
