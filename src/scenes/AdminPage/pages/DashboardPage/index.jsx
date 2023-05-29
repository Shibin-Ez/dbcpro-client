import { useState, useEffect } from "react";
import DashHeader from "./DashHeader";
import dateFormat from "./dateFormat";
import OptionExpand from "./OptionExpand";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

  const [isShowing, setIsShowing] = useState(-1);
  const SERVER_URL = useSelector((state) => state.url);

  useEffect(() => {
    const getOrders = async () => {
      const response = await fetch(`${SERVER_URL}/orders`, {
        method: "GET",
      });
      const data = await response.json();
      setOrders(data);
    };
    getOrders();
  }, []);

  return (
    <div>
      <DashHeader />
      <table>
        <tr>
          <th>CUSTOMER</th>
          <th>PRODUCTS</th>
          <th>PRICE</th>
          <th>DATE</th>
          <th>ADDRESS</th>
          <th>STATUS</th>
        </tr>

        {orders.map((order, index) => {
          return (
            <OptionExpand
              order={order}
              index={index}
              active={isShowing === index}
              onClick={() => setIsShowing(index)}
            />
          );
        })}
      </table>
    </div>
  );
};

export default DashboardPage;
