import React from 'react';
import fasterOneshape1 from "../../assets/images/shapes/faster-one-shape-1.png"
import fasterOneImg from "../../assets/images/resources/faster-one-img-1.png"

function FasterOneStart() {
  return (
    <section className="faster-one">
    <div
      className="faster-one__shape-1 float-bob-y"
      style={{
        backgroundImage: `url(${fasterOneshape1})`
      }}
    />
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="faster-one__left">
            <div className="faster-one__img float-bob-x">
              <img src={fasterOneImg} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="faster-one__right">
            <h3 className="faster-one__top-title">
              Faster. Stronger. <br /> Dedicated
            </h3>
            <ul className="list-unstyled faster-one__list">
              <li>
                <div className="icon">
                  <span className="icon-icon-check-2" />
                </div>
                <div className="content">
                  <h3>Guaranteed 99.9% Uptime</h3>
                  <p>
                    The Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-icon-check-2" />
                </div>
                <div className="content">
                  <h3>Superior Performance</h3>
                  <p>
                    The Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-icon-check-2" />
                </div>
                <div className="content">
                  <h3>Powerful Control Panel</h3>
                  <p>
                    The Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet.
                  </p>
                </div>
              </li>
            </ul>
            <a href="about.html" className="thm-btn faster-one__btn">
              <span>
                Get Started
                <i className="icon-arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default FasterOneStart
