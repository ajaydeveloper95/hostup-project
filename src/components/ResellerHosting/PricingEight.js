import React from 'react'

function PricingEight() {
  return (
    <section className="pricing-eight">
      <div className="container">
        <div className="pricing-eight__section-title text-center">
          <h2 className="pricing-eight__section-title__title">
            Manage your WordPress <br /> Hosting Plans
          </h2>
          <p className="pricing-eight__section-title__text">
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
            <a href="#">Linux Reseller</a>
          </li>
          <li>
            {/* Rounded switch */}
            <label className="switch on">
              <span className="slider round" />
            </label>
          </li>
          <li className="year">
            <a href="#">Windows Reseller</a>
          </li>
        </ul>
        {/* /.list-inline */}
        <div className="tabed-content">
          <div id="month">
            <div className="row">
              {/*Pricing Eight Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-eight__single">
                  <h3 className="pricing-eight__title">Aluminium Plan</h3>
                  <div className="pricing-eight__price-box">
                    <h3 className="pricing-eight__price">
                      $16.39
                      <span className="pricing-eight__price-validity">/mo</span>{" "}
                    </h3>
                    <p>Now 43% off!</p>
                  </div>
                  <p className="pricing-eight__text">
                    Get started with your own virtual server
                  </p>
                  <div className="pricing-eight__btn-box">
                    <a
                      href="pricing.html"
                      className="thm-btn pricing-eight__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <div className="pricing-eight__points-box">
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>15 cPanel Accounts</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>50GB NVMe SSD Disk Space</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2GB LVE RAM per cPanel</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Tech Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Free SSL Certificates</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Migrations <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>* Free Domain Registration/Transfer</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-eight__points-title">
                      More Features
                    </h3>
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 GB NVMe SSD <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth @ 1 Gbit/s</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            10 cPanel Accounts
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
                            Host Unlimited Domains
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>PHP, Perl, Python, Nodejs, MySQL</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>FREE SSL (https) For Every Domain</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Full WHM Access</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>CloudLinux + Litespeed Optimized</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Imunify360 Firewall + Antivirus +</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Mailchannels + Mailscannner</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Daily Backups - Jetbackup</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Softaculous Apps Installer</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Sitepad Website Builder</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Eight Single End*/}
              {/*Pricing Eight Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div
                  className="pricing-eight__single pricing-eight__single-2"
                  data-wow-delay="300ms"
                >
                  <h3 className="pricing-eight__title">Copper Plan</h3>
                  <div className="pricing-eight__price-box">
                    <h3 className="pricing-eight__price">
                      $19.39
                      <span className="pricing-eight__price-validity">/mo</span>{" "}
                    </h3>
                    <p>Now 49% off!</p>
                  </div>
                  <p className="pricing-eight__text">
                    Get started with your own virtual server
                  </p>
                  <div className="pricing-eight__btn-box">
                    <a
                      href="pricing.html"
                      className="thm-btn pricing-eight__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <div className="pricing-eight__points-box">
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>50 cPanel Accounts</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>250GB NVMe SSD Disk Space</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2GB LVE RAM per cPanel</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Tech Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Free SSL Certificates</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Migrations <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>* Free Domain Registration/Transfer</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-eight__points-title">
                      More Features
                    </h3>
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 GB NVMe SSD <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth @ 1 Gbit/s</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            10 cPanel Accounts
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
                            Host Unlimited Domains
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>PHP, Perl, Python, Nodejs, MySQL</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>FREE SSL (https) For Every Domain</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Full WHM Access</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>CloudLinux + Litespeed Optimized</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Imunify360 Firewall + Antivirus +</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Mailchannels + Mailscannner</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Daily Backups - Jetbackup</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Softaculous Apps Installer</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Sitepad Website Builder</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Eight Single End*/}
              {/*Pricing Eight Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div
                  className="pricing-eight__single pricing-eight__single-3"
                  data-wow-delay="300ms"
                >
                  <h3 className="pricing-eight__title">Silver Plan</h3>
                  <div className="pricing-eight__price-box">
                    <h3 className="pricing-eight__price">
                      $22.39
                      <span className="pricing-eight__price-validity">/mo</span>{" "}
                    </h3>
                    <p>Now 49% off!</p>
                  </div>
                  <p className="pricing-eight__text">
                    Get started with your own virtual server
                  </p>
                  <div className="pricing-eight__btn-box">
                    <a
                      href="pricing.html"
                      className="thm-btn pricing-eight__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <div className="pricing-eight__points-box">
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>75 cPanel Accounts</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited NVMe SSD Disk Space</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2GB LVE RAM per cPanel</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Tech Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Free SSL Certificates</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Migrations <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>* Free Domain Registration/Transfer</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-eight__points-title">
                      More Features
                    </h3>
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 GB NVMe SSD <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth @ 1 Gbit/s</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            10 cPanel Accounts
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
                            Host Unlimited Domains
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>PHP, Perl, Python, Nodejs, MySQL</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>FREE SSL (https) For Every Domain</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Full WHM Access</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>CloudLinux + Litespeed Optimized</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Imunify360 Firewall + Antivirus +</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Mailchannels + Mailscannner</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Daily Backups - Jetbackup</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Softaculous Apps Installer</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Sitepad Website Builder</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Eight Single End*/}
            </div>
          </div>
          <div id="year">
            <div className="row">
              {/*Pricing Eight Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-eight__single">
                  <h3 className="pricing-eight__title">Aluminium Plan</h3>
                  <div className="pricing-eight__price-box">
                    <h3 className="pricing-eight__price">
                      $16.39
                      <span className="pricing-eight__price-validity">/mo</span>{" "}
                    </h3>
                    <p>Now 43% off!</p>
                  </div>
                  <p className="pricing-eight__text">
                    Get started with your own virtual server
                  </p>
                  <div className="pricing-eight__btn-box">
                    <a
                      href="pricing.html"
                      className="thm-btn pricing-eight__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <div className="pricing-eight__points-box">
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>15 cPanel Accounts</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>50GB NVMe SSD Disk Space</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2GB LVE RAM per cPanel</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Tech Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Free SSL Certificates</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Migrations <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>* Free Domain Registration/Transfer</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-eight__points-title">
                      More Features
                    </h3>
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 GB NVMe SSD <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth @ 1 Gbit/s</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            10 cPanel Accounts
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
                            Host Unlimited Domains
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>PHP, Perl, Python, Nodejs, MySQL</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>FREE SSL (https) For Every Domain</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Full WHM Access</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>CloudLinux + Litespeed Optimized</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Imunify360 Firewall + Antivirus +</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Mailchannels + Mailscannner</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Daily Backups - Jetbackup</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Softaculous Apps Installer</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Sitepad Website Builder</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Eight Single End*/}
              {/*Pricing Eight Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div
                  className="pricing-eight__single pricing-eight__single-2"
                  data-wow-delay="300ms"
                >
                  <h3 className="pricing-eight__title">Copper Plan</h3>
                  <div className="pricing-eight__price-box">
                    <h3 className="pricing-eight__price">
                      $19.39
                      <span className="pricing-eight__price-validity">/mo</span>{" "}
                    </h3>
                    <p>Now 49% off!</p>
                  </div>
                  <p className="pricing-eight__text">
                    Get started with your own virtual server
                  </p>
                  <div className="pricing-eight__btn-box">
                    <a
                      href="pricing.html"
                      className="thm-btn pricing-eight__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <div className="pricing-eight__points-box">
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>50 cPanel Accounts</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>250GB NVMe SSD Disk Space</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2GB LVE RAM per cPanel</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Tech Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Free SSL Certificates</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Migrations <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>* Free Domain Registration/Transfer</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-eight__points-title">
                      More Features
                    </h3>
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 GB NVMe SSD <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth @ 1 Gbit/s</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            10 cPanel Accounts
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
                            Host Unlimited Domains
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>PHP, Perl, Python, Nodejs, MySQL</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>FREE SSL (https) For Every Domain</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Full WHM Access</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>CloudLinux + Litespeed Optimized</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Imunify360 Firewall + Antivirus +</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Mailchannels + Mailscannner</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Daily Backups - Jetbackup</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Softaculous Apps Installer</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Sitepad Website Builder</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Eight Single End*/}
              {/*Pricing Eight Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div
                  className="pricing-eight__single pricing-eight__single-3"
                  data-wow-delay="300ms"
                >
                  <h3 className="pricing-eight__title">Silver Plan</h3>
                  <div className="pricing-eight__price-box">
                    <h3 className="pricing-eight__price">
                      $22.39
                      <span className="pricing-eight__price-validity">/mo</span>{" "}
                    </h3>
                    <p>Now 49% off!</p>
                  </div>
                  <p className="pricing-eight__text">
                    Get started with your own virtual server
                  </p>
                  <div className="pricing-eight__btn-box">
                    <a
                      href="pricing.html"
                      className="thm-btn pricing-eight__btn"
                    >
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <div className="pricing-eight__points-box">
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>75 cPanel Accounts</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited NVMe SSD Disk Space</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>2GB LVE RAM per cPanel</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>24/7 Tech Support</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Free SSL Certificates</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            Free Migrations <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>* Free Domain Registration/Transfer</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="pricing-eight__points-title">
                      More Features
                    </h3>
                    <ul className="pricing-eight__points-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            30 GB NVMe SSD <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Unlimited Bandwidth @ 1 Gbit/s</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>
                            10 cPanel Accounts
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
                            Host Unlimited Domains
                            <span className="icon-icon-error" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>PHP, Perl, Python, Nodejs, MySQL</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>FREE SSL (https) For Every Domain</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Full WHM Access</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>CloudLinux + Litespeed Optimized</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Imunify360 Firewall + Antivirus +</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Mailchannels + Mailscannner</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Daily Backups - Jetbackup</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Softaculous Apps Installer</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-icon-check" />
                        </div>
                        <div className="text">
                          <p>Sitepad Website Builder</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Pricing Eight Single End*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingEight
