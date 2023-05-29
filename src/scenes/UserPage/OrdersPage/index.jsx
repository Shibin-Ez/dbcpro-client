import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderBox from "./OrderBox";

const OrdersPage = ({ user }) => {
  const [products, setProducts] = useState([]);
  const SERVER_URL = useSelector((state) => state.url);

  useEffect(() => {
    const getPurchases = async () => {
      const response = await fetch(
        `${SERVER_URL}/users/purchases/${user._id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    getPurchases();
  }, []);

  return (
    <div id="orders-page">
      <div className="orders-title">Pending Orders</div>
      {products.map((product, index) => {
        return <OrderBox product={product} key={index} />;
      })}
    </div>
  );
};

export default OrdersPage;
