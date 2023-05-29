import "./styles.css";

import Sidebar from "./Sidebar";
import { useState } from "react";
import DashboardPage from "./pages/DashboardPage";
import UpdateItemPage from "./pages/UpdateItemPage";
import AddItemPage from "./pages/AddItemPage";
import CustomersPage from "./pages/CustomersPage";
import { Routes, Route, Navigate } from "react-router-dom";

const AdminPage = () => {
  const [mode, setMode] = useState("dashboard");

  return (
    <div id="admin-page">
      <Sidebar mode={mode} setMode={setMode} />
      <main className="admin-main">
        <Routes>
          <Route path="" element={<Navigate to="dashboard" />}/>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="update-item" element={<UpdateItemPage />} />
          <Route path="add-item" element={<AddItemPage />} />
          <Route path="customers" element={<CustomersPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPage;