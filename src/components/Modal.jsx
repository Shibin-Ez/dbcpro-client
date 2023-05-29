import CloseIcon from "@mui/icons-material/Close";
import Form from "./Form.jsx";

import { useDispatch } from "react-redux";
import { setModal } from "../state";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal-bg">
      <div className="modal-container">
        <button
          className="modal-close-btn"
          onClick={() => dispatch(setModal({ isModalOpen: false }))}
        >
          <CloseIcon style={{ fontSize: "15" }} />
        </button>
        <Form />
      </div>
    </div>
  );
};

export default Modal;
