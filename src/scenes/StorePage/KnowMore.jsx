import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const KnowMore = ({ setIsKnowMore, data }) => {
  const SERVER_URL = useSelector((state) => state.url);
  const isImageDefined = data.picturePath !== undefined;
  const imgURL = `${SERVER_URL}/assets/${data.picturePath}`;
  const imgStyle = { backgroundImage: `url(${imgURL})` };

  return (
    <div className="knowMore-bg">
      <div className="knowMore-container">
        <button
          className="modal-close-btn"
          onClick={() => setIsKnowMore(false)}
        >
          <CloseIcon style={{ fontSize: "15" }} />
        </button>
        {/* <Form /> */}
        <div className="flex">
          {data.picturePath ? (
            <div
              className="product-img knowMore-img"
              style={isImageDefined ? imgStyle : null}
            >
              <div className="product-price">₹{data.price || <Skeleton />}</div>
            </div>
          ) : (
            <Skeleton
              width={200}
              height={200}
              borderRadius="10px"
              animationSpeed={1}
              className="skeleton-animation"
            />
          )}

          <div className="knowMore-right">
            <h3 className="knowMore-title">{data.name}</h3>
            <p className="knowMore-p">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
