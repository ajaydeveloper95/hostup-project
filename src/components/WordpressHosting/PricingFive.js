import React from 'react';
import pricingImg1 from "../../assets/images/resources/pricing-5-1.png"
import pricingImg2 from "../../assets/images/resources/pricing-5-2.png"
import pricingImg3 from "../../assets/images/resources/pricing-5-3.png"

function PricingFive() {
  return (
    <section className="pricing-five">
    <div className="container">
      <div className="pricing-five__section-title text-center">
        <h2 className="pricing-five__section-title__title">
          Manage your WordPress <br /> Hosting Plans
        </h2>
        <p className="pricing-five__section-title__text">
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
            {/*Pricing Four Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-five__single">
                <div className="pricing-five__save-month">
                  <p>SAVE 30% OVER MONTH</p>
                </div>
                <div className="pricing-five__img">
                  <img src={pricingImg1} alt="img" />
                </div>
                <h3 className="pricing-five__title">Hostup Press Basic</h3>
                <p className="pricing-five__text">
                  The text of the printing and typesetting industry
                </p>
                <div className="pricing-five__price-box">
                  <p>Starts from</p>
                  <h3 className="pricing-five__price">
                    $16.59
                    <span className="pricing-five__price-validity">/mo</span>{" "}
                  </h3>
                </div>
                <ul className="pricing-five__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Built for ~100k Monthly Visitors</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Unlimited Email</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        30GB SSD Storage <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Unmetered Bandwidth{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        1-Click Staging <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>SSL Certificate Pre-Installed</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        On-Demand + Daily Backups{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>24/7 WordPress Support</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Jetpack Free Pre-Installed{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Free Automated WordPress</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>WP Website Builder</p>
                    </div>
                  </li>
                </ul>
                <div className="pricing-five__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-five__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing Four Single End*/}
            {/*Pricing Four Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-five__single">
                <div className="pricing-five__save-month">
                  <p>SAVE 30% OVER MONTH</p>
                </div>
                <div className="pricing-five__img">
                  <img src={pricingImg2} alt="img" />
                </div>
                <h3 className="pricing-five__title">Hostup Press Plus</h3>
                <p className="pricing-five__text">
                  The text of the printing and typesetting industry
                </p>
                <div className="pricing-five__price-box">
                  <p>Starts from</p>
                  <h3 className="pricing-five__price">
                    $24.69
                    <span className="pricing-five__price-validity">/mo</span>{" "}
                  </h3>
                </div>
                <ul className="pricing-five__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Built for ~100k Monthly Visitors</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Unlimited Email</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        30GB SSD Storage <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Unmetered Bandwidth{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        1-Click Staging <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>SSL Certificate Pre-Installed</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        On-Demand + Daily Backups{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>24/7 WordPress Support</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Jetpack Free Pre-Installed{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Free Automated WordPress</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>WP Website Builder</p>
                    </div>
                  </li>
                </ul>
                <div className="pricing-five__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-five__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing Four Single End*/}
            {/*Pricing Four Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-five__single">
                <div className="pricing-five__save-month">
                  <p>SAVE 30% OVER MONTH</p>
                </div>
                <div className="pricing-five__img">
                  <img src={pricingImg3} alt="img" />
                </div>
                <h3 className="pricing-five__title">Hostup Press Pro</h3>
                <p className="pricing-five__text">
                  The text of the printing and typesetting industry
                </p>
                <div className="pricing-five__price-box">
                  <p>Starts from</p>
                  <h3 className="pricing-five__price">
                    $30.79
                    <span className="pricing-five__price-validity">/mo</span>{" "}
                  </h3>
                </div>
                <ul className="pricing-five__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Built for ~100k Monthly Visitors</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Unlimited Email</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        30GB SSD Storage <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Unmetered Bandwidth{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        1-Click Staging <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>SSL Certificate Pre-Installed</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        On-Demand + Daily Backups{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>24/7 WordPress Support</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Jetpack Free Pre-Installed{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Free Automated WordPress</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>WP Website Builder</p>
                    </div>
                  </li>
                </ul>
                <div className="pricing-five__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-five__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing Four Single End*/}
          </div>
        </div>
        <div id="year">
          <div className="row">
            {/*Pricing Four Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-five__single">
                <div className="pricing-five__save-month">
                  <p>SAVE 30% OVER MONTH</p>
                </div>
                <div className="pricing-five__img">
                  <img src={pricingImg1} alt="img" />
                </div>
                <h3 className="pricing-five__title">Hostup Press Basic</h3>
                <p className="pricing-five__text">
                  The text of the printing and typesetting industry
                </p>
                <div className="pricing-five__price-box">
                  <p>Starts from</p>
                  <h3 className="pricing-five__price">
                    $16.59
                    <span className="pricing-five__price-validity">/mo</span>{" "}
                  </h3>
                </div>
                <ul className="pricing-five__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Built for ~100k Monthly Visitors</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Unlimited Email</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        30GB SSD Storage <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Unmetered Bandwidth{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        1-Click Staging <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>SSL Certificate Pre-Installed</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        On-Demand + Daily Backups{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>24/7 WordPress Support</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Jetpack Free Pre-Installed{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Free Automated WordPress</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>WP Website Builder</p>
                    </div>
                  </li>
                </ul>
                <div className="pricing-five__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-five__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing Four Single End*/}
            {/*Pricing Four Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-five__single">
                <div className="pricing-five__save-month">
                  <p>SAVE 30% OVER MONTH</p>
                </div>
                <div className="pricing-five__img">
                  <img src={pricingImg2} alt="img" />
                </div>
                <h3 className="pricing-five__title">Hostup Press Plus</h3>
                <p className="pricing-five__text">
                  The text of the printing and typesetting industry
                </p>
                <div className="pricing-five__price-box">
                  <p>Starts from</p>
                  <h3 className="pricing-five__price">
                    $24.69
                    <span className="pricing-five__price-validity">/mo</span>{" "}
                  </h3>
                </div>
                <ul className="pricing-five__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Built for ~100k Monthly Visitors</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Unlimited Email</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        30GB SSD Storage <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Unmetered Bandwidth{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        1-Click Staging <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>SSL Certificate Pre-Installed</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        On-Demand + Daily Backups{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>24/7 WordPress Support</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Jetpack Free Pre-Installed{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Free Automated WordPress</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>WP Website Builder</p>
                    </div>
                  </li>
                </ul>
                <div className="pricing-five__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-five__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing Four Single End*/}
            {/*Pricing Four Single Start*/}
            <div className="col-xl-4 col-lg-4 animated fadeInLeft">
              <div className="pricing-five__single">
                <div className="pricing-five__save-month">
                  <p>SAVE 30% OVER MONTH</p>
                </div>
                <div className="pricing-five__img">
                  <img src={pricingImg3} alt="img" />
                </div>
                <h3 className="pricing-five__title">Hostup Press Pro</h3>
                <p className="pricing-five__text">
                  The text of the printing and typesetting industry
                </p>
                <div className="pricing-five__price-box">
                  <p>Starts from</p>
                  <h3 className="pricing-five__price">
                    $30.79
                    <span className="pricing-five__price-validity">/mo</span>{" "}
                  </h3>
                </div>
                <ul className="pricing-five__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Built for ~100k Monthly Visitors</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Unlimited Email</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        30GB SSD Storage <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Unmetered Bandwidth{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        1-Click Staging <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>SSL Certificate Pre-Installed</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        On-Demand + Daily Backups{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>24/7 WordPress Support</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Jetpack Free Pre-Installed{" "}
                        <span className="icon-icon-error" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>Free Automated WordPress</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-icon-check" />
                    </div>
                    <div className="text">
                      <p>WP Website Builder</p>
                    </div>
                  </li>
                </ul>
                <div className="pricing-five__btn-box">
                  <a
                    href="pricing.html"
                    className="thm-btn pricing-five__btn"
                  >
                    <span>
                      Choose Plan
                      <i className="icon-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*Pricing Four Single End*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PricingFive
