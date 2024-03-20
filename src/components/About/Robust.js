import React from 'react'
import RobustBackground from "../../assets/images/background/robust-one-bg.png"
import RobustOneImg from "../../assets/images/resources/robust-one-img-1-1.png"

function Robust() {
  return (
    <section className="robust-one">
    <div
      className="robust-one__bg float-bob-y"
      style={{
        backgroundImage:
          `url(${RobustBackground})`,
      }}
    ></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="robust-one__left">
            <h2 className="robust-one__title">
              Robust web hosting tools get the job done right
            </h2>
            <ul className="list-unstyled robust-one__points">
              <li>
                <div className="icon">
                  <span className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>
                    Get unlimited SSL security certificates to encrypt
                    your websites traffic.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>
                    Protect your website from DDoS attacks with Cloudflare
                    protected nameservers.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-icon-check" />
                </div>
                <div className="text">
                  <p>Secure your files with automatic backups.</p>
                </div>
              </li>
            </ul>
            <ul className="list-unstyled robust-one__counter-box">
              <li>
                <div className="robust-one__counter-count-box count-box">
                  <h3
                    className="count-text"
                    data-stop={45}
                    data-speed={1500}
                  >
                    00
                  </h3>
                  <h4 className="robust-one__counter-text">%</h4>
                  <i className="icon-arrow" />
                </div>
                <p className="robust-one__counter-text-2">
                  of customers are web pros
                </p>
              </li>
              <li>
                <div className="robust-one__counter-count-box count-box">
                  <h3
                    className="count-text"
                    data-stop={5}
                    data-speed={1500}
                  >
                    00
                  </h3>
                  <h4 className="robust-one__counter-text">+ Million</h4>
                  <i className="icon-arrow" />
                </div>
                <p className="robust-one__counter-text-2">
                  websites currently hosted
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="robust-one__right">
            <div className="robust-one__img float-bob-y">
              <img
                src={RobustOneImg}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Robust
