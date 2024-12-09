import React from "react";
import bubleImg from "../../assets/buble.png";
import bubleImg2 from "../../assets/layer.png";

import "./style.scss";

function Main() {
  return (
    <section>
      <div className="container">
        <div className="main">
          <img src={bubleImg} alt="" />
          <div className="buble-about">
            <h2>Put the human back in HR.</h2>
            <p>
              Your employees are the real stars. Show the love and help them
              perform!
            </p>
          </div>
        </div>
        <div className="main">
          <div className="buble-about">
            <h2>Put the human back in HR.</h2>
            <p>
              Your employees are the real stars. Show the love and help them
              perform!
            </p>
          </div>
          <img src={bubleImg2} alt="" />
        </div>
        <div className="main_bottom">
          <p>We partner with the best</p>
        </div>
      </div>
    </section>
  );
}

export default Main;
