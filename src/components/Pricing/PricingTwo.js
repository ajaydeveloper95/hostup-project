import React from 'react'

function PricingTwo() {
  return (
    <section className="pricing-two">
    <div className="pricing-two__shape-1 float-bob-y">
      <img src="assets/images/shapes/pricing-two-shape-1.png" alt="img" />
    </div>
    <div className="pricing-two__shape-2 float-bob-y">
      <img src="assets/images/shapes/pricing-two-shape-2.png" alt="img" />
    </div>
    <div className="pricing-two__shape-3 float-bob-x">
      <img src="assets/images/shapes/pricing-two-shape-3.png" alt="img" />
    </div>
    <div className="pricing-two__shape-4 float-bob-y">
      <img src="assets/images/shapes/pricing-two-shape-4.png" alt="img" />
    </div>
    <div className="pricing-two__shape-5 float-bob-x">
      <img src="assets/images/shapes/pricing-two-shape-5.png" alt="img" />
    </div>
    <div className="container">
      <h2 className="pricing-two__title">
        Your hosting features that <br /> fits your ambition
      </h2>
      <div className="pricing-two__inner tabs-box">
        <div className="row">
          <div className="col-xl-5">
            <div className="pricing-two__tab-buttons-box">
              <ul className="tab-buttons clearfix list-unstyled">
                <li
                  data-tab="#premium-hosting"
                  className="tab-btn active-btn"
                >
                  <div className="icon">
                    <span className="icon-hosting-icon" />
                  </div>
                  <div className="content">
                    <h3>Premium Web Hosting</h3>
                    <p>
                      The publishing packages and webs page editors now use
                      Lorem Ipsum as their default model text.
                    </p>
                  </div>
                </li>
                <li data-tab="#cloud-server" className="tab-btn">
                  <div className="icon">
                    <span className="icon-cloud-server" />
                  </div>
                  <div className="content">
                    <h3>Cloud Dedicated Server</h3>
                    <p>
                      The publishing packages and webs page editors now use
                      Lorem Ipsum as their default model text.
                    </p>
                  </div>
                </li>
                <li data-tab="#VPS-hosting" className="tab-btn">
                  <div className="icon">
                    <span className="icon-ssd-server" />
                  </div>
                  <div className="content">
                    <h3>VPS Web Hosting</h3>
                    <p>
                      The publishing packages and webs page editors now use
                      Lorem Ipsum as their default model text.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="pricing-two__tabs-content-box">
              <div className="tabs-content">
                {/*tab*/}
                <div className="tab active-tab" id="premium-hosting">
                  <div className="pricing-two__inner-content">
                    <div className="pricing-two__inner-content-top">
                      <div className="pricing-two__inner-content-top-left">
                        <p>SAVE 65%</p>
                        <h3>Premium Web Hosting</h3>
                      </div>
                      <h3 className="pricing-two__price">
                        $10.{" "}
                        <span className="pricing-two__price-point">99</span>{" "}
                        <span className="pricing-two__price-validity">
                          /mo
                        </span>{" "}
                      </h3>
                    </div>
                    <a
                      href="pricing.html"
                      className="thm-btn pricing-two__btn"
                    >
                      <span>
                        Add to Cart
                        <i className="icon-arrow" />
                      </span>
                    </a>
                    <div className="pricing-two__renew-box">
                      <p>$16.99/mo when you renew</p>
                    </div>
                    <div className="pricing-two__points-box">
                      <ul className="list-unstyled pricing-two__points">
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>Unlimited websites</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>One-click WordPress installs</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>Free WordPress/cPanel transfer</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>Unmetered bandwidth</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>
                              Free SSL certificate{" "}
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
                              Free domain included{" "}
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
                              Free dedicated IP{" "}
                              <span className="icon-icon-error" />
                            </p>
                          </div>
                        </li>
                      </ul>
                      <ul className="list-unstyled pricing-two__points pricing-two__points--two">
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>100 Parked domains</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>100 Subdomains per account</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>
                              Full DNS Editor{" "}
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
                            <p>WordPress Multisite</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>24/7 Customer Support</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div className="tab" id="cloud-server">
                  <div className="pricing-two__inner-content">
                    <div className="pricing-two__inner-content-top">
                      <div className="pricing-two__inner-content-top-left">
                        <p>SAVE 65%</p>
                        <h3>Cloud Dedicated Server</h3>
                      </div>
                      <h3 className="pricing-two__price">
                        $23.{" "}
                        <span className="pricing-two__price-point">99</span>{" "}
                        <span className="pricing-two__price-validity">
                          /mo
                        </span>{" "}
                      </h3>
                    </div>
                    <a
                      href="pricing.html"
                      className="thm-btn pricing-two__btn"
                    >
                      <span>
                        Add to Cart
                        <i className="icon-arrow" />
                      </span>
                    </a>
                    <div className="pricing-two__renew-box">
                      <p>$16.99/mo when you renew</p>
                    </div>
                    <div className="pricing-two__points-box">
                      <ul className="list-unstyled pricing-two__points">
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>Unlimited websites</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>One-click WordPress installs</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>Free WordPress/cPanel transfer</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>Unmetered bandwidth</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>
                              Free SSL certificate{" "}
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
                              Free domain included{" "}
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
                              Free dedicated IP{" "}
                              <span className="icon-icon-error" />
                            </p>
                          </div>
                        </li>
                      </ul>
                      <ul className="list-unstyled pricing-two__points pricing-two__points--two">
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>100 Parked domains</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>100 Subdomains per account</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>
                              Full DNS Editor{" "}
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
                            <p>WordPress Multisite</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>24/7 Customer Support</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div className="tab" id="VPS-hosting">
                  <div className="pricing-two__inner-content">
                    <div className="pricing-two__inner-content-top">
                      <div className="pricing-two__inner-content-top-left">
                        <p>SAVE 65%</p>
                        <h3>VPS Web Hosting</h3>
                      </div>
                      <h3 className="pricing-two__price">
                        $30.{" "}
                        <span className="pricing-two__price-point">99</span>{" "}
                        <span className="pricing-two__price-validity">
                          /mo
                        </span>{" "}
                      </h3>
                    </div>
                    <a
                      href="pricing.html"
                      className="thm-btn pricing-two__btn"
                    >
                      <span>
                        Add to Cart
                        <i className="icon-arrow" />
                      </span>
                    </a>
                    <div className="pricing-two__renew-box">
                      <p>$16.99/mo when you renew</p>
                    </div>
                    <div className="pricing-two__points-box">
                      <ul className="list-unstyled pricing-two__points">
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>Unlimited websites</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>One-click WordPress installs</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>Free WordPress/cPanel transfer</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>Unmetered bandwidth</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>
                              Free SSL certificate{" "}
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
                              Free domain included{" "}
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
                              Free dedicated IP{" "}
                              <span className="icon-icon-error" />
                            </p>
                          </div>
                        </li>
                      </ul>
                      <ul className="list-unstyled pricing-two__points pricing-two__points--two">
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>100 Parked domains</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>100 Subdomains per account</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>
                              Full DNS Editor{" "}
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
                            <p>WordPress Multisite</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-icon-check" />
                          </div>
                          <div className="text">
                            <p>24/7 Customer Support</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*tab*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PricingTwo
