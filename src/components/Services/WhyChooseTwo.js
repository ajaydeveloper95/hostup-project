import React from 'react'

function WhyChooseTwo() {
  return (
    <section className="why-choose-two services-page-why-choose">
    <div
      className="why-choose-two__bg"
      style={{
        backgroundImage: "url(assets/images/background/why-choose-two-bg.png)"
      }}
    />
    <div className="container">
      <h2 className="why-choose-two__top-title">
        Why choose Hostup for your <br /> hosting needs?
      </h2>
      <div className="row">
        {/* Why Chosoe Two single Start */}
        <div
          className="col-xl-4 col-lg-4 wow fadeInUp"
          data-wow-delay="100ms"
        >
          <div className="why-choose-two__single">
            <div className="why-choose-two__icon">
              <img
                src="assets/images/icons/why-choose-two-icon-1-1.png"
                alt="img"
              />
            </div>
            <h4 className="why-choose-two__title">
              <a href="about.html">99% uptime guarantee</a>
            </h4>
            <p className="why-choose-two__text">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search.
            </p>
            <a href="about.html" className="why-choose-two__btn">
              Read more <span className="icon-arrow" />
            </a>
          </div>
        </div>
        {/* Why Chosoe Two single End */}
        {/* Why Chosoe Two single Start */}
        <div
          className="col-xl-4 col-lg-4 wow fadeInUp"
          data-wow-delay="200ms"
        >
          <div className="why-choose-two__single">
            <div className="why-choose-two__icon">
              <img
                src="assets/images/icons/why-choose-two-icon-1-2.png"
                alt="img"
              />
            </div>
            <h4 className="why-choose-two__title">
              <a href="about.html">Maximum Security</a>
            </h4>
            <p className="why-choose-two__text">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search.
            </p>
            <a href="about.html" className="why-choose-two__btn">
              Read more <span className="icon-arrow" />
            </a>
          </div>
        </div>
        {/* Why Chosoe Two single End */}
        {/* Why Chosoe Two single Start */}
        <div
          className="col-xl-4 col-lg-4 wow fadeInUp"
          data-wow-delay="300ms"
        >
          <div className="why-choose-two__single">
            <div className="why-choose-two__icon">
              <img
                src="assets/images/icons/why-choose-two-icon-1-3.png"
                alt="img"
              />
            </div>
            <h4 className="why-choose-two__title">
              <a href="about.html">24x7 Technical Support</a>
            </h4>
            <p className="why-choose-two__text">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search.
            </p>
            <a href="about.html" className="why-choose-two__btn">
              Read more <span className="icon-arrow" />
            </a>
          </div>
        </div>
        {/* Why Chosoe Two single End */}
      </div>
    </div>
  </section>
  )
}

export default WhyChooseTwo
