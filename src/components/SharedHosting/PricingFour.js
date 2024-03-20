import React from 'react'

function PricingFour() {
  return (
    <section className="pricing-four">
    <div className="container">
      <div className="pricing-four__section-title text-center">
        <h2 className="pricing-four__section-title__title">
          Your hosting features that <br /> fits your ambition
        </h2>
        <p className="pricing-four__section-title__text">
          The distracted by the readable content of a page when looking at its
          layout
        </p>
      </div>
      <ul
        className="list-inline text-center switch-toggler-list"
        role="tablist"
        id="switch-toggle-tab"
      >
        <li className="month active">
          <a href="#">Monthly</a>
        </li>
        <li>
          {/* Rounded switch */}
          <label className="switch on">
            <span className="slider round" />
          </label>
        </li>
        <li className="year">
          <a href="#">Yearly</a>
        </li>
      </ul>
      {/* /.list-inline */}
      <div className="tabed-content">
        <div id="month">
          <div className="row">
            {/*Pricing One Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-four__single">
                <div className="pricing-four__recomanded">
                  <p>
                    <span className="icon-star" />
                    RECOMMENDED
                  </p>
                </div>
                <div className="pricing-four__price-box">
                  <h3 className="pricing-four__price">
                    $18. <span className="pricing-four__price-point">99</span>{" "}
                    <span className="pricing-four__price-validity">/mo</span>{" "}
                  </h3>
                  <p className="pricing-four__price-renew">
                    Normally @ ₹<span>299</span>
                  </p>
                  <h4 className="pricing-four__title">
                    <a href="#">Shared Basic</a>
                  </h4>
                </div>
                <div className="pricing-four__points-box">
                  <h3 className="pricing-four__points-title">
                    Top Features
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Website</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>50 GB SSD Storage</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Unmetered Bandwidth</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>25 Sub Domains</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Database</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="pricing-four__points-title pricing-four__points-title-2">
                    Performance, Security, &amp; Marketing
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>SSL Certificate Protection</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Automatic Daily Malware Scan</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Free Speed Boosting CDN</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          Email Marketing Tool <span>New</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>WordPress Website Migration</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Yoast SEO Optimizer</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pricing-four__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-four__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing One Single End*/}
            {/*Pricing One Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-four__single">
                <div className="pricing-four__recomanded">
                  <p>
                    <span className="icon-star" />
                    RECOMMENDED
                  </p>
                </div>
                <div className="pricing-four__price-box">
                  <h3 className="pricing-four__price">
                    $21. <span className="pricing-four__price-point">99</span>{" "}
                    <span className="pricing-four__price-validity">/mo</span>{" "}
                  </h3>
                  <p className="pricing-four__price-renew">
                    Normally @ ₹<span>399</span>
                  </p>
                  <h4 className="pricing-four__title">
                    <a href="#">Shared Premium</a>
                  </h4>
                </div>
                <div className="pricing-four__points-box">
                  <h3 className="pricing-four__points-title">
                    Top Features
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Website</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>50 GB SSD Storage</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Unmetered Bandwidth</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>25 Sub Domains</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Database</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="pricing-four__points-title pricing-four__points-title-2">
                    Performance, Security, &amp; Marketing
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>SSL Certificate Protection</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Automatic Daily Malware Scan</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          Free Speed Boosting CDN <span>New</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Email Marketing Tool</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>WordPress Website Migration</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Yoast SEO Optimizer</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pricing-four__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-four__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing One Single End*/}
            {/*Pricing One Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-four__single">
                <div className="pricing-four__recomanded">
                  <p>
                    <span className="icon-star" />
                    RECOMMENDED
                  </p>
                </div>
                <div className="pricing-four__price-box">
                  <h3 className="pricing-four__price">
                    $26. <span className="pricing-four__price-point">99</span>{" "}
                    <span className="pricing-four__price-validity">/mo</span>{" "}
                  </h3>
                  <p className="pricing-four__price-renew">
                    Normally @ ₹<span>499</span>
                  </p>
                  <h4 className="pricing-four__title">
                    <a href="#">Shared Pro</a>
                  </h4>
                </div>
                <div className="pricing-four__points-box">
                  <h3 className="pricing-four__points-title">
                    Top Features
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Website</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>50 GB SSD Storage</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Unmetered Bandwidth</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>25 Sub Domains</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Database</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="pricing-four__points-title pricing-four__points-title-2">
                    Performance, Security, &amp; Marketing
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          SSL Certificate Protection <span>New</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Automatic Daily Malware Scan</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Free Speed Boosting CDN</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Email Marketing Tool</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>WordPress Website Migration</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Yoast SEO Optimizer</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pricing-four__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-four__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing One Single End*/}
          </div>
        </div>
        <div id="year">
          <div className="row">
            {/*Pricing One Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-four__single">
                <div className="pricing-four__recomanded">
                  <p>
                    <span className="icon-star" />
                    RECOMMENDED
                  </p>
                </div>
                <div className="pricing-four__price-box">
                  <h3 className="pricing-four__price">
                    $18. <span className="pricing-four__price-point">99</span>{" "}
                    <span className="pricing-four__price-validity">/mo</span>{" "}
                  </h3>
                  <p className="pricing-four__price-renew">
                    Normally @ ₹<span>299</span>
                  </p>
                  <h4 className="pricing-four__title">
                    <a href="#">Shared Basic</a>
                  </h4>
                </div>
                <div className="pricing-four__points-box">
                  <h3 className="pricing-four__points-title">
                    Top Features
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Website</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>50 GB SSD Storage</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Unmetered Bandwidth</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>25 Sub Domains</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Database</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="pricing-four__points-title pricing-four__points-title-2">
                    Performance, Security, &amp; Marketing
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>SSL Certificate Protection</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Automatic Daily Malware Scan</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Free Speed Boosting CDN</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          Email Marketing Tool <span>New</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>WordPress Website Migration</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Yoast SEO Optimizer</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pricing-four__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-four__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing One Single End*/}
            {/*Pricing One Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-four__single">
                <div className="pricing-four__recomanded">
                  <p>
                    <span className="icon-star" />
                    RECOMMENDED
                  </p>
                </div>
                <div className="pricing-four__price-box">
                  <h3 className="pricing-four__price">
                    $21. <span className="pricing-four__price-point">99</span>{" "}
                    <span className="pricing-four__price-validity">/mo</span>{" "}
                  </h3>
                  <p className="pricing-four__price-renew">
                    Normally @ ₹<span>399</span>
                  </p>
                  <h4 className="pricing-four__title">
                    <a href="#">Shared Premium</a>
                  </h4>
                </div>
                <div className="pricing-four__points-box">
                  <h3 className="pricing-four__points-title">
                    Top Features
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Website</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>50 GB SSD Storage</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Unmetered Bandwidth</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>25 Sub Domains</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Database</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="pricing-four__points-title pricing-four__points-title-2">
                    Performance, Security, &amp; Marketing
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>SSL Certificate Protection</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Automatic Daily Malware Scan</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          Free Speed Boosting CDN <span>New</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Email Marketing Tool</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>WordPress Website Migration</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Yoast SEO Optimizer</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pricing-four__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-four__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing One Single End*/}
            {/*Pricing One Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-four__single">
                <div className="pricing-four__recomanded">
                  <p>
                    <span className="icon-star" />
                    RECOMMENDED
                  </p>
                </div>
                <div className="pricing-four__price-box">
                  <h3 className="pricing-four__price">
                    $26. <span className="pricing-four__price-point">99</span>{" "}
                    <span className="pricing-four__price-validity">/mo</span>{" "}
                  </h3>
                  <p className="pricing-four__price-renew">
                    Normally @ ₹<span>499</span>
                  </p>
                  <h4 className="pricing-four__title">
                    <a href="#">Shared Pro</a>
                  </h4>
                </div>
                <div className="pricing-four__points-box">
                  <h3 className="pricing-four__points-title">
                    Top Features
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Website</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>50 GB SSD Storage</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Unmetered Bandwidth</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>25 Sub Domains</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>1 Database</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="pricing-four__points-title pricing-four__points-title-2">
                    Performance, Security, &amp; Marketing
                    <span className="icon-icon-error" />
                  </h3>
                  <ul className="list-unstyled pricing-four__points">
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          SSL Certificate Protection <span>New</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Automatic Daily Malware Scan</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Free Speed Boosting CDN</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Email Marketing Tool</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>WordPress Website Migration</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>Yoast SEO Optimizer</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pricing-four__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-four__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing One Single End*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PricingFour
