import React from 'react';
import featureNineImg1 from "../../assets/images/resources/feature-nine-img-1-1.png"
import featureNineImg2 from "../../assets/images/resources/feature-nine-img-1-2.png"
import featureNineImg3 from "../../assets/images/resources/feature-nine-img-1-3.png"

function FeatureNine() {
  return (
    <section className="feature-nine">
    <div className="container">
      <div className="feature-nine__section-title text-center">
        <h2 className="feature-nine__section-title__title">
          We've got features that <br /> others don't
        </h2>
        <p className="feature-nine__section-title__text">
          The distracted by the readable content of a page when looking at its
          layout
        </p>
      </div>
      <div className="feature-nine__single">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-6">
            <div className="feature-nine__img-box">
              <img
                src={featureNineImg1}
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="feature-nine__content-box">
              <h4 className="feature-nine__title">
                Your Privacy is Taken Care of
              </h4>
              <p className="feature-nine__text">
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable.
              </p>
              <p className="feature-nine__text-2">
                If you are going to use a passage of Lorem Ipsum, you need to
                be sure there isn't anything embarrassing hidden in the middle
                of text.
              </p>
              <a href="about.html" className="feature-nine__read-more">
                Read more <span className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-nine__single feature-nine__single--two">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="feature-nine__content-box">
              <h4 className="feature-nine__title">
                Domain Transfers Made Easy
              </h4>
              <p className="feature-nine__text">
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable.
              </p>
              <p className="feature-nine__text-2">
                If you are going to use a passage of Lorem Ipsum, you need to
                be sure there isn't anything embarrassing hidden in the middle
                of text.
              </p>
              <a href="about.html" className="feature-nine__read-more">
                Read more <span className="icon-arrow" />
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6">
            <div className="feature-nine__img-box">
              <img
                src={featureNineImg2}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="feature-nine__single feature-nine__single--three">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-6">
            <div className="feature-nine__img-box">
              <img
                src={featureNineImg3}
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="feature-nine__content-box">
              <h4 className="feature-nine__title">
                Simple Domain Management
              </h4>
              <p className="feature-nine__text">
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable.
              </p>
              <p className="feature-nine__text-2">
                If you are going to use a passage of Lorem Ipsum, you need to
                be sure there isn't anything embarrassing hidden in the middle
                of text.
              </p>
              <a href="about.html" className="feature-nine__read-more">
                Read more <span className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeatureNine
