import "./styles.css";
import Navbar from "../Navbar";
import TitleBox from "./TitleBox";
import Features from "./Features";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div id="home-page">
      <Navbar />
      {/* <TitleBox /> */}
      <div className="home-title-box dbcpro-logo" />
      
      <Features />
      <button className="go-btn" onClick={() => navigate("/store")}>Go Shopping</button>
    </div>
  );
};

export default HomePage;
