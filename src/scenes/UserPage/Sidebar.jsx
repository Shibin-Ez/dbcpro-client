import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [mode, setMode] = useState("orders");
  const navigate = useNavigate();

  return (
    <div className="user-sidebar">
      <div
        className={`user-sidebar-item ${
          mode === "myProfile" ? "user-sidebar-item-active" : ""
        }`}
        onClick={() => {
          setMode("myProfile");
          navigate("/user/profile");
        }}
      >
        My Profile
      </div>

      <div
        className={`user-sidebar-item ${
          mode === "orders" ? "user-sidebar-item-active" : ""
        }`}
        onClick={() => {
          setMode("orders");
          navigate("/user/orders");
        }}
      >
        Orders
      </div>

      <div
        className={`user-sidebar-item ${
          mode === "cart" ? "user-sidebar-item-active" : ""
        }`}
        onClick={() => {
          setMode("cart");
          navigate("/user/cart");
        }}
      >
        Cart
      </div>

      <div
        className={`user-sidebar-item ${
          mode === "wishlist" ? "user-sidebar-item-active" : ""
        }`}
        onClick={() => {
          setMode("wishlist");
          navigate("/user/wishlist");
        }}
      >
        Wishlist
      </div>
    </div>
  );
};

export default Sidebar;
