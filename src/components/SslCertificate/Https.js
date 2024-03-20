import React from 'react'

function Https() {
  return (
    <section className="https">
    <div className="https__bg-box">
      <div
        className="https__shape-1 float-bob-y"
        style={{
          backgroundImage: "url(assets/images/shapes/https-shape-1.png)",
        }}
      ></div>
    </div>
    <div className="container">
      <h3 className="https__section-title">
        HTTPS vs HTTP: What's <br /> the difference?
      </h3>
      <div className="row">
        {/*Https Single Start*/}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="https__single">
            <div className="https__link">
              <img
                src="assets/images/resources/https-link-img-1.png"
                alt="img"
              />
            </div>
            <div className="https__points-box">
              <h3 className="https__points-title">
                HyperText Transfer Protocol
              </h3>
              <ul className="https__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-icon-check" />
                  </div>
                  <div className="text">
                    <p>HTTP is considered to be unsecure</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check" />
                  </div>
                  <div className="text">
                    <p>In HTTP, Encryption is absent</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check" />
                  </div>
                  <div className="text">
                    <p>HTTP does not require any certificates</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check" />
                  </div>
                  <div className="text">
                    <p>HTTP does not improve search ranking</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Https Single End*/}
        {/*Https Single Start*/}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="https__single">
            <div className="https__link">
              <img
                src="assets/images/resources/https-link-img-2.png"
                alt="img"
              />
            </div>
            <div className="https__points-box">
              <h3 className="https__points-title">
                HyperText Transfer Protocol Secure
              </h3>
              <ul className="https__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-icon-check" />
                  </div>
                  <div className="text">
                    <p>HTTPs is considered as secure</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check" />
                  </div>
                  <div className="text">
                    <p>Encryption is present in HTTPS</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check" />
                  </div>
                  <div className="text">
                    <p>HTTPS needs SSL Certificates</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-icon-check" />
                  </div>
                  <div className="text">
                    <p>HTTPS helps to improve search ranking</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Https Single End*/}
      </div>
    </div>
  </section>
  )
}

export default Https
