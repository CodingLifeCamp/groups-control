import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>{children}</div>,
    document.body
  );
};

export default Modal;
