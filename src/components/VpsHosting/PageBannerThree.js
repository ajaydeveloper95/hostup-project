import React from 'react';
import BannerThreeImg3 from "../../assets/images/resources/page-banner-three-img-3.png"

function PageBannerThree() {
  return (
    <section className="page-banner-three vps-hosting-page-banner">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="page-banner-three__left">
            <p className="page-banner-three__sub-title">
              Everything you need to launch a website.
            </p>
            <h3 className="page-banner-three__title">
              Virtual Private Server
            </h3>
            <ul className="page-banner-three__points list-unstyled">
              <li>
                <div className="text">
                  <p>Managed Performance, Security, &amp; Updates</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Quick &amp; easy to use custom control panel</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Unlimited bandwidth &amp; traffic</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Expandable RAM &amp; storage</p>
                </div>
              </li>
            </ul>
            <h3 className="page-banner-three__title-2">
              Starting at $11.99/mo
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

export default PageBannerThree
