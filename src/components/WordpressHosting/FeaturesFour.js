import React from 'react';
import featureFourBg from "../../assets/images/background/feature-four-bg.png"
import featureFourIcon1 from "../../assets/images/icons/feature-four-icon-1.png"
import featureFourIcon2 from "../../assets/images/icons/feature-four-icon-2.png"
import featureFourIcon3 from "../../assets/images/icons/feature-four-icon-3.png"
import featureFourIcon4 from "../../assets/images/icons/feature-four-icon-4.png"
import featureFourIcon5 from "../../assets/images/icons/feature-four-icon-5.png"
import featureFourIcon6 from "../../assets/images/icons/feature-four-icon-6.png"

function FeaturesFour() {
  return (
    <section className="feature-four">
    <div
      className="feature-four__bg"
      style={{
        backgroundImage: `url(${featureFourBg})`
      }}
    ></div>
    <div className="container">
      <div className="feature-four__section-title text-center">
        <h2 className="feature-four__section-title__title">
          Best WordPress Hosting features <br /> you need in one place
        </h2>
        <p className="feature-four__section-title__text">
          The distracted by the readable content of a page when looking at its
          layout
        </p>
      </div>
      <div className="row">
        {/*Feature Four Single Start*/}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="feature-four__single">
            <div className="feature-four__icon">
              <img src={featureFourIcon1} alt="img" />
            </div>
            <h3 className="feature-four__title">
              Managed and automated tasks
            </h3>
            <p className="feature-four__text">
              Many desktop publishing packages and webs page editors now use
              Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>
        {/*Feature Four Single End*/}
        {/*Feature Four Single Start*/}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="feature-four__single">
            <div className="feature-four__icon">
              <img src={featureFourIcon2} alt="img" />
            </div>
            <h3 className="feature-four__title">
              Built-in speed and performance
            </h3>
            <p className="feature-four__text">
              Many desktop publishing packages and webs page editors now use
              Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>
        {/*Feature Four Single End*/}
        {/*Feature Four Single Start*/}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="feature-four__single">
            <div className="feature-four__icon">
              <img src={featureFourIcon3} alt="img" />
            </div>
            <h3 className="feature-four__title">24-hour malware scans</h3>
            <p className="feature-four__text">
              Many desktop publishing packages and webs page editors now use
              Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>
        {/*Feature Four Single End*/}
        {/*Feature Four Single Start*/}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="feature-four__single">
            <div className="feature-four__icon">
              <img src={featureFourIcon4} alt="img" />
            </div>
            <h3 className="feature-four__title">
              Daily backups with 1-click restore
            </h3>
            <p className="feature-four__text">
              Many desktop publishing packages and webs page editors now use
              Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>
        {/*Feature Four Single End*/}
        {/*Feature Four Single Start*/}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="feature-four__single">
            <div className="feature-four__icon">
              <img src={featureFourIcon5} alt="img" />
            </div>
            <h3 className="feature-four__title">
              Integrated site optimization tools
            </h3>
            <p className="feature-four__text">
              Many desktop publishing packages and webs page editors now use
              Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>
        {/*Feature Four Single End*/}
        {/*Feature Four Single Start*/}
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="feature-four__single">
            <div className="feature-four__icon">
              <img src={featureFourIcon6} alt="img" />
            </div>
            <h3 className="feature-four__title">
              <span>Free</span>Migrate your existing site
            </h3>
            <p className="feature-four__text">
              Many desktop publishing packages and webs page editors now use
              Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>
        {/*Feature Four Single End*/}
      </div>
    </div>
  </section>
  )
}

export default FeaturesFour
