import React from 'react'

function WhyUsTwo() {
  return (
    <section className="why-us-two">
      <div className="container">
        <h3 className="why-us-two__title">Why Choose Reseller Hosting?</h3>
        <div className="why-us-two__points-box">
          <ul className="why-us-two__points list-unstyled">
            <li>
              <div className="icon">
                <span className="icon-icon-check-2" />
              </div>
              <div className="text">
                <p>Host Unlimited Website</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-icon-check-2" />
              </div>
              <div className="text">
                <p>Web Host Manager</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-icon-check-2" />
              </div>
              <div className="text">
                <p>Malware Scan &amp; Protection</p>
              </div>
            </li>
          </ul>
          <ul className="why-us-two__points why-us-two__points--two list-unstyled">
            <li>
              <div className="icon">
                <span className="icon-icon-check-2" />
              </div>
              <div className="text">
                <p>100% SSD Storage</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-icon-check-2" />
              </div>
              <div className="text">
                <p>One-Click Installer</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-icon-check-2" />
              </div>
              <div className="text">
                <p>Datacenter Choice</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="why-us-two__btn-box">
          <a href="about.html" className="thm-btn why-us-two__btn">
            <span>
              Read more
              <i className="icon-arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyUsTwo
