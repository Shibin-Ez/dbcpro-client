import { useEffect, useState } from "react";
import CartTable from "./CartTable.jsx";
import ProductCard from "./ProductCard.jsx";
import { Button, useMediaQuery } from "@mui/material";
import "../../components/Modal.css";
import { useDispatch } from "react-redux";
import { setModal } from "../../state";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCartData } from "../../state";

const CartArea = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = Boolean(useSelector((state) => state.token));
  const cartItems = useSelector((state) => state.products);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [cartItems]);

  const proceedToPay = () => {
    setCartData({total: cartTotal});
    if(cartTotal === 0){
      alert("Add some products to Cart!");
    }
    else if(isAuth) {
      return navigate("/payment");
    } else {
      dispatch(setModal({isModalOpen: true}));
    }
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="cart-area">
      {cartItems.map((cartItem, index) => {
        return (
          <ProductCard
            data={cartItem}
            id={index}
          />
        );
      })}
      <CartTable />
      <div className="cart-total">
        <div className="cart-date">Date: {new Date().toLocaleDateString()}</div>
        SubTotal: <span id="cart-price">{cartTotal}</span>
      </div>
      <Button
        className = "payment-btn"
        fullWidth
        type="submit"
        onClick={proceedToPay}
        sx={{
          marginTop: "2rem",
          position: "absolute",
          bottom: "1rem",
          width: "90%",
          padding: "0.8rem",
          letterSpacing: "0.1rem",
          backgroundColor: "#F08214",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#fae846",
            color: "#000",
          },
        }}
      >
        Proceed To Payment
      </Button>
    </div>
  );
};

export default CartArea;
