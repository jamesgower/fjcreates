import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { Button } from "reactstrap";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  src: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, src, title }): JSX.Element => {
  const desktop = useScreenWidth(420);

  const styles = {
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "400px",
      minHeight: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      padding: "40px 20px",
      borderRadius: "10px",
      border: "1px solid black",
    },
  };

  const mobileStyles = {
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
    },
    content: {
      margin: "0 auto",
      width: "90vw",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      borderRadius: "10px",
      border: "1px solid black",
    },
  };
  ReactModal.setAppElement("#app");
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={desktop ? styles : mobileStyles}
      contentLabel={title}
    >
      <div className="modal__container">
        <p className="modal__title">{title}</p>
        <div className="modal__header">
          <img src={src} className="modal__img" alt={title} />
          <p className="__placeholder">--Description placeholder--</p>
        </div>
      </div>
      <p className="__placeholder" style={{ height: "100px" }}>
        ---- prices placeholder ----
      </p>
      <p className="__placeholder">---- customise placeholder ----</p>
      <Button outline color="success" style={{ margin: "10px 0" }}>
        Pay with Stripe
      </Button>
      <Button outline color="danger">
        Cancel
      </Button>
    </ReactModal>
  );
};

export default Modal;
