import React from "react";
import homepage_banner from "./homepage_banner.png";
import { AiFillFileAdd } from "react-icons/ai";
import { FaListUl, FaShoppingCart } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <div className="banner-container">
        <img
          src={homepage_banner}
          alt="homepage_banner"
          className="homepage_banner"
        />
      </div>

      <div className="boxes-container">
        <div className="box">
          <AiFillFileAdd className="icon" /> <br />
          <div className="title"> Add Item </div> <hr />
          <div className="page-details">
            {" "}
            Set up new items in your personal database so you can add them to
            your shopping list.{" "}
          </div>
        </div>

        <div className="box">
          <FaListUl className="icon" />
          <div className="title"> Create List </div> <hr />
          <div className="page-details">
            {" "}
            Create a new shopping list or add groceries to an existing list.{" "}
          </div>
        </div>

        <div className="box">
          <FaShoppingCart className="icon" />
          <div className="title"> Go Shopping! </div> <hr />
          <div className="page-details">
            {" "}
            When you are ready, go shopping! <br /> Mark the products you took
            from the shelf and at the end of the purchase do not forget to close
            the list!{" "}
          </div>
        </div>

        <div className="box">
          <BiShow className="icon" />
          <div className="title"> Show Lists </div> <hr />
          <div className="page-details">
            {" "}
            View your previous lists, sorted by dates.{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
