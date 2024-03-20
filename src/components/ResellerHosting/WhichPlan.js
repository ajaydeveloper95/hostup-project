import React from 'react'

function WhichPlan() {
  return (
    <section className="which-plan">
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="which-plan__left">
            <h3 className="which-plan__title">
              Which plan is the best <br /> for you?
            </h3>
            <ul className="which-plan__points list-unstyled">
              <li>
                <div className="icon">
                  <span className="icon-monitor-icon" />
                </div>
                <div className="content">
                  <h3>Build and manage sites for your clients</h3>
                  <p>
                    The point of using Lorem Ipsum is that it has more normal
                    pins distribution of letters, as opposed.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-hosting-app" />
                </div>
                <div className="content">
                  <h3>Manage white-label hosting service</h3>
                  <p>
                    Various versions have evolved over the years, sometimes by
                    accident as their default model text.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-configure-icon" />
                </div>
                <div className="content">
                  <h3>Configure custom packages</h3>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary.
                  </p>
                </div>
              </li>
            </ul>
            <div className="which-plan__btn-box">
              <a href="about.html" className="thm-btn which-plan__btn">
                <span>
                  Get Started
                  <i className="icon-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="which-plan__right">
            <div className="which-plan__img float-bob-x">
              <img
                src="assets/images/resources/which-plan-img-1.png"
                alt="img"
              />
              <div className="which-plan__img-2 float-bob-y">
                <img
                  src="assets/images/resources/which-plan-img-2.png"
                  alt="img"
                />
              </div>
              <div className="which-plan__img-3 float-bob-x">
                <img
                  src="assets/images/resources/which-plan-img-3.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhichPlan
