import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from "../../state";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const prevCartItems = useSelector((state) => state.products);
  const SERVER_URL = useSelector((state) => state.url);

  const { name, price, picturePath } = props.data;

  const imgURL = `${SERVER_URL}/assets/${picturePath}`;
  const imgStyle = {backgroundImage: `url(${imgURL})`};

  const quantity = prevCartItems[props.id].quantity;

  const upQuantify = () => {
    const updatedCartItems = [...prevCartItems];
    updatedCartItems[props.id] = {...updatedCartItems[props.id], quantity: quantity + 1};
    dispatch(setCartData({products: [...updatedCartItems]}));
  };
  const downQuantify = () => {
    if(quantity > 1) {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems[props.id] = {...updatedCartItems[props.id], quantity: quantity - 1};
      dispatch(setCartData({products: [...updatedCartItems]}));
    } else { 
      // totally removing from cart
      const newCartItems = [...prevCartItems];
      newCartItems.splice(props.id, 1);
      dispatch(setCartData({products: [...newCartItems]}));
    }
  };

  return (
    <div className="product-card">
      <div className="flex">
        <div className="product-card-img" style={imgStyle}></div>
        <div className="product-card-right">
          <div className="product-card-price">Price: {price}</div>
          <div className="product-card-quantity">
            <span>Quantity: </span>
            <input className="product-card-input" value={quantity} />
            <button className="product-card-quantity-btn" onClick={upQuantify}>+</button>
            <button className="product-card-quantity-btn" onClick={downQuantify}>-</button>
          </div>
        </div>
      </div>
      <div className="product-card-name">{name}</div>
    </div>
  );
};

export default ProductCard;
