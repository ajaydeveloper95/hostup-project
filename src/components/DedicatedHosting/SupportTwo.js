import React from 'react';
import supportImg from "../../assets/images/resources/support-two-img-1.png"

function SupportTwo() {
  return (
    <section className="support-two">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="support-two__left">
            <h3 className="support-two__title">
              Got questions? We can help.
            </h3>
            <p className="support-two__text">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
            <ul className="list-unstyled support-two__details">
              <li>
                <div className="support-two__single">
                  <div className="support-two__icon">
                    <span className="icon-chat-icon-2" />
                  </div>
                  <h4 className="support-two__text-2">Chat with us</h4>
                </div>
              </li>
              <li>
                <div className="support-two__single">
                  <div className="support-two__icon">
                    <span className="icon-mail-icon" />
                  </div>
                  <h4 className="support-two__text-2">Mail with us</h4>
                </div>
              </li>
              <li>
                <div className="support-two__single">
                  <div className="support-two__icon">
                    <span className="icon-phone" />
                  </div>
                  <h4 className="support-two__text-2">Call with us</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="support-two__right">
            <div className="support-two__img">
              <img
                src={supportImg}
                alt="img"
                className="float-bob-x"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SupportTwo
