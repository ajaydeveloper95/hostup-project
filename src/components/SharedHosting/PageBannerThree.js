import React from 'react'

function PageBannerThree() {
  return (
    <section className="page-banner-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="page-banner-three__left">
            <p className="page-banner-three__sub-title">
              Everything you need to launch a website.
            </p>
            <h3 className="page-banner-three__title">Shared Web Hosting</h3>
            <ul className="page-banner-three__points list-unstyled">
              <li>
                <div className="text">
                  <p>Fast, Secure &amp; Always Up</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Zero-Risk, 100% Money-Back Guarantee</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>4.5 Million Websites Choose Hostup</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>24/7 Support and much more!</p>
                </div>
              </li>
            </ul>
            <h3 className="page-banner-three__title-2">
              Starting at $18.99/mo
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
                src="assets/images/resources/page-banner-three-img-1.png"
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
