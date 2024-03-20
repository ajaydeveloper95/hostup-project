import React from 'react'

function HowItWork() {
  return (
    <section className="how-it-work-two">
    <div className="container">
      <div className="how-it-work-two__inner">
        <div className="how-it-work-two__shape-1">
          <img
            src="assets/images/shapes/how-it-work-two-shape-1.png"
            alt="img"
          />
        </div>
        <div className="how-it-work-two__section-title text-center">
          <h3 className="how-it-work-two__section-title__title">
            SSL Certification in four <br /> easy steps
          </h3>
          <p className="how-it-work-two__section-title__text">
            The distracted by the readable content of a page when looking at
            its layout
          </p>
        </div>
        <ul className="list-unstyled how-it-work-two__list">
          {/* How It Work Single Start */}
          <li className="col-xl-3">
            <div className="how-it-work-two__single">
              <div className="how-it-work-two__count" />
              <h4 className="how-it-work-two__title">Buy it</h4>
              <p className="how-it-work-two__text">
                There are many variations offset wille passages of Lorem Ipsum
                alteration to an end.
              </p>
            </div>
          </li>
          {/* How It Work Single End */}
          {/* How It Work Single Start */}
          <li className="col-xl-3">
            <div className="how-it-work-two__single">
              <div className="how-it-work-two__count" />
              <h4 className="how-it-work-two__title">Activate it</h4>
              <p className="how-it-work-two__text">
                There are many variations offset wille passages of Lorem Ipsum
                alteration to an end.
              </p>
            </div>
          </li>
          {/* How It Work Single End */}
          {/* How It Work Single Start */}
          <li className="col-xl-3">
            <div className="how-it-work-two__single">
              <div className="how-it-work-two__count" />
              <h4 className="how-it-work-two__title">Install it</h4>
              <p className="how-it-work-two__text">
                There are many variations offset wille passages of Lorem Ipsum
                alteration to an end.
              </p>
            </div>
          </li>
          {/* How It Work Single End */}
          {/* How It Work Single Start */}
          <li className="col-xl-3">
            <div className="how-it-work-two__single">
              <div className="how-it-work-two__count" />
              <h4 className="how-it-work-two__title">Manage it</h4>
              <p className="how-it-work-two__text">
                There are many variations offset wille passages of Lorem Ipsum
                alteration to an end.
              </p>
            </div>
          </li>
          {/* How It Work Single End */}
        </ul>
      </div>
    </div>
  </section>
  )
}

export default HowItWork
