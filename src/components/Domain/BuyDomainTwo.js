import React from 'react';
import buyDomainImg from "../../assets/images/background/buy-domain-two-bg.jpg"

function BuyDomainTwo() {
  return (
    <section className="buy-domain-two">
    <div
      className="buy-domain-two__bg"
      style={{
        backgroundImage: `url(${buyDomainImg})`
      }}
    />
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="buy-domain-two__left">
            <h3 className="buy-domain-two__title">
              Why buy a domain <br /> with Hostup
            </h3>
            <p className="buy-domain-two__text">
              There are many variations of passages of Lorem Ipsum some form,
              by injected humour.
            </p>
            <a href="about.html" className="thm-btn buy-domain-two__btn">
              <span>
                Get Started
                <i className="icon-arrow" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="buy-domain-two__right">
            <ul className="list-unstyled buy-domain-two__points">
              <li>
                <div className="icon">
                  <i className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>Domains include free privacy protection forever.**</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>
                    24/7 phone and chat support. Talk to a real person in your
                    preferred language.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>
                    Simple domain set up. You don’t need any technical skills.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>
                    Easily find available domains from over 500 domain
                    extensions.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>Up to 100 subdomains to create a custom web address.</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>
                    Real-time monitoring to make sure you're always up and
                    running.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BuyDomainTwo
