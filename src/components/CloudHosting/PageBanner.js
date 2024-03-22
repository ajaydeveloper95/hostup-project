import React from "react";
import PageBannerThreeImg from "../../assets/images/resources/page-banner-three-img-4.png"

function PageBanner() {
  return (
    <>
      <section className="page-banner-three cloud-hosting-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="page-banner-three__left">
                <p className="page-banner-three__sub-title">
                  Everything you need to launch a website.
                </p>
                <h3 className="page-banner-three__title">
                  Cloud Storage Hosting
                </h3>
                <ul className="page-banner-three__points list-unstyled">
                  <li>
                    <div className="text">
                      <p>Powered by Open Source</p>
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <p>S3 Compatible</p>
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <p>Fully Scalable Storage</p>
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <p>Reliable Redundant Servers</p>
                    </div>
                  </li>
                </ul>
                <h3 className="page-banner-three__title-2">
                  Starting at $9.99/mo
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
                    src={PageBannerThreeImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.page-banner-three */}
    </>
  );
}

export default PageBanner;
