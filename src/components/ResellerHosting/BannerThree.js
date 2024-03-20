import React from 'react'

function BannerThree() {
  return (
    <section className="page-banner-three reseller-hosting-page-banner">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="page-banner-three__left">
            <p className="page-banner-three__sub-title">
              Everything you need to launch a website.
            </p>
            <h3 className="page-banner-three__title">
              Reseller Server Hosting
            </h3>
            <ul className="page-banner-three__points list-unstyled">
              <li>
                <div className="text">
                  <p>Guaranteed 99.9% uptime.</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Powerful hosting, courtesy of NVMe SSDs.</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Expert hosting support.</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>Up to 20X faster with Turbo server.</p>
                </div>
              </li>
            </ul>
            <h3 className="page-banner-three__title-2">
              Starting at $16.39/mo
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
                src="assets/images/resources/page-banner-three-img-6.png"
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

export default BannerThree
