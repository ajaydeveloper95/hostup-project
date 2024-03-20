import React from 'react'

function TestimonialFour() {
  return (
    <section className="testimonial-four">
    <div
      className="testimonial-four__bg"
      style={{
        backgroundImage:
          "url(assets/images/background/testimonial-four-bg.jpg)",
      }}
    />
    <div className="container">
      <div className="testimonial-four__inner">
        <h3 className="testimonial-four__title">
          We love our customers our <br /> customers love us
        </h3>
        <div
          className="testimonial-four__carousel owl-carousel owl-theme thm-owl__carousel"
          data-owl-options='{
                  "loop": true,
                  "autoplay": true,
                  "margin": 30,
                  "nav": true,
                  "dots": false,
                  "smartSpeed": 500,
                  "autoplayTimeout": 10000,
                  "navText": ["<span class=\"icon-arrow\"></span>","<span class=\"icon-arrow\"></span>"],
                  "responsive": {
                      "0": {
                          "items": 1
                      },
                      "768": {
                          "items": 2
                      },
                      "992": {
                          "items": 3
                      },
                      "1350": {
                          "items": 3
                      }
                  }
              }'
        >
          {/* Testimonial One Single Start */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__content-box">
                <p className="testimonial-one__text">
                  “Long established fact that a reader will be distracted
                  by the <span>readable content</span> of a page when
                  looking at its layout. The point of using Lorem Ipsum.”
                </p>
                <div className="testimonial-one__rating-and-quote-box">
                  <div className="testimonial-one__rating">
                    <div className="testimonial-one__rating-logo">
                      <img
                        src="assets/images/resources/testimonial-logo.png"
                        alt="img"
                      />
                    </div>
                    <div className="testimonial-one__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <img
                      src="assets/images/icons/quote-icon.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="assets/images/testimonial/testimonial-1-1.png"
                    alt="img"
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3 className="testimonial-one__name">
                    Martin Jerald D
                  </h3>
                  <p className="testimonial-one__sub-title">
                    Web Developer, California
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial One Single End */}
          {/* Testimonial One Single Start */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__content-box">
                <p className="testimonial-one__text">
                  ““All the Lorem Ipsum generators on the
                  <span>Internet tend</span> to repeat predefined chunks
                  as necessary, making this the first true generator on
                  the Internet. It uses a dictionary of over 200 Latin
                  words, There are many variations of passages of Lorem
                  Ipsum available.”
                </p>
                <div className="testimonial-one__rating-and-quote-box">
                  <div className="testimonial-one__rating">
                    <div className="testimonial-one__rating-logo">
                      <img
                        src="assets/images/resources/testimonial-logo.png"
                        alt="img"
                      />
                    </div>
                    <div className="testimonial-one__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <img
                      src="assets/images/icons/quote-icon.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="assets/images/testimonial/testimonial-1-2.png"
                    alt="img"
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3 className="testimonial-one__name">John Bradshaw</h3>
                  <p className="testimonial-one__sub-title">
                    Entrepreneur, Sydney
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial One Single End */}
          {/* Testimonial One Single Start */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__content-box">
                <p className="testimonial-one__text">
                  “Making this the <span>first true generator</span>
                  on the Internet. It uses a dictionary of over 200 Latin
                  words there are many variations.”
                </p>
                <div className="testimonial-one__rating-and-quote-box">
                  <div className="testimonial-one__rating">
                    <div className="testimonial-one__rating-logo">
                      <img
                        src="assets/images/resources/testimonial-logo.png"
                        alt="img"
                      />
                    </div>
                    <div className="testimonial-one__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <img
                      src="assets/images/icons/quote-icon.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="assets/images/testimonial/testimonial-1-3.png"
                    alt="img"
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3 className="testimonial-one__name">John Asle</h3>
                  <p className="testimonial-one__sub-title">
                    Entrepreneur
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial One Single End */}
          {/* Testimonial One Single Start */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__content-box">
                <p className="testimonial-one__text">
                  “Long established fact that a reader will be distracted
                  by the <span>readable content</span> of a page when
                  looking at its layout. The point of using Lorem Ipsum.”
                </p>
                <div className="testimonial-one__rating-and-quote-box">
                  <div className="testimonial-one__rating">
                    <div className="testimonial-one__rating-logo">
                      <img
                        src="assets/images/resources/testimonial-logo.png"
                        alt="img"
                      />
                    </div>
                    <div className="testimonial-one__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <img
                      src="assets/images/icons/quote-icon.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="assets/images/testimonial/testimonial-1-4.png"
                    alt="img"
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3 className="testimonial-one__name">
                    Martin Jerald D
                  </h3>
                  <p className="testimonial-one__sub-title">
                    Web Developer, California
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial One Single End */}
          {/* Testimonial One Single Start */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__content-box">
                <p className="testimonial-one__text">
                  “Long established fact that a reader will be distracted
                  by the <span>readable content</span> of a page when
                  looking at its layout. The point of using Lorem Ipsum.”
                </p>
                <div className="testimonial-one__rating-and-quote-box">
                  <div className="testimonial-one__rating">
                    <div className="testimonial-one__rating-logo">
                      <img
                        src="assets/images/resources/testimonial-logo.png"
                        alt="img"
                      />
                    </div>
                    <div className="testimonial-one__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <img
                      src="assets/images/icons/quote-icon.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="assets/images/testimonial/testimonial-1-1.png"
                    alt="img"
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3 className="testimonial-one__name">
                    Martin Jerald D
                  </h3>
                  <p className="testimonial-one__sub-title">
                    Web Developer, California
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial One Single End */}
          {/* Testimonial One Single Start */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__content-box">
                <p className="testimonial-one__text">
                  ““All the Lorem Ipsum generators on the
                  <span>Internet tend</span> to repeat predefined chunks
                  as necessary, making this the first true generator on
                  the Internet. It uses a dictionary of over 200 Latin
                  words, There are many variations of passages of Lorem
                  Ipsum available.”
                </p>
                <div className="testimonial-one__rating-and-quote-box">
                  <div className="testimonial-one__rating">
                    <div className="testimonial-one__rating-logo">
                      <img
                        src="assets/images/resources/testimonial-logo.png"
                        alt="img"
                      />
                    </div>
                    <div className="testimonial-one__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <img
                      src="assets/images/icons/quote-icon.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="assets/images/testimonial/testimonial-1-2.png"
                    alt="img"
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3 className="testimonial-one__name">John Bradshaw</h3>
                  <p className="testimonial-one__sub-title">
                    Entrepreneur, Sydney
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial One Single End */}
          {/* Testimonial One Single Start */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__content-box">
                <p className="testimonial-one__text">
                  “Making this the <span>first true generator</span>
                  on the Internet. It uses a dictionary of over 200 Latin
                  words there are many variations.”
                </p>
                <div className="testimonial-one__rating-and-quote-box">
                  <div className="testimonial-one__rating">
                    <div className="testimonial-one__rating-logo">
                      <img
                        src="assets/images/resources/testimonial-logo.png"
                        alt="img"
                      />
                    </div>
                    <div className="testimonial-one__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <img
                      src="assets/images/icons/quote-icon.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="assets/images/testimonial/testimonial-1-3.png"
                    alt="img"
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3 className="testimonial-one__name">John Asle</h3>
                  <p className="testimonial-one__sub-title">
                    Entrepreneur
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial One Single End */}
          {/* Testimonial One Single Start */}
          <div className="item">
            <div className="testimonial-one__single">
              <div className="testimonial-one__content-box">
                <p className="testimonial-one__text">
                  “Long established fact that a reader will be distracted
                  by the <span>readable content</span> of a page when
                  looking at its layout. The point of using Lorem Ipsum.”
                </p>
                <div className="testimonial-one__rating-and-quote-box">
                  <div className="testimonial-one__rating">
                    <div className="testimonial-one__rating-logo">
                      <img
                        src="assets/images/resources/testimonial-logo.png"
                        alt="img"
                      />
                    </div>
                    <div className="testimonial-one__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <img
                      src="assets/images/icons/quote-icon.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="assets/images/testimonial/testimonial-1-4.png"
                    alt="img"
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3 className="testimonial-one__name">
                    Martin Jerald D
                  </h3>
                  <p className="testimonial-one__sub-title">
                    Web Developer, California
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial One Single End */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default TestimonialFour
