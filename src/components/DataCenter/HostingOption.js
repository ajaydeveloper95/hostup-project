import React from 'react'
import HostingOption1 from "../../assets/images/icons/hosting-option-i-1.png"
import HostingOption2 from "../../assets/images/icons/hosting-option-i-2.png"
import HostingOption3 from "../../assets/images/icons/hosting-option-i-3.png"
import HostingOption4 from "../../assets/images/icons/hosting-option-i-4.png"

function HostingOption() {
  return (
    <section className="hosting-option">
    <div className="container">
      <div className="hosting-option__content">
        <h3 className="hosting-option__title">
          Why it’s the right hosting option
        </h3>
        {/* /.hosting-option__title */}
        <p className="hosting-option__text">
          The distracted by the readable content of a page when looking at its
          layout
        </p>
        {/* /.hosting-option__text */}
      </div>
      {/* /.hosting-option__content */}
      <div className="row">
        <div className="col-md-6">
          <div className="hosting-option__item">
            <div className="hosting-option__item__icon">
              <img src={HostingOption1} alt="img" />
            </div>
            {/* /.hosting-option__item__icon */}
            <div className="hosting-option__item__content">
              <h3 className="hosting-option__item__title">
                <a href="#">Completely Customizable</a>
              </h3>
              {/* /.hosting-option__item__title */}
              <p className="hosting-option__item__text">
                Many desktop publishing packages and webs page editors now use
                Lorem Ipsum as their default model text.
              </p>
              {/* /.hosting-option__item__text */}
            </div>
            {/* /.hosting-option__item__content */}
          </div>
          {/* /.hosting-option__item */}
        </div>
        {/* /.col-md-6 */}
        <div className="col-md-6">
          <div className="hosting-option__item">
            <div className="hosting-option__item__icon">
              <img src={HostingOption2} alt="img" />
            </div>
            {/* /.hosting-option__item__icon */}
            <div className="hosting-option__item__content">
              <h3 className="hosting-option__item__title">
                <a href="#">Incredibly Fast</a>
              </h3>
              {/* /.hosting-option__item__title */}
              <p className="hosting-option__item__text">
                Many desktop publishing packages and webs page editors now use
                Lorem Ipsum as their default model text.
              </p>
              {/* /.hosting-option__item__text */}
            </div>
            {/* /.hosting-option__item__content */}
          </div>
          {/* /.hosting-option__item */}
        </div>
        {/* /.col-md-6 */}
        <div className="col-md-6">
          <div className="hosting-option__item">
            <div className="hosting-option__item__icon">
              <img src={HostingOption3} alt="img" />
            </div>
            {/* /.hosting-option__item__icon */}
            <div className="hosting-option__item__content">
              <h3 className="hosting-option__item__title">
                <a href="#">Powerful VPS Security</a>
              </h3>
              {/* /.hosting-option__item__title */}
              <p className="hosting-option__item__text">
                Many desktop publishing packages and webs page editors now use
                Lorem Ipsum as their default model text.
              </p>
              {/* /.hosting-option__item__text */}
            </div>
            {/* /.hosting-option__item__content */}
          </div>
          {/* /.hosting-option__item */}
        </div>
        {/* /.col-md-6 */}
        <div className="col-md-6">
          <div className="hosting-option__item">
            <div className="hosting-option__item__icon">
              <img src={HostingOption4} alt="img" />
            </div>
            {/* /.hosting-option__item__icon */}
            <div className="hosting-option__item__content">
              <h3 className="hosting-option__item__title">
                <a href="#">24/7 Live Support</a>
              </h3>
              {/* /.hosting-option__item__title */}
              <p className="hosting-option__item__text">
                Many desktop publishing packages and webs page editors now use
                Lorem Ipsum as their default model text.
              </p>
              {/* /.hosting-option__item__text */}
            </div>
            {/* /.hosting-option__item__content */}
          </div>
          {/* /.hosting-option__item */}
        </div>
        {/* /.col-md-6 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  )
}

export default HostingOption
