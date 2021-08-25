import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>congrats! 🎉</h2>
        <p>
          You answered {(correct / questions.length) * 100}% of the questions
          correctly
        </p>
        <button onClick={closeModal} className="close-btn">
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
