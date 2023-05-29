import { useDispatch, useSelector } from "react-redux";
import { setCartData } from "../../state";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import KnowMore from "./KnowMore";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const Product = (props) => {
  const dispatch = useDispatch();
  const prevCartItems = useSelector((state) => state.products);
  const SERVER_URL = useSelector((state) => state.url);

  const isImageDefined = props.data.picturePath !== undefined;
  const imgURL = `${SERVER_URL}/assets/${props.data.picturePath}`;
  const imgStyle = { backgroundImage: `url(${imgURL})` };

  const [isKnowMore, setIsKnowMore] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const moveToCart = () => {
    const item = props.data;
    if (!prevCartItems.find((cartItem) => cartItem._id === item._id)) {
      if (!item.quantity) item.quantity = 1;
      dispatch(setCartData({ products: [...prevCartItems, item] }));
    }
  };

  return (
    <div className="product">
      {props.data.picturePath ? (
        <div className="product-img" style={isImageDefined ? imgStyle : null}>
          <div className="product-price">
            ₹{props.data.price || <Skeleton />}
          </div>
        </div>
      ) : (
        <Skeleton
          width={isMobile ? 160 : 192}
          height={isMobile ? 160 : 192}
          borderRadius="10px"
          animationSpeed={1}
          className="skeleton-animation"
        />
      )}

      <div className="product-name">{props.data.name || <Skeleton />}</div>
      <div className="flex">
        <button className="store-btn" onClick={moveToCart}>
          Buy Now
        </button>
        <button
          className="store-btn know-btn"
          onClick={() => setIsKnowMore(true)}
        >
          Know More
        </button>
      </div>
      {isKnowMore && <KnowMore setIsKnowMore={setIsKnowMore} data={props.data} />}
    </div>
  );
};

export default Product;
