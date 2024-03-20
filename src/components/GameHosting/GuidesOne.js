import React from 'react'

function GuidesOne() {
  return (
    <section className="guides-one">
          <div className="container">
            <div className="guides-one__section-title text-center">
              <h2 className="guides-one__section-title__title">
                We offer a range of documentation <br /> and online support to
                assist
              </h2>
              <p className="guides-one__section-title__text">
                Many desktop publishing packages and web page editors now use
                Lorem <br /> Ipsum as their default model text.
              </p>
            </div>
            <div className="row">
              {/* Guides One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="guides-one__single">
                  <div className="guides-one__img">
                    <img
                      src="assets/images/resources/guides-one-1-1.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="guides-one__content">
                    <h3 className="guides-one__title">
                      <a href="about.html">Guides and documentation</a>
                    </h3>
                    <p className="guides-one__text">
                      It is a long established fact that a reader will be when
                      looking at its layout.
                    </p>
                    <a href="about.html" className="guides-one__read-more">
                      Read more <span className="icon-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Guides One Single End */}
              {/* Guides One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="guides-one__single">
                  <div className="guides-one__img">
                    <img
                      src="assets/images/resources/guides-one-1-2.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="guides-one__content">
                    <h3 className="guides-one__title">
                      <a href="about.html">Our Community</a>
                    </h3>
                    <p className="guides-one__text">
                      It is a long established fact that a reader will be when
                      looking at its layout.
                    </p>
                    <a href="about.html" className="guides-one__read-more">
                      Read more <span className="icon-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Guides One Single End */}
              {/* Guides One Single Start */}
              <div className="col-xl-4 col-lg-4">
                <div className="guides-one__single">
                  <div className="guides-one__img">
                    <img
                      src="assets/images/resources/guides-one-1-3.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="guides-one__content">
                    <h3 className="guides-one__title">
                      <a href="about.html">Professional Services</a>
                    </h3>
                    <p className="guides-one__text">
                      It is a long established fact that a reader will be when
                      looking at its layout.
                    </p>
                    <a href="about.html" className="guides-one__read-more">
                      Read more <span className="icon-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Guides One Single End */}
            </div>
          </div>
        </section>
  )
}

export default GuidesOne
