import React from "react";
import getStartedShapeOne from "../../assets/images/shapes/get-started-shape-1.png";
import GetStarterImg from "../../assets/images/resources/get-started-img-1.png";
import { Link } from "react-router-dom";

function GetFasterOne() {
  return (
    <section className="get-started">
      <div
        className="get-started__shape-1 float-bob-y"
        style={{
          backgroundImage: `url(${getStartedShapeOne})`,
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="get-started__left">
              <div className="get-started__img float-bob-y">
                <img src={GetStarterImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="get-started__right">
              <h3 className="get-started__title">
                Choose the hosting provider that helps you start easy
              </h3>
              <p className="get-started__text">
                Choose the hosting provider that helps you start easy, build
                fast, and grow strong! Get your plan with a 14-day money-back
                guarantee.
              </p>
              <Link to="/about" className="thm-btn get-started__btn">
                <span>
                  Get Started
                  <i className="icon-arrow" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetFasterOne;
