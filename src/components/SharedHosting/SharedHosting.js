import React from 'react'

function SharedHosting() {
  return (
    <section className="shared-hosting">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="shared-hosting__left">
            <div className="shared-hosting__img float-bob-y">
              <img
                src="assets/images/resources/shared-hosting-img-1.png"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="shared-hosting__right">
            <h3 className="shared-hosting__title">
              What is Shared Web <br /> Hosting?
            </h3>
            <p className="shared-hosting__text-1">
              Shared Hosting is perfect for getting started online. Built on
              top of a reliable platform and backed by 24/7 expert support,
              Bluehost's Shared Hosting is perfect to build a website, get
              online and scale your business. Check out our video.
            </p>
            <p className="shared-hosting__text-2">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <div className="shared-hosting__btn-box">
              <a href="about.html" className="thm-btn shared-hosting__btn">
                <span>
                  Get Started
                  <i className="icon-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SharedHosting
