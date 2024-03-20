import React from 'react'

function SupportMe() {
  return (
    <section className="support-one">
    <div
      className="support-one__shape-1 float-bob-y"
      style={{
        backgroundImage: "url(assets/images/shapes/support-one-shape-1.png)"
      }}
    />
    <div className="support-one__img float-bob-x">
      <img src="assets/images/resources/support-one-img-1.png" alt="img" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-8">
          <div className="support-one__left">
            <h3 className="support-one__title">
              Reach out to us on Chat or <br /> Phone 24 hours a day 7 <br />
              days a week
            </h3>
            <p className="support-one__text">
              The printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled.
            </p>
            <ul className="list-unstyled support-one__details">
              <li>
                <div className="support-one__single">
                  <div className="support-one__icon">
                    <span className="icon-chat-icon-2" />
                  </div>
                  <h4 className="support-one__text-2">Chat with us</h4>
                </div>
              </li>
              <li>
                <div className="support-one__single">
                  <div className="support-one__icon">
                    <span className="icon-mail-icon" />
                  </div>
                  <h4 className="support-one__text-2">Mail with us</h4>
                </div>
              </li>
              <li>
                <div className="support-one__single">
                  <div className="support-one__icon">
                    <span className="icon-phone" />
                  </div>
                  <h4 className="support-one__text-2">Call with us</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SupportMe
