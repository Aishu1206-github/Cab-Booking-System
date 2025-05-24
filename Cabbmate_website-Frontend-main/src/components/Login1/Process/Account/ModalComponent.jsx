import React from "react";
import Modal from "react-modal";
import "../Process.css";

Modal.setAppElement("#root");

export default function ModalComponent({ isOpen, onRequestClose, children }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#f6f6f6",
          maxWidth: "none",
          width: "90%",
        },
      }}
    >
      {children}
    </Modal>
  );
}
