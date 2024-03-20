import React from 'react'

function PayLess() {
  return (
    <section className="pay-less">
    <div className="container">
      <div className="pay-less__inner">
        <div className="pay-less__section-title text-center">
          <h2 className="pay-less__section-title__title">
            Pay less for your hosting, <br /> get the most
          </h2>
          <p className="pay-less__section-title__text">
            The distracted by the readable content of a page when looking
            at its layout
          </p>
        </div>
        <div className="row">
          <div className="col-xl-7">
            <div className="pay-less__left">
              <ul className="list-unstyled pay-less__list">
                <li>
                  <div className="icon">
                    <span className="icon-icon-check-2" />
                  </div>
                  <div className="text">
                    <p>
                      Full root access and Operating System (OS) selection
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check-2" />
                  </div>
                  <div className="text">
                    <p>Your choice of server management</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check-2" />
                  </div>
                  <div className="text">
                    <p>Top security standards</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check-2" />
                  </div>
                  <div className="text">
                    <p>Total flexibility</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="pay-less__right">
              <ul className="list-unstyled pay-less__list">
                <li>
                  <div className="icon">
                    <span className="icon-icon-check-2" />
                  </div>
                  <div className="text">
                    <p>30-day money-back guarantee</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check-2" />
                  </div>
                  <div className="text">
                    <p>Free to transfer existing websites and VPS</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check-2" />
                  </div>
                  <div className="text">
                    <p>Complete control</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check-2" />
                  </div>
                  <div className="text">
                    <p>Multiple admin and user level access</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pay-less__btn-box">
          <a href="pricing.html" className="thm-btn pay-less__btn">
            <span>
              Read more
              <i className="icon-arrow" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PayLess
