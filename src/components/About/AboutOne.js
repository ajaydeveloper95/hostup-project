import React from "react";
import { Link } from "react-router-dom";

function AboutOne() {
  return (
    <section className="about-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="about-one__left">
              <h2 className="about-one__title">
                Hostup is the worlds largest services platform for entrepreneurs
                around the globe
              </h2>
              <Link to="about" className="thm-btn about-one__btn">
                <span>
                  Get Started
                  <i className="icon-arrow" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="about-one__right">
              <p className="about-one__text-1">
                We are one of the few privately-owned, independent global web
                hosting companies nowadays. Established in 2010, from a humble
                beginning, we became the first choice for Managed cPanel Web
                Hosting services. There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which don't
                look even slightly believable.
              </p>
              <p className="about-one__text-2">
                For more than 900,000 personal and small-business website
                owners, with 1000+ employees and operating in 15 data centers
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOne;
