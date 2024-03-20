import React from 'react'

function FeatureTwo() {
  return (
    <section className="feature-two">
    <div
      className="feature-two__bg float-bob-y"
      style={{
        backgroundImage: "url(assets/images/background/feature-two-bg.png)"
      }}
    ></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="feature-two__left">
            <h3 className="feature-two__title">
              Powerful web hosting to <br /> get your business online
            </h3>
            <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
              <div className="accrodion">
                <div className="accrodion-title">
                  <h4>cPanel gives you full website control</h4>
                </div>
                <div className="accrodion-content">
                  <div className="inner">
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet.
                    </p>
                  </div>
                  {/* /.inner */}
                </div>
              </div>
              <div className="accrodion  active">
                <div className="accrodion-title">
                  <h4>Personalized Email Service</h4>
                </div>
                <div className="accrodion-content">
                  <div className="inner">
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet.
                    </p>
                  </div>
                  {/* /.inner */}
                </div>
              </div>
              <div className="accrodion last-child">
                <div className="accrodion-title">
                  <h4>Free Positive SSL certificates for one year</h4>
                </div>
                <div className="accrodion-content">
                  <div className="inner">
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet.
                    </p>
                  </div>
                  {/* /.inner */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="feature-two__right">
            <div className="feature-two__img img-bounce">
              <img
                src="assets/images/resources/feature-two-img-1.png"
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

export default FeatureTwo
