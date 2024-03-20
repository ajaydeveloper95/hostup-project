import React from 'react'

function ContactInfo() {
  return (
    <section className="contact-info-one">
          <div className="container">
            <div className="contact-info-one__inner">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="contact-info-one__item">
                    <div className="contact-info-one__icon">
                      <i className="icon-location" />
                    </div>
                    {/* /.contact-info-one__icon */}
                    <div className="contact-info-one__title">Visit us here</div>
                    {/* /.contact-info-one__title */}
                    <p className="contact-info-one__text">
                      Hostup International Ltd.61 <br /> Lord Street, USA-6023
                    </p>
                  </div>
                  {/* /.contact-info-one__item */}
                </div>
                {/* /.col-md-12 col-lg-4 */}
                <div className="col-md-12 col-lg-4">
                  <div className="contact-info-one__item">
                    <div className="contact-info-one__icon">
                      <i className="icon-envelope" />
                    </div>
                    {/* /.contact-info-one__icon */}
                    <div className="contact-info-one__title">Mail with us</div>
                    {/* /.contact-info-one__title */}
                    <p className="contact-info-one__text">
                      <a href="mailto:support@hostup.com">support@hostup.com</a>{" "}
                      <br />
                      <a href="mailto:info@domain.com">info@domain.com</a>
                    </p>
                  </div>
                  {/* /.contact-info-one__item */}
                </div>
                {/* /.col-md-12 col-lg-4 */}
                <div className="col-md-12 col-lg-4">
                  <div className="contact-info-one__item">
                    <div className="contact-info-one__icon">
                      <i className="icon-phone" />
                    </div>
                    {/* /.contact-info-one__icon */}
                    <div className="contact-info-one__title">Call with us</div>
                    {/* /.contact-info-one__title */}
                    <p className="contact-info-one__text">
                      <a href="tel:+18006789021">+1800 678 9021</a> <br />
                      <a href="tel:+18006789023">+1800 678 9023</a>
                    </p>
                  </div>
                  {/* /.contact-info-one__item */}
                </div>
                {/* /.col-md-12 col-lg-4 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.contact-info-one__inner */}
          </div>
          {/* /.container */}
        </section>
  )
}

export default ContactInfo
