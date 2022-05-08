import React from "react";
import "./Modal.css";

function Modal({ closeModal, closelist }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <div> Are you sure you want to close the list?</div>
        </div>
        <div className="footer">
          <button className="closeBtn" onClick={() => closeModal(false)}>
            {" "}
            Cancel{" "}
          </button>
          <button className="continueBtn" onClick={closelist}>
            {" "}
            Continue{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
