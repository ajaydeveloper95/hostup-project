import React from 'react'
import PageBannerThree from "../../assets/images/resources/page-banner-three-img-2.png"

function PageBanner() {
  return (
    <section className="page-banner-three web-hosting-page-banner">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="page-banner-three__left">
            <p className="page-banner-three__sub-title">
              Everything you need to launch a website.
            </p>
            <h3 className="page-banner-three__title">WordPress Hosting</h3>
            <ul className="page-banner-three__points list-unstyled">
              <li>
                <div className="text">
                  <p>Extreme Speed with Built-in Caching</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Powerful tools like Email, Staging &amp; Backups</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Free WordPress Migration</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>24/7 Expert WordPress Support</p>
                </div>
              </li>
            </ul>
            <h3 className="page-banner-three__title-2">
              Starting at $16.59/mo
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
        <div className="col-xl-6 col-lg-6">
          <div className="page-banner-three__right">
            <div className="page-banner-three__img float-bob-y">
              <img
                src={PageBannerThree}
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

export default PageBanner
