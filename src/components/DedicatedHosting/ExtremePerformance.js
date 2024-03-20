import React from 'react'
import performance1 from "../../assets/images/resources/extreme-performance-img-1.png"

function ExtremePerformance() {
  return (
    <section className="extreme-performance">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="extreme-performance__left">
              <div className="extreme-performance__img">
                <img
                  src={performance1}
                  alt="img"
                  className="float-bob-y"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="extreme-performance__right">
              <h3 className="extreme-performance__title">
                The power and control of Hostup dedicated servers
              </h3>
              <p className="extreme-performance__text">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for
                uncover many web sites still in their infancy.
              </p>
              <ul className="extreme-performance__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-check-circle" />
                  </div>
                  <div className="text">
                    <p>
                      Comes with either HDD or SSD hard drives for lightning
                      fast loading times.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-circle" />
                  </div>
                  <div className="text">
                    <p>
                      Use your server resources how you want without having to
                      share.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-circle" />
                  </div>
                  <div className="text">
                    <p>
                      Rest easy with 24x7 DDoS protection and 2N+2 power
                      redundancy.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="extreme-performance__btn-box">
                <a href="#" className="thm-btn extreme-performance__btn">
                  <span>
                    Get Started
                    <i className="icon-arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtremePerformance
