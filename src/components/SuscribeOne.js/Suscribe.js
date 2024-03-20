import React from "react";

function Suscribe() {
  return (
    <section className="subscribe-one">
      <div className="container">
        <div
          className="subscribe-one__inner wow fadeInUp"
          data-wow-duration="1500ms"
        >
          <div className="subscribe-one__top">
            <div className="row">
              <div className="col-lg-5">
                <div className="subscribe-one__title">
                  Sign up for web hosting today!
                </div>
                {/* /.subscribe-one__title */}
              </div>
              {/* /.col-lg-5 */}
              <div className="col-lg-7">
                <div
                  className="subscribe-one__form mc-form"
                  data-url="MC_FORM_URL"
                >
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email..."
                  />
                  <button type="submit" className="thm-btn subscribe-one__btn">
                    <span>
                      Subscribe
                      <i className="icon-arrow" />
                    </span>
                  </button>
                </div>
                {/* /.subscribe-one__form */}
                <div className="mc-form__response" />
                {/* /.mc-form__response */}
              </div>
              {/* /.col-lg-7 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.subscribe-one__top */}
          <div className="row">
            <div className="col-lg-12">
              <ul className="list-unstyled subscribe-one__list">
                <li>
                  <i className="icon-check-circle" />
                  Free domain for 1 year
                </li>
                <li>
                  <i className="icon-check-circle" />
                  30-day money-back guarantee
                </li>
                <li>
                  <i className="icon-check-circle" />
                  24/7 customer support
                </li>
              </ul>
              {/* /.list-unstyled subscribe-one__list */}
            </div>
            {/* /.col-lg-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.subscribe-one__inner */}
      </div>
      {/* /.container */}
    </section>
  );
}

export default Suscribe;
