import ReactPlayer from "react-player";
import { AiFillFileAdd } from "react-icons/ai";
import { FaListUl, FaShoppingCart } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import "./Homepage.css";
import myVideo from "./supermarket-video.mp4";
import arrow from "./arrow.png";
import groceries from "./groceries.png";

function Homepage() {
  return (
    <>
      <ReactPlayer
        className="react-player"
        url={myVideo}
        muted
        playing
        loop
        width="100%"
        height="100%"
        style={{ marginTop: "3rem" }}
      />

      <h1 className="homepage-title" data-aos="zoom-in" data-aos-delay="200">
        {" "}
        Shopping List{" "}
      </h1>
      <h2 className="homepage-desc" data-aos="zoom-in" data-aos-delay="500">
        {" "}
        A new and <br /> easy way to shop
      </h2>

      {/* <h2 className="page-desc" data-aos="fade-up">
        {" "}
        Pages Description{" "}
      </h2> */}
      <div className="boxes-container">
        {/* <div className="box" data-aos="zoom-in" data-aos-delay="200"> */}
        <div className="box-add-item">
          <AiFillFileAdd className="icon" /> <br />
          <div className="title"> Add Item </div>
          <div className="page-details">
            {" "}
            Set up new items in your personal catalog so you can add them to
            your shopping list.{" "}
          </div>
        </div>

        <div className="arrow-container_1">
          <img src={arrow} className="arrow" />
        </div>

        {/* <div className="box" data-aos="zoom-in" data-aos-delay="500"> */}
        <div className="box-create-list">
          <FaListUl className="icon" />
          <div className="title"> Create List </div>
          <div className="page-details">
            {" "}
            Create a new shopping list or add groceries to an existing list.{" "}
          </div>
        </div>

        <div className="arrow-container_2">
          <img src={arrow} className="arrow" />
        </div>

        {/* <div className="box" data-aos="zoom-in" data-aos-delay="800"> */}
        <div className="box-go-shopping">
          <FaShoppingCart className="icon" />
          <div className="title"> Go Shopping! </div>
          <div className="page-details">
            {" "}
            When you are ready, go shopping! <br /> Mark the products you took
            from the shelf and at the end of the purchase do not forget to close
            the list!{" "}
          </div>
        </div>

        <div className="arrow-container_3">
          <img src={arrow} className="arrow" />
        </div>

        {/* <div className="box" data-aos="zoom-in" data-aos-delay="1100"> */}
        <div className="box-show-lists">
          <BiShow className="icon" />
          <div className="title"> Show Lists </div>
          <div className="page-details">
            {" "}
            View your previous lists, sorted by dates.{" "}
          </div>
        </div>
      </div>

      <div className="app-description-container">
        <img src={groceries} className="groceries-image" />
        {/* data-aos="fade-up" */}
        <div className="app-description">
          <h2 className="title-reason"> Why do I even need it? </h2>
          {/* data-aos="fade-right" */}
          <div className="text-description">
            <p>
              {" "}
              Have you ever felt tired of making a careless shopping list?
              Scribble a few groceries on a note and then lose it? Or maybe get
              a shopping list from your wife and not understand what is written
              in it and what I am supposed to bring? Wait, did she want almond
              milk or soy milk?{" "}
            </p>{" "}
            <p>
              {" "}
              With this website, you can create such a list, so that you do not
              have to deal with most of the issues raised earlier. You would be
              able to create a shopping list from a product catalog (which you
              also make yourself), edit and add comments to it. Once the list is
              ready you can open it and mark exactly what has been taken from
              the shelf and what has not. At the end of the purchase the list
              will be saved and you can view it again later.{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
