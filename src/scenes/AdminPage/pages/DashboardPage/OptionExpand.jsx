import { useState } from "react";
import dateFormat from "./dateFormat";
import { useSelector } from "react-redux";

const OptionExpand = ({ order, index, onClick, active }) => {
  const [orderDate, orderTime] = dateFormat(order.createdAt);

  const [isShowing, setIsShowing] = useState("false");

  const [status, setStatus] = useState(order.status);
  const SERVER_URL = useSelector((state) => state.url);

  const toggleExpand = () => {
    if (isShowing) {
      setIsShowing(false);
    } else {
      setIsShowing(true);
    }
  };

  const handleStatus = async (e) => {
    const status = e.target.innerHTML;
    const orderId = order._id;
    const response = await fetch(`${SERVER_URL}/orders`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId: orderId, status: status }),
    });

    const data = await response.json();
    if (!data) alert("Something went wrong");
    else setStatus(status);
  };

  return (
    <>
      <tr
        style={{ height: isShowing && "6rem" }}
        className="dash-tr"
        onClick={toggleExpand}
        id={index}
      >
        <td style={{ paddingBottom: isShowing && "3.1rem" }}>
          {order.firstName}
        </td>
        <td style={{ paddingBottom: isShowing && "3.1rem" }}>
          {order.products.map((product) => {
            return (
              <>
                {product.name} x {product.quantity} <br />{" "}
              </>
            );
          })}
        </td>
        <td style={{ paddingBottom: isShowing && "3.1rem" }}>{order.total}</td>
        <td style={{ paddingBottom: isShowing && "3.1rem" }}>
          {orderDate} <br />
          <span className="dash-time">{orderTime}</span>
        </td>
        <td style={{ paddingBottom: isShowing && "3.1rem" }}>
          {order.shippingAddress}
        </td>
        <td style={{ paddingBottom: isShowing && "3.1rem" }}>
          <span className="dash-status">{status}</span>
        </td>
      </tr>
      {isShowing && (
        <div className="dash-extend">
          <div className="expand-btn">
            <span className="status-change-text">Change Status to :&nbsp;</span>
            <button className="status-change-btn" onClick={handleStatus}>
              approved
            </button>
            <button className="status-change-btn" onClick={handleStatus}>
              rejected
            </button>
            <button className="status-change-btn" onClick={handleStatus}>
              sold
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OptionExpand;
