import React from 'react';
import powerControl1 from "../../assets/images/icons/power-control-icon-1.png"
import powerControl2 from "../../assets/images/icons/power-control-icon-2.png"
import powerControl3 from "../../assets/images/icons/power-control-icon-3.png"

function PowerControl() {
  return (
    <section className="power-control">
    <div className="container">
      <h3 className="power-control__section-title">
        Get more power and control <br /> with your own server
      </h3>
      <div className="row">
        {/*Power Control Single Start*/}
        <div className="col-xl-4 col-lg-4 animated fadeInLeft">
          <div
            className="power-control__single wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="power-control__icon">
              <img
                src={powerControl1}
                alt="img"
              />
            </div>
            <h3 className=" power-control__title">Entry Level</h3>
            <p className="power-control__text">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search.
            </p>
            <div className="power-control__btn">
              <a href="about.html">
                Read more
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*Power Control Single End*/}
        {/*Power Control Single Start*/}
        <div className="col-xl-4 col-lg-4 animated fadeInLeft">
          <div
            className="power-control__single wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="power-control__icon">
              <img
                src={powerControl2}
                alt="img"
              />
            </div>
            <h3 className=" power-control__title">Medium Level</h3>
            <p className="power-control__text">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search.
            </p>
            <div className="power-control__btn">
              <a href="about.html">
                Read more
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*Power Control Single End*/}
        {/*Power Control Single Start*/}
        <div className="col-xl-4 col-lg-4 animated fadeInLeft">
          <div
            className="power-control__single wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="power-control__icon">
              <img
                src={powerControl3}
                alt="img"
              />
            </div>
            <h3 className=" power-control__title">Advanced Level</h3>
            <p className="power-control__text">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search.
            </p>
            <div className="power-control__btn">
              <a href="about.html">
                Read more
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*Power Control Single End*/}
      </div>
    </div>
  </section>
  )
}

export default PowerControl
