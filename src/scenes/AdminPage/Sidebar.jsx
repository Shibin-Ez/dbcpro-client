import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

const Sidebar = ({mode, setMode}) => {
  
  const navigate = useNavigate();

  return (
    <nav className="admin-sidebar">
      <NavItem
        icon="dashboard.png"
        text="Dashboard"
        active={mode === "dashboard"}
        onClick={() => {setMode("dashboard"); navigate("/admin/dashboard") }}
      />
      <NavItem
        icon="dashboard.png"
        text="Update Item"
        active={mode === "update-item"}
        onClick={() => {setMode("update-item"); navigate("/admin/update-item") }}
      />
      <NavItem
        icon="dashboard.png"
        text="Add Item"
        active={mode === "add-item"}
        onClick={() => {setMode("add-item"); navigate("/admin/add-item")}}
      />
      <NavItem
        icon="dashboard.png"
        text="Customers"
        active={mode === "customers"}
        onClick={() => {setMode("customers"); navigate("/admin/customers")}}
      />
    </nav>
  );
};

export default Sidebar;