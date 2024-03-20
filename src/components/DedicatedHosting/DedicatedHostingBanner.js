import React from 'react'
import BannerThreeImg3 from "../../assets/images/resources/page-banner-three-img-7.png"

function DedicatedHostingBanner() {
  return (
    <section className="page-banner-three dedicated-hosting-page-banner">
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-lg-6">
          <div className="page-banner-three__left">
            <p className="page-banner-three__sub-title">
              Everything you need to launch a website.
            </p>
            <h3 className="page-banner-three__title">
              Dedicated Server Hosting
            </h3>
            <ul className="page-banner-three__points list-unstyled">
              <li>
                <div className="text">
                  <p>Easy cPanel Control Panel</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Managed Hardware &amp; Network</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Managed Server Security</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Root Access Available</p>
                </div>
              </li>
            </ul>
            <h3 className="page-banner-three__title-2">
              Starting at $13.59/mo
            </h3>
            <div className="page-banner-three__btn-box">
              <a href="about.html" className="thm-btn page-banner-three__btn">
                <span>
                  Get Started
                  <i className="icon-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="page-banner-three__right">
            <div className="page-banner-three__img float-bob-y">
              <img
                src={BannerThreeImg3}
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

export default DedicatedHostingBanner
