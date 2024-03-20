import React from 'react'

function PageBanner() {
  return (
    <section className="page-banner-three ssl-certificate-page-banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="page-banner-three__left">
              <p className="page-banner-three__sub-title">
                Everything you need to launch a website.
              </p>
              <h3 className="page-banner-three__title">Free SSL Certificate</h3>
              <ul className="page-banner-three__points list-unstyled">
                <li>
                  <div className="text">
                    <p>Up to 256 bit encryption</p>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <p>Encrypts and authenticates your website's identity</p>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <p>Compatible with all major browsers</p>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <p>Comodo trusted secure site seal</p>
                  </div>
                </li>
              </ul>
              <h3 className="page-banner-three__title-2">Starting at “Free”</h3>
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
                  src="assets/images/resources/page-banner-three-img-8.png"
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
