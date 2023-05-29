import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogout, setModal } from "../../state";
import Modal from "../../components/Modal.jsx";
import "../../components/Modal.css";
import { useState } from "react";

import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = Boolean(useSelector((state) => state.token));
  const isModalOpen = useSelector((state) => state.isModalOpen);

  let username = "";
  const user = useSelector((state) => state.user);
  if (user) {
    username = user.firstName;
  }

  return (
    <div className="navbar flex">
      <h3 className="nav-h3">DBCpro</h3>
      <div className="nav-username">{isAuth && `Hi ${username}`}</div>
      <button
        className="nav-login-btn"
        onClick={() =>
          isAuth
            ? dispatch(setLogout())
            : dispatch(setModal({ isModalOpen: true }))
        }
      >
        {isAuth ? "Logout" : "Login"}
      </button>
      <AccountBoxIcon onClick={() => navigate("/user")} fontSize="large" className="account-icon" />
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Navbar;
