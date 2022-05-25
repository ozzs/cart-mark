import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./ModalStyle.css";

function Inserted({ setInserted }) {
  return (
    <div className="alertInserted">
      <BsCheck2Circle className="success-icon" />
      <div className="alert-text">
        <span className="alert-title"> Success! </span> <br />
        <span className="alert-added"> Item added successfully... </span> <br />
      </div>
      <AiOutlineClose
        className="close-alert-button success"
        onClick={() => setInserted(false)}
      />
    </div>
  );
}

export default Inserted;
