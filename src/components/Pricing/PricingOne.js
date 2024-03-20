import React from 'react'

function PricingOne() {
  return (
    <section className="pricing-one">
      <div className="pricing-one__shape-1 zoom-fade">
        <img src="assets/images/shapes/pricing-one-shape-1.png" alt="img" />
      </div>
      <div className="pricing-one__shape-2 float-bob-x">
        <img src="assets/images/shapes/pricing-one-shape-2.png" alt="img" />
      </div>
      <div className="pricing-one__shape-3 float-bob-y">
        <img src="assets/images/shapes/pricing-one-shape-3.png" alt="img" />
      </div>
      <div className="pricing-one__shape-4">
        <img src="assets/images/shapes/pricing-one-shape-4.png" alt="img" />
      </div>
      <div className="pricing-one__shape-5">
        <img src="assets/images/shapes/pricing-one-shape-5.png" alt="img" />
      </div>
      <div className="pricing-one__shape-6">
        <img src="assets/images/shapes/pricing-one-shape-6.png" alt="img" />
      </div>
      <div className="pricing-one__shape-7">
        <img src="assets/images/shapes/pricing-one-shape-7.png" alt="img" />
      </div>
      <div className="pricing-one__shape-8">
        <img src="assets/images/shapes/pricing-one-shape-8.png" alt="img" />
      </div>
      <div className="pricing-one__shape-22">
        <img src="assets/images/shapes/pricing-one-shape-22.png" alt="img" />
      </div>
      <div className="pricing-one__shape-9">
        <img src="assets/images/shapes/pricing-one-shape-9.png" alt="img" />
      </div>
      <div className="pricing-one__shape-10 zoominout">
        <img src="assets/images/shapes/pricing-one-shape-10.png" alt="img" />
      </div>
      <div className="pricing-one__shape-11">
        <img src="assets/images/shapes/pricing-one-shape-11.png" alt="img" />
      </div>
      <div className="pricing-one__shape-12 zoominout">
        <img src="assets/images/shapes/pricing-one-shape-12.png" alt="img" />
      </div>
      <div className="pricing-one__shape-13">
        <img src="assets/images/shapes/pricing-one-shape-13.png" alt="img" />
      </div>
      <div className="pricing-one__shape-14">
        <img src="assets/images/shapes/pricing-one-shape-14.png" alt="img" />
      </div>
      <div className="pricing-one__shape-15 float-bob-x">
        <img src="assets/images/shapes/pricing-one-shape-15.png" alt="img" />
      </div>
      <div className="pricing-one__shape-16">
        <img src="assets/images/shapes/pricing-one-shape-16.png" alt="img" />
      </div>
      <div className="pricing-one__shape-17">
        <img src="assets/images/shapes/pricing-one-shape-17.png" alt="img" />
      </div>
      <div className="pricing-one__shape-18">
        <img src="assets/images/shapes/pricing-one-shape-18.png" alt="img" />
      </div>
      <div className="pricing-one__shape-19">
        <img src="assets/images/shapes/pricing-one-shape-19.png" alt="img" />
      </div>
      <div className="pricing-one__shape-20">
        <img src="assets/images/shapes/pricing-one-shape-20.png" alt="img" />
      </div>
      <div className="pricing-one__shape-21">
        <img src="assets/images/shapes/pricing-one-shape-21.png" alt="img" />
      </div>
      <div className="container">
        <div className="pricing-one__section-title text-center">
          <h2 className="pricing-one__section-title__title">
            Your hosting features that <br /> fits your ambition
          </h2>
          <p className="pricing-one__section-title__text">
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
                <div className="pricing-one__single">
                  <div className="pricing-one__price-box">
                    <h3 className="pricing-one__price">
                      $10. <span className="pricing-one__price-point">99</span>{" "}
                      <span className="pricing-one__price-validity">/mo</span>{" "}
                    </h3>
                    <p className="pricing-one__price-renew">
                      $16.99/mo when you renew
                    </p>
                    <h4 className="pricing-one__title">
                      <a href="#">VPS Hosting</a>
                    </h4>
                  </div>
                  <div className="pricing-one__img">
                    <img
                      src="assets/images/resources/pricing-one-1-1.png"
                      alt="img"
                    />
                  </div>
                  <div className="pricing-one__btn-box">
                    <a href="pricing.html" className="thm-btn pricing-one__btn">
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <ul className="list-unstyled pricing-one__points">
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
                        <p>Free WordPress/cPanel website transfer</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          Unmetered bandwidth{" "}
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
                          Free SSL certificate{" "}
                          <span className="icon-icon-error" />
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Pricing One Single End*/}
              {/*Pricing One Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-one__single">
                  <div className="pricing-one__price-box">
                    <h3 className="pricing-one__price">
                      $23. <span className="pricing-one__price-point">99</span>{" "}
                      <span className="pricing-one__price-validity">/mo</span>{" "}
                    </h3>
                    <p className="pricing-one__price-renew">
                      $29.99/mo when you renew
                    </p>
                    <h4 className="pricing-one__title">
                      <a href="#">Web Hosting</a>
                    </h4>
                  </div>
                  <div className="pricing-one__img">
                    <img
                      src="assets/images/resources/pricing-one-1-2.png"
                      alt="img"
                    />
                  </div>
                  <div className="pricing-one__btn-box">
                    <a href="pricing.html" className="thm-btn pricing-one__btn">
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <ul className="list-unstyled pricing-one__points">
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
                        <p>Free WordPress/cPanel website transfer</p>
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
                          Free dedicated IP <span className="icon-icon-error" />
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Pricing One Single End*/}
              {/*Pricing One Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-one__single">
                  <div className="pricing-one__price-box">
                    <h3 className="pricing-one__price">
                      $17. <span className="pricing-one__price-point">99</span>{" "}
                      <span className="pricing-one__price-validity">/mo</span>{" "}
                    </h3>
                    <p className="pricing-one__price-renew">
                      $23.99/mo when you renew
                    </p>
                    <h4 className="pricing-one__title">
                      <a href="#">Cloud Hosting</a>
                    </h4>
                  </div>
                  <div className="pricing-one__img">
                    <img
                      src="assets/images/resources/pricing-one-1-3.png"
                      alt="img"
                    />
                  </div>
                  <div className="pricing-one__btn-box">
                    <a href="pricing.html" className="thm-btn pricing-one__btn">
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <ul className="list-unstyled pricing-one__points">
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
                        <p>Free WordPress/cPanel website transfer</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          Unmetered bandwidth{" "}
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
                        <p>Free domain included</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Pricing One Single End*/}
            </div>
          </div>
          <div id="year">
            <div className="row">
              {/*Pricing One Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-one__single">
                  <div className="pricing-one__price-box">
                    <h3 className="pricing-one__price">
                      $10. <span className="pricing-one__price-point">99</span>{" "}
                      <span className="pricing-one__price-validity">/mo</span>{" "}
                    </h3>
                    <p className="pricing-one__price-renew">
                      $16.99/mo when you renew
                    </p>
                    <h4 className="pricing-one__title">
                      <a href="#">VPS Hosting</a>
                    </h4>
                  </div>
                  <div className="pricing-one__img">
                    <img
                      src="assets/images/resources/pricing-one-1-1.png"
                      alt="img"
                    />
                  </div>
                  <div className="pricing-one__btn-box">
                    <a href="pricing.html" className="thm-btn pricing-one__btn">
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <ul className="list-unstyled pricing-one__points">
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
                        <p>Free WordPress/cPanel website transfer</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          Unmetered bandwidth{" "}
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
                          Free SSL certificate{" "}
                          <span className="icon-icon-error" />
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Pricing One Single End*/}
              {/*Pricing One Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-one__single">
                  <div className="pricing-one__price-box">
                    <h3 className="pricing-one__price">
                      $23. <span className="pricing-one__price-point">99</span>{" "}
                      <span className="pricing-one__price-validity">/mo</span>{" "}
                    </h3>
                    <p className="pricing-one__price-renew">
                      $29.99/mo when you renew
                    </p>
                    <h4 className="pricing-one__title">
                      <a href="#">Web Hosting</a>
                    </h4>
                  </div>
                  <div className="pricing-one__img">
                    <img
                      src="assets/images/resources/pricing-one-1-2.png"
                      alt="img"
                    />
                  </div>
                  <div className="pricing-one__btn-box">
                    <a href="pricing.html" className="thm-btn pricing-one__btn">
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <ul className="list-unstyled pricing-one__points">
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
                        <p>Free WordPress/cPanel website transfer</p>
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
                          Free dedicated IP <span className="icon-icon-error" />
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Pricing One Single End*/}
              {/*Pricing One Single Start*/}
              <div className="col-xl-4 col-lg-4 animated fadeInLeft">
                <div className="pricing-one__single">
                  <div className="pricing-one__price-box">
                    <h3 className="pricing-one__price">
                      $17. <span className="pricing-one__price-point">99</span>{" "}
                      <span className="pricing-one__price-validity">/mo</span>{" "}
                    </h3>
                    <p className="pricing-one__price-renew">
                      $23.99/mo when you renew
                    </p>
                    <h4 className="pricing-one__title">
                      <a href="#">Cloud Hosting</a>
                    </h4>
                  </div>
                  <div className="pricing-one__img">
                    <img
                      src="assets/images/resources/pricing-one-1-3.png"
                      alt="img"
                    />
                  </div>
                  <div className="pricing-one__btn-box">
                    <a href="pricing.html" className="thm-btn pricing-one__btn">
                      <span>
                        Choose Plan
                        <i className="icon-arrow" />
                      </span>
                    </a>
                  </div>
                  <ul className="list-unstyled pricing-one__points">
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
                        <p>Free WordPress/cPanel website transfer</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          Unmetered bandwidth{" "}
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
                        <p>Free domain included</p>
                      </div>
                    </li>
                  </ul>
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

export default PricingOne
