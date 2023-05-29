import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import HomePage from "./scenes/HomePage";
import StorePage from "./scenes/StorePage";
import AdminPage from "./scenes/AdminPage";
import PaymentPage from "./scenes/PaymentPage";
import UserPage from "./scenes/UserPage";

import ModifyProductPage from "./scenes/AdminPage/pages/UpdateItemPage/ModifyProductPage.jsx";
import DashboardPage from "./scenes/AdminPage/pages/DashboardPage";
import UpdateItemPage from "./scenes/AdminPage/pages/UpdateItemPage";
import AddItemPage from "./scenes/AdminPage/pages/AddItemPage";
import CustomersPage from "./scenes/AdminPage/pages/CustomersPage";

import ProfilePage from "./scenes/UserPage/ProfilePage";
import OrdersPage from "./scenes/UserPage/OrdersPage";
import CartPage from "./scenes/UserPage/CartPage";
import WishlistPage from "./scenes/UserPage/WishlistPage";
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route
            path="/payment"
            element={isAuth ? <PaymentPage /> : <Navigate to="/store" />}
          />

          <Route
            path="/user"
            element={isAuth ? <UserPage /> : <Navigate to="/store" />}
          >
            <Route path="" element={<Navigate to="profile" />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
          </Route>

          <Route path="/admin144" element={<AdminPage />}>
            <Route path="" element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="update-item" element={<UpdateItemPage />} />
            <Route path="add-item" element={<AddItemPage />} />
            <Route path="customers" element={<CustomersPage />} />
          </Route>

          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
