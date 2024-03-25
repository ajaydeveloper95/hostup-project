import React from "react";
import { Link } from "react-router-dom";

function PricingSeven() {
  return (
    <section className="pricing-seven">
      <div className="container">
        <div className="pricing-seven__section-title text-center">
          <h2 className="pricing-seven__section-title__title">
            Cloud hosting plans come with <br /> a free domain name
          </h2>
          <p className="pricing-seven__section-title__text">
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
            <Link to="/#">Monthly</Link>
          </li>
          <li>
            {/* Rounded switch */}
            <label className="switch on">
              <span className="slider round" />
            </label>
          </li>
          <li className="year">
            <Link to="/#">Yearly</Link>
          </li>
        </ul>
        {/* /.list-inline */}
        <div className="tabed-content">
          <div id="month">
            <div className="row">
              {/*Pricing Seven Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-seven__single">
                  <div className="pricing-seven__top">
                    <h4 className="pricing-seven__pack-name">Cloud Startup</h4>
                    <h2 className="pricing-seven__price">
                      $11.99 <span>/mo</span>
                    </h2>
                    <p className="pricing-seven__save">SAVE 60%</p>
                    <p className="pricing-seven__text">
                      $19.99/mo when you renew
                    </p>
                  </div>
                  <div className="pricing-seven__btn-box">
                    <Link
                      to="/pricing"
                      className="thm-btn pricing-seven__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </Link>
                  </div>
                  <div className="pricing-seven__points-box">
                    <h3 className="pricing-seven__points-title">
                      Top feature comparison
                    </h3>
                    <ul className="list-unstyled pricing-seven__points">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Websites <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>200 GB SSD Storage</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Email <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Bandwidth{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Databases{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Performance</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--two">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>3 GB RAM</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2 CPU Cores</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated Resources{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated IP Address{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Security</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--three">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Free SSL{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cloudflare Protected Nameservers</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      WordPress Options
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--four">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Managed WordPress{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Acceleration{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Staging Tool{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      Service and Support
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--five">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 Days Money Back Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            99.90% Uptime Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Multiple Data Centers{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      More Features
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--six">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            DNS Management <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Access Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Subdomains <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited FTP Account{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Cronjobs</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cache Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Powerful Control Panel</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Seven Single End*/}
              {/*Pricing Seven Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-seven__single pricing-seven__single--two">
                  <div className="pricing-seven__top">
                    <h4 className="pricing-seven__pack-name">
                      Cloud Professional
                    </h4>
                    <h2 className="pricing-seven__price">
                      $23.99 <span>/mo</span>
                    </h2>
                    <p className="pricing-seven__save">SAVE 60%</p>
                    <p className="pricing-seven__text">
                      $39.99/mo when you renew
                    </p>
                  </div>
                  <div className="pricing-seven__btn-box">
                    <Link
                      to="/pricing"
                      className="thm-btn pricing-seven__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </Link>
                  </div>
                  <div className="pricing-seven__points-box">
                    <h3 className="pricing-seven__points-title">
                      Top feature comparison
                    </h3>
                    <ul className="list-unstyled pricing-seven__points">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Websites <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>200 GB SSD Storage</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Email <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Bandwidth{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Databases{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Performance</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--two">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>3 GB RAM</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2 CPU Cores</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated Resources{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated IP Address{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Security</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--three">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Free SSL{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cloudflare Protected Nameservers</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      WordPress Options
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--four">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Managed WordPress{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Acceleration{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Staging Tool{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      Service and Support
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--five">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 Days Money Back Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            99.90% Uptime Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Multiple Data Centers{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      More Features
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--six">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            DNS Management <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Access Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Subdomains <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited FTP Account{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Cronjobs</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cache Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Powerful Control Panel</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Seven Single End*/}
              {/*Pricing Seven Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-seven__single pricing-seven__single">
                  <div className="pricing-seven__top">
                    <h4 className="pricing-seven__pack-name">
                      Cloud Enterprise
                    </h4>
                    <h2 className="pricing-seven__price">
                      $36.99 <span>/mo</span>
                    </h2>
                    <p className="pricing-seven__save">SAVE 60%</p>
                    <p className="pricing-seven__text">
                      $54.99/mo when you renew
                    </p>
                  </div>
                  <div className="pricing-seven__btn-box">
                    <Link
                      to="/pricing"
                      className="thm-btn pricing-seven__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </Link>
                  </div>
                  <div className="pricing-seven__points-box">
                    <h3 className="pricing-seven__points-title">
                      Top feature comparison
                    </h3>
                    <ul className="list-unstyled pricing-seven__points">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Websites <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>200 GB SSD Storage</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Email <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Bandwidth{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Databases{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Performance</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--two">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>3 GB RAM</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2 CPU Cores</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated Resources{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated IP Address{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Security</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--three">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Free SSL{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cloudflare Protected Nameservers</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      WordPress Options
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--four">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Managed WordPress{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Acceleration{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Staging Tool{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      Service and Support
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--five">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 Days Money Back Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            99.90% Uptime Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Multiple Data Centers{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      More Features
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--six">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            DNS Management <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Access Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Subdomains <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited FTP Account{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Cronjobs</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cache Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Powerful Control Panel</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Seven Single End*/}
            </div>
          </div>
          <div id="year">
            <div className="row">
              {/*Pricing Seven Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-seven__single">
                  <div className="pricing-seven__top">
                    <h4 className="pricing-seven__pack-name">Cloud Startup</h4>
                    <h2 className="pricing-seven__price">
                      $11.99 <span>/mo</span>
                    </h2>
                    <p className="pricing-seven__save">SAVE 60%</p>
                    <p className="pricing-seven__text">
                      $19.99/mo when you renew
                    </p>
                  </div>
                  <div className="pricing-seven__btn-box">
                    <Link
                      to="/pricing"
                      className="thm-btn pricing-seven__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </Link>
                  </div>
                  <div className="pricing-seven__points-box">
                    <h3 className="pricing-seven__points-title">
                      Top feature comparison
                    </h3>
                    <ul className="list-unstyled pricing-seven__points">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Websites <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>200 GB SSD Storage</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Email <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Bandwidth{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Databases{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Performance</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--two">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>3 GB RAM</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2 CPU Cores</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated Resources{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated IP Address{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Security</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--three">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Free SSL{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cloudflare Protected Nameservers</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      WordPress Options
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--four">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Managed WordPress{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Acceleration{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Staging Tool{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      Service and Support
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--five">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 Days Money Back Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            99.90% Uptime Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Multiple Data Centers{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      More Features
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--six">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            DNS Management <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Access Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Subdomains <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited FTP Account{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Cronjobs</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cache Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Powerful Control Panel</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Seven Single End*/}
              {/*Pricing Seven Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-seven__single pricing-seven__single--two">
                  <div className="pricing-seven__top">
                    <h4 className="pricing-seven__pack-name">
                      Cloud Professional
                    </h4>
                    <h2 className="pricing-seven__price">
                      $23.99 <span>/mo</span>
                    </h2>
                    <p className="pricing-seven__save">SAVE 60%</p>
                    <p className="pricing-seven__text">
                      $39.99/mo when you renew
                    </p>
                  </div>
                  <div className="pricing-seven__btn-box">
                    <Link
                      to="/pricing"
                      className="thm-btn pricing-seven__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </Link>
                  </div>
                  <div className="pricing-seven__points-box">
                    <h3 className="pricing-seven__points-title">
                      Top feature comparison
                    </h3>
                    <ul className="list-unstyled pricing-seven__points">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Websites <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>200 GB SSD Storage</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Email <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Bandwidth{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Databases{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Performance</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--two">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>3 GB RAM</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2 CPU Cores</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated Resources{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated IP Address{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Security</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--three">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Free SSL{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cloudflare Protected Nameservers</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      WordPress Options
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--four">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Managed WordPress{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Acceleration{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Staging Tool{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      Service and Support
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--five">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 Days Money Back Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            99.90% Uptime Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Multiple Data Centers{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      More Features
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--six">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            DNS Management <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Access Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Subdomains <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited FTP Account{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Cronjobs</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cache Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Powerful Control Panel</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Seven Single End*/}
              {/*Pricing Seven Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-seven__single pricing-seven__single">
                  <div className="pricing-seven__top">
                    <h4 className="pricing-seven__pack-name">
                      Cloud Enterprise
                    </h4>
                    <h2 className="pricing-seven__price">
                      $36.99 <span>/mo</span>
                    </h2>
                    <p className="pricing-seven__save">SAVE 60%</p>
                    <p className="pricing-seven__text">
                      $54.99/mo when you renew
                    </p>
                  </div>
                  <div className="pricing-seven__btn-box">
                    <Link
                      to="/pricing"
                      className="thm-btn pricing-seven__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </Link>
                  </div>
                  <div className="pricing-seven__points-box">
                    <h3 className="pricing-seven__points-title">
                      Top feature comparison
                    </h3>
                    <ul className="list-unstyled pricing-seven__points">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Websites <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>200 GB SSD Storage</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Email <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Bandwidth{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Databases{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Performance</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--two">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>3 GB RAM</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2 CPU Cores</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated Resources{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Dedicated IP Address{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">Security</h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--three">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited Free SSL{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cloudflare Protected Nameservers</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      WordPress Options
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--four">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Managed WordPress{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Acceleration{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            WordPress Staging Tool{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      Service and Support
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--five">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 Days Money Back Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            99.90% Uptime Guarantee{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Multiple Data Centers{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-seven__points-title">
                      More Features
                    </h3>
                    <ul className="list-unstyled pricing-seven__points pricing-seven__points--six">
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            DNS Management <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Access Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            300 Subdomains <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Unlimited FTP Account{" "}
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Cronjobs</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Cache Manager</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Powerful Control Panel</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Seven Single End*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSeven;
