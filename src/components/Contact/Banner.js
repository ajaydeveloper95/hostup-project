import React from 'react';
import PageHeaderImg1 from "../../assets/images/resources/page-header-1.png"

function Banner() {
  return (
    <div className="page-banner-one">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="page-banner-one__content">
            <p className="page-banner-one__tagline">
              We offer 24/7 support
            </p>
            {/* /.page-banner-one__tagline */}
            <h2 className="page-banner-one__title">
              Our award-winning support team is here for you 24/7/365.
            </h2>
            {/* /.page-banner-one__title */}
            <a
              href="contact.html"
              className="thm-btn page-banner-one__btn"
            >
              <span>
                Get Started
                <i className="icon-arrow" />
              </span>
            </a>
          </div>
          {/* /.page-banner-one__content */}
        </div>
        {/* /.col-lg-6 */}
        <div className="col-lg-6 clearfix">
          <div
            className="page-banner-one__image wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <img
              src={PageHeaderImg1}
              className="float-bob-y"
              alt="img"
            />
          </div>
          {/* /.page-banner-one__image */}
        </div>
        {/* /.col-lg-6 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  )
}

export default Banner
