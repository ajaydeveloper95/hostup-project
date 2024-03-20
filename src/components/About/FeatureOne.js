import React from 'react';
import { Link } from 'react-router-dom';
import Icons1 from "../../assets/images/icons/feature-one-icon-1-1.png"
import Icons2 from "../../assets/images/icons/feature-one-icon-1-2.png"
import Icons3 from "../../assets/images/icons/feature-one-icon-1-3.png"
import Icons4 from "../../assets/images/icons/feature-one-icon-1-4.png"

function FeatureOne() {
  return (
    <section className="feature-one">
    <div className="container">
      <ul className="list-unstyled feature-one__list">
        <li>
          <div className="feature-one__single">
            <div className="feature-one__icon">
              <img
                src={Icons1}
                alt="img"
              />
            </div>
            <h3 className="feature-one__title">
              <Link to="about">Performance Security</Link>
            </h3>
            <p className="feature-one__text">
              There are many variations offset wille passages of Lorem
              Ipsum alt.
            </p>
          </div>
        </li>
        <li>
          <div className="feature-one__single">
            <div className="feature-one__icon">
              <img
                src={Icons2}
                alt="img"
              />
            </div>
            <h3 className="feature-one__title">
              <Link to="about">Optimized Hosting</Link>
            </h3>
            <p className="feature-one__text">
              There are many variations offset wille passages of Lorem
              Ipsum alt
            </p>
          </div>
        </li>
        <li>
          <div className="feature-one__single">
            <div className="feature-one__icon">
              <img
                src={Icons3}
                alt="img"
              />
            </div>
            <h3 className="feature-one__title">
              <Link to="about">11 Data Centers</Link>
            </h3>
            <p className="feature-one__text">
              There are many variations offset wille passages of Lorem
              Ipsum alt
            </p>
          </div>
        </li>
        <li>
          <div className="feature-one__single">
            <div className="feature-one__icon">
              <img
                src={Icons4}
                alt="img"
              />
            </div>
            <h3 className="feature-one__title">
              <Link to="about">Technical Support</Link>
            </h3>
            <p className="feature-one__text">
              There are many variations offset wille passages of Lorem
              Ipsum alt.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default FeatureOne
