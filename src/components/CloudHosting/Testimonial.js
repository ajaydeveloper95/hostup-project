import React from "react";
import TestimonialTwoBg from "../../assets/images/background/testimonial-two-bg.png";
import testimonialImg21 from "../../assets/images/testimonial/testimonial-2-1.png";
import testimonialImg22 from "../../assets/images/testimonial/testimonial-2-2.png";
import testimonialImg23 from "../../assets/images/testimonial/testimonial-2-3.png";
import testimonialImg24 from "../../assets/images/testimonial/testimonial-2-4.png";
import testimonialImg25 from "../../assets/images/testimonial/testimonial-2-5.png";
import testimonialImg26 from "../../assets/images/testimonial/testimonial-2-6.png";
import testimonialImg27 from "../../assets/images/testimonial/testimonial-2-7.png";
import testimonialImg28 from "../../assets/images/testimonial/testimonial-2-8.png";
import testimonialImg29 from "../../assets/images/testimonial/testimonial-2-9.png";

function Testimonial() {
  return (
    <section className="testimonial-two">
      <div
        className="testimonial-two__bg"
        style={{
          backgroundImage: `url(${TestimonialTwoBg})`,
        }}
      />
      <h2 className="testimonial-two__top-title">
        Many reasons why our partners <br /> love to work with us
      </h2>
      <div className="testimonial-two__top">
        <div className="container">
          <div
            className="testimonial-two__carousel-one owl-carousel owl-theme thm-owl__carousel"
            data-owl-options='{
                "loop": true,
                "autoplay": true,
                "margin": 30,
                "nav": false,
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
                    "1320": {
                        "items": 3
                    }
                }
            }'
          >
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">“ Super Fast ”</h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">
                      Johny Albert
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Flutter Developer, Canada
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg21} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">“ Super Fast ”</h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">
                      Johny Nitro
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Flutter Developer, Canada
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg22} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">
                  “Really nice experience ”
                </h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">Cruz Maria</h4>
                    <p className="testimonial-two__client-sub-title">
                      Developer, San Fransico
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg23} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">“ Super Fast ”</h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">
                      Martin Jerald D
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Web Developer, California
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg24} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">“ Super Fast ”</h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">
                      Mark Antony
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Web Developer, California
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg25} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
          </div>
          <div
            className="testimonial-two__carousel-two owl-carousel owl-theme thm-owl__carousel"
            data-owl-options='{
                "loop": true,
                "autoplay": true,
                "margin": 30,
                "nav": false,
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
                    "1320": {
                        "items": 3
                    }
                }
            }'
          >
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">
                  “ Great Support Ever ”
                </h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">
                      Paul Wreight
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Web Developer, California
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg26} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">“ Super Fast ”</h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">
                      Princy Flora
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Flutter Developer, Canada
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg27} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">
                  “Really nice experience ”
                </h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">
                      Angeline D’soza
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Developer, San Fransico
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg28} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">“ Super Fast ”</h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">
                      Jerin Mathew
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Web Developer, California
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg29} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
            {/* Testimonial Two Single Start */}
            <div className="item">
              <div className="testimonial-two__single">
                <div className="testimonial-two__quote">
                  <span className="icon-quote-icon" />
                </div>
                <h4 className="testimonial-two__quote-text">“ Super Fast ”</h4>
                <p className="testimonial-two__text">
                  Many desktop publishing packages and web page editors.
                </p>
                <div className="testimonial-two__client-info">
                  <div className="testimonial-two__client-content">
                    <h4 className="testimonial-two__client-name">
                      Mark Antony
                    </h4>
                    <p className="testimonial-two__client-sub-title">
                      Web Developer, California
                    </p>
                    <div className="testimonial-two__rating-star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="testimonial-two__client-img">
                    <img src={testimonialImg21} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Two Single End */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
