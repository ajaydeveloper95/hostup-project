import React from 'react'

function WhyUsThree() {
  return (
    <section className="why-us-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="why-us-three__left">
            <div className="why-us-three__section-title text-left">
              <h3 className="why-us-three__section-title__title">
                Why get a free SSL <br /> Certificate?
              </h3>
              <p className="why-us-three__section-title__text">
                An SSL certificate acts as third-party verification for a
                website’s security. It verifies the strength of the Secure
                Socket Layer encryption used when a user connects to the
                site and connects that encryption to individual that owns
                and maintains the website.
              </p>
            </div>
            <ul className="why-us-three__points list-unstyled">
              <li>
                <div className="icon">
                  <span className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>Rock-Solid Security</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>Avoid 'Not Secure' Warning</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>Boost Google Ranking</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>Build your Brand Smart</p>
                </div>
              </li>
            </ul>
            <div className="why-us-three__btn-box">
              <a href="about.html" className="thm-btn why-us-three__btn">
                <span>
                  Get Started
                  <i className="icon-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="why-us-three__right">
            <div className="why-us-three__img float-bob-y">
              <img
                src="assets/images/resources/why-us-three-img-1.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyUsThree
