import React from 'react'
import loadedShape1 from "../../assets/images/shapes/fully-loaded-shape-1.png";
import FullLoadedImg1 from "../../assets/images/resources/fully-loaded-img-1.png"

function FullLoaded() {
  return (
    <section className="fully-loaded">
      <div
        className="fully-loaded__shape-1 float-bob-y"
        style={{
          backgroundImage: `url(${loadedShape1})`
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="fully-loaded__left">
              <h3 className="fully-loaded__title">
                Hosting thats totally dedicated and fully loaded
              </h3>
              <ul className="fully-loaded__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-check-circle" />
                  </div>
                  <div className="text">
                    <p>
                      Full root &amp; shell access (SSH) for maximum control.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-circle" />
                  </div>
                  <div className="text">
                    <p>
                      Reboot or powercycle your server whenever it's needed.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-circle" />
                  </div>
                  <div className="text">
                    <p>
                      Manage all the domains, websites, and email addresses you
                      own.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="fully-loaded__btn-box">
                <a href="about.html" className="thm-btn fully-loaded__btn">
                  <span>
                    Get Started
                    <i className="icon-arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="fully-loaded__right">
              <div className="fully-loaded__img float-bob-y">
                <img
                  src={FullLoadedImg1}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullLoaded
