import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";
import "./styles.css";

import ProfilePage from "./ProfilePage";
import OrdersPage from "./OrdersPage";
import CartPage from "./CartPage";
import WishlistPage from "./WishlistPage";
import { useSelector } from "react-redux";

const UserPage = () => {
  const user = useSelector((state) => state.user);

  // const getUser = async () => {
  //   const response = await fetch("http://localhost:3001/users/", {
  //     method: "GET",
  //   });
  //   const data = await response.json();
  // };

  return (
    <div id="user-page">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="user-main">
          <Routes>
            <Route path="" element={<Navigate to="orders" />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="orders" element={<OrdersPage user={user} />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
