import React from 'react';
import underConstruction1 from "../../assets/images/resources/under-construction-1.png"

function Main() {
  return (
    <>
  <div className="custom-cursor__cursor" />
  <div className="custom-cursor__cursor-two" />
  <div className="page-wrapper">
    <div className="under-construction gray-bg">
      <div className="container">
        <div
          className="under-construction__image wow fadeInUp"
          data-wow-duration="1500ms"
        >
          <img
            src={underConstruction1}
            className="float-bob-y"
            alt="img"
          />
        </div>
        {/* /.under-construction__image */}
        <h3 className="under-construction__title">
          Website Under Construction
        </h3>
        {/* /.under-construction__title */}
        <p className="under-construction__text">
          Our website is under construction, but we are ready to go, special
          surprise for our subscriber.
        </p>
        {/* /.under-construction__text */}
        <form action="#" className="under-construction__form mc-form">
          <input
            type="text"
            name="EMAIL"
            placeholder="Enter your Email address..."
          />
          <button type="submit" className="thm-btn under-construction__btn">
            <span>
              Notify me
              <i className="icon-arrow" />
            </span>
          </button>
        </form>
        {/* /.under-construction__form */}
        <div className="mc-form__response" />
        {/* /.mc-form__response */}
      </div>
      {/* /.container */}
    </div>
    {/* /.under-construction */}
  </div>
  {/* /.page-wrapper */}
  {/* plugin js */}
  {/* template js */}
</>

  )
}

export default Main
