import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./ModalStyle.css";

function ExistsModal({ setExists }) {
  return (
    <div className="alertExists">
      <FaQuestionCircle className="exists-icon" />
      <div className="alert-text">
        <span className="alert-title"> Huh?! </span> <br />
        <span className="alert-added">
          {" "}
          Seems like the item already exists in your catalog...{" "}
        </span>{" "}
        <br />
      </div>
      <AiOutlineClose
        className="close-alert-button exists"
        onClick={() => setExists(false)}
      />
    </div>
  );
}

export default ExistsModal;
