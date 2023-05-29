import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

const OrderBox = ({ product }) => {
  const SERVER_URL = useSelector((state) => state.url);
  
  const confirmDelete = async () => {
    const confirm = window.confirm("Are you sure you want to cancel order?");

    if (!confirm) return;
    
    try {
      const response = await fetch(
        `http://localhost:3001/users/purchases/${product._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex order-box">
      <div className="ordered-item flex">
        <img
          className="ordered-img"
          src={`${SERVER_URL}/assets/${product.image}`}
        />
        <div className="ordered-details">
          <div className="ordered-name">{product.name}</div>
          <div className="ordered-price">₹{product.price} x {product.quantity}</div>
        </div>
      </div>
      <div className="ordered-status">{product.status}</div>
      <button className="order-cancel-btn" onClick={confirmDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default OrderBox;
