import { useState } from "react";
// import dateFormat from "../DashboardPage/dateFormat.js";
import { useNavigate } from "react-router-dom";

const OptionExpand = ({ product, index }) => {
//   const [ productDate, productTime ] = dateFormat(product.createdAt);
    const navigate = useNavigate();

  const moreOptions = async () => {
    navigate(`/admin/products/${product._id}`);
  };

  return (
    <>
      <tr className="dash-tr" onClick={moreOptions} id={index}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{product.description}</td>
      </tr>
    </>
  );
};

export default OptionExpand;
