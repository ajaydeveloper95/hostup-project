import React from 'react'

function FeatureThree() {
  return (
    <section className="feature-three">
          <div
            className="feature-three__bg"
            style={{
              backgroundImage:
                "url(assets/images/background/feature-three-bg.jpg)",
            }}
          />
          <div className="container">
            <div className="feature-three__section-title text-center">
              <h2 className="feature-three__section-title__title">
                Why it’s the right hosting option
              </h2>
              <p className="feature-three__section-title__text">
                The distracted by the readable content of a page when looking at
                its layout
              </p>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="feature-three__single">
                  <div className="feature-three__icon">
                    <img
                      src="assets/images/icons/feature-three-1-1.png"
                      alt="img"
                    />
                  </div>
                  <div className="feature-three__content">
                    <h3 className="feature-three__title">Add Option</h3>
                    <p className="feature-three__text">
                      Many desktop publishing packages and webs page editors now
                      use Lorem Ipsum as their default model text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="feature-three__single">
                  <div className="feature-three__icon">
                    <img
                      src="assets/images/icons/feature-three-1-2.png"
                      alt="img"
                    />
                  </div>
                  <div className="feature-three__content">
                    <h3 className="feature-three__title">
                      Solid State Drives (SSD)
                    </h3>
                    <p className="feature-three__text">
                      Many desktop publishing packages and webs page editors now
                      use Lorem Ipsum as their default model text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="feature-three__single">
                  <div className="feature-three__icon">
                    <img
                      src="assets/images/icons/feature-three-1-3.png"
                      alt="img"
                    />
                  </div>
                  <div className="feature-three__content">
                    <h3 className="feature-three__title">
                      Unmetered bandwidth
                    </h3>
                    <p className="feature-three__text">
                      Many desktop publishing packages and webs page editors now
                      use Lorem Ipsum as their default model text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="feature-three__single">
                  <div className="feature-three__icon">
                    <img
                      src="assets/images/icons/feature-three-1-4.png"
                      alt="img"
                    />
                  </div>
                  <div className="feature-three__content">
                    <h3 className="feature-three__title">
                      Control Panel Included
                    </h3>
                    <p className="feature-three__text">
                      Many desktop publishing packages and webs page editors now
                      use Lorem Ipsum as their default model text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default FeatureThree
