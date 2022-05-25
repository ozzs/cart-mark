import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import "./ModalStyle.css";

function NotInserted({ setNotInserted }) {
  return (
    <div className="alertNotInserted">
      <FaExclamationCircle className="fail-icon" />
      <div className="alert-text">
        <span className="alert-title"> Oops! </span> <br />
        Something went wrong... <br />
      </div>
      <AiOutlineClose
        className="close-alert-button oops"
        onClick={() => setNotInserted(false)}
      />
    </div>
  );
}

export default NotInserted;
