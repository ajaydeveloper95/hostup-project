import React from 'react'

function AwardedTwo() {
  return (
    <section className="awarded-two">
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-6">
          <div className="awarded-two__left">
            <h3 className="awarded-two__title">
              Industry's Best Reseller <br /> Hosting - Hostup
            </h3>
            <p className="awarded-two__text">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
            <div className="awarded-two__btn-box">
              <a href="#" className="thm-btn awarded-two__btn">
                <span>
                  Get Started
                  <i className="icon-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-6">
          <div className="awarded-two__right">
            <ul className="list-unstyled awarded-two__list">
              <li>
                <div className="awarded-two__img">
                  <img src="assets/images/resources/awarded-2-1.png" alt="img" />
                </div>
              </li>
              <li>
                <div className="awarded-two__img">
                  <img src="assets/images/resources/awarded-2-2.png" alt="img" />
                </div>
              </li>
              <li>
                <div className="awarded-two__img">
                  <img src="assets/images/resources/awarded-2-3.png" alt="img" />
                </div>
              </li>
            </ul>
            <ul className="list-unstyled awarded-two__list">
              <li>
                <div className="awarded-two__img">
                  <img src="assets/images/resources/awarded-2-4.png" alt="img" />
                </div>
              </li>
              <li>
                <div className="awarded-two__img">
                  <img src="assets/images/resources/awarded-2-5.png" alt="img" />
                </div>
              </li>
              <li>
                <div className="awarded-two__img">
                  <img src="assets/images/resources/awarded-2-6.png" alt="img" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AwardedTwo
