import ReactPlayer from "react-player";
import { AiFillFileAdd } from "react-icons/ai";
import { FaListUl, FaShoppingCart } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import "./Homepage.css";
import myVideo from "./supermarket-video.mp4";

function Homepage() {

  return (
    <>
      <ReactPlayer
        className="react-player"
        url={myVideo}
        playing
        loop
        width="100%"
        height="100%"
        style={{marginTop: "3rem"}}
      />

      <h1 className="homepage-title"> Shopping List </h1>
      <h2 className="homepage-desc"> A new and <br /> easy way to shop</h2>

      <h2 className="page-desc" data-aos="fade-up"> Pages Description </h2>
      <div className="boxes-container">
        <div className="box" data-aos="zoom-in" data-aos-delay="200">
          <AiFillFileAdd className="icon" /> <br />
          <div className="title"> Add Item </div> <hr />
          <div className="page-details">
            {" "}
            Set up new items in your personal database so you can add them to
            your shopping list.{" "}
          </div>
        </div>

        <div className="box" data-aos="zoom-in" data-aos-delay="500">
          <FaListUl className="icon" />
          <div className="title"> Create List </div> <hr />
          <div className="page-details">
            {" "}
            Create a new shopping list or add groceries to an existing list.{" "}
          </div>
        </div>

        <div className="box" data-aos="zoom-in" data-aos-delay="800">
          <FaShoppingCart className="icon" />
          <div className="title"> Go Shopping! </div> <hr />
          <div className="page-details">
            {" "}
            When you are ready, go shopping! <br /> Mark the products you took
            from the shelf and at the end of the purchase do not forget to close
            the list!{" "}
          </div>
        </div>

        <div className="box" data-aos="zoom-in" data-aos-delay="1100">
          <BiShow className="icon" />
          <div className="title"> Show Lists </div> <hr />
          <div className="page-details">
            {" "}
            View your previous lists, sorted by dates.{" "}
          </div>
        </div>
      </div>

      <h2 className="reason" data-aos="fade-up"> Why do I even need it? </h2>
      <div className="description" data-aos="fade-right">
        <p>
          {" "}
          Have you ever felt tired of making a careless shopping list? Scribble
          a few groceries on a note and then lose it? Or maybe get a shopping
          list from your wife and not understand what is written in it and what
          I am supposed to bring? Wait, did she want almond milk or soy milk?{" "}
        </p>{" "}
        <br />
        <p>
          {" "}
          As a computer science student who rents an apartment with a partner
          and does shopping once or twice a week, I was looking for an idea for
          a project that would help me solve the problems mentioned and also
          acquire new tools that would expand my knowledge.{" "}
        </p>{" "}
        <br />
        <p>
          {" "}
          With this website, you can create such a shopping list, so that you do
          not have to deal with most of the issues raised earlier. The
          application is structured in such a way that it can be used on a
          computer or mobile devices.{" "}
        </p>{" "}
        <br />
        <p>
          {" "}
          You would be able to create a shopping list from a product catalog
          (which you also make yourself), edit and add comments to it. Once the
          list is ready you can open it and mark exactly what has been taken
          from the shelf and what has not. At the end of the purchase the list
          will be saved and you can view it again later.{" "}
        </p>{" "}
        <br />
        And most importantly, you will no longer be confused with almond milk
        and soy milk!
      </div>
    </>
  );
}

export default Homepage;
