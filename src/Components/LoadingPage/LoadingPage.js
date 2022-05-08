import React from "react";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <>
      <div className="items">
        <div className="loading-captions"> Loading...</div>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
