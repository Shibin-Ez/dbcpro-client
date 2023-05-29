import { useState } from "react";
import { useSelector } from "react-redux";
import CartArea from "./CartArea";

const CartBottomBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useSelector((state) => state.products);
  const SERVER_URL = useSelector((state) => state.url);

  const setHeight = () => {
    const count = cartItems.length;
    if (count === 0) {
      return "33%";
    } else if (count === 1) {
      return "40%";
    } else if (count === 2) {
      return "50%";
    } else {
      return "60%";
    }
  };

  return (
    <div
      style={{ height: isOpen ? setHeight() : "3.5rem" }}
      className="cart-bottom-bar"
    >
      <div className="items-mini-view" onClick={() => setIsOpen(!isOpen)}>
        {cartItems.map((cartItem, index) => {
          return (
            <img
              className="product-bubble"
              src={`${SERVER_URL}/assets/${cartItem.picturePath}`}
            />
          );
        })}
        <div className="cart-expand-btn">{isOpen ? "Condense" : "Expand"}</div>
      </div>
      <CartArea />
    </div>
  );
};

export default CartBottomBar;
