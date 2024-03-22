import React from 'react';
import featureIcon1 from "../../assets/images/icons/feature-six-icon-1.png"
import featureIcon2 from "../../assets/images/icons/feature-six-icon-2.png"
import featureIcon3 from "../../assets/images/icons/feature-six-icon-3.png"
import featureIcon4 from "../../assets/images/icons/feature-six-icon-4.png"
function FeatureSix() {
  return (
    <section className="feature-six">
    <div className="container">
      <div className="feature-six__section-title text-center">
        <h2 className="feature-six__section-title__title">
          Host on the Cloud to <br /> keep growing
        </h2>
        <p className="feature-six__section-title__text">
          The distracted by the readable content of a page when looking at its
          layout
        </p>
      </div>
      <div className="row">
        {/*Feature Six Single Start*/}
        <div className="col-xl-6 col-lg-6">
          <div className="feature-six__single">
            <div className="feature-six__icon">
              <img src={featureIcon1} alt="img" />
            </div>
            <h3 className="feature-six__title">Guaranteed Resources</h3>
            <p className="feature-six__text">
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using content here, making it
              look like readable English.
            </p>
          </div>
        </div>
        {/*Feature Six Single End*/}
        {/*Feature Six Single Start*/}
        <div className="col-xl-6 col-lg-6">
          <div className="feature-six__single">
            <div className="feature-six__icon">
              <img src={featureIcon2} alt="img" />
            </div>
            <h3 className="feature-six__title">Fully Managed Service</h3>
            <p className="feature-six__text">
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using content here, making it
              look like readable English.
            </p>
          </div>
        </div>
        {/*Feature Six Single End*/}
        {/*Feature Six Single Start*/}
        <div className="col-xl-6 col-lg-6">
          <div className="feature-six__single">
            <div className="feature-six__icon">
              <img src={featureIcon3} alt="img" />
            </div>
            <h3 className="feature-six__title">Easy Account Management</h3>
            <p className="feature-six__text">
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using content here, making it
              look like readable English.
            </p>
          </div>
        </div>
        {/*Feature Six Single End*/}
        {/*Feature Six Single Start*/}
        <div className="col-xl-6 col-lg-6">
          <div className="feature-six__single">
            <div className="feature-six__icon">
              <img src={featureIcon4} alt="img" />
            </div>
            <h3 className="feature-six__title">Automatic scaling</h3>
            <p className="feature-six__text">
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using content here, making it
              look like readable English.
            </p>
          </div>
        </div>
        {/*Feature Six Single End*/}
      </div>
    </div>
  </section>
  
  )
}

export default FeatureSix
