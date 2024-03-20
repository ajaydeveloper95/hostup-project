import React from 'react'

function BannerPageThree() {
  return (
    <section className="page-banner-three game-hosting-page-banner">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="page-banner-three__left">
            <p className="page-banner-three__sub-title">
              Everything you need to launch a website.
            </p>
            <h3 className="page-banner-three__title">
              Game Server Hosting
            </h3>
            <ul className="page-banner-three__points list-unstyled">
              <li>
                <div className="text">
                  <p>High-Performance Hardware</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Easy Configuration</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Steam Workshop Availability</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Switch Games Any Time</p>
                </div>
              </li>
            </ul>
            <h3 className="page-banner-three__title-2">
              Starting at $10.99/mo
            </h3>
            <div className="page-banner-three__btn-box">
              <a
                href="about.html"
                className="thm-btn page-banner-three__btn"
              >
                <span>
                  Get Started
                  <i className="icon-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="page-banner-three__right">
            <div className="page-banner-three__img float-bob-y">
              <img
                src="assets/images/resources/page-banner-three-img-5.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  )
}

export default BannerPageThree
