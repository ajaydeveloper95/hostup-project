import React from 'react';
import sendMail from "../../assets/inc/sendemail.php"

function ContactOne() {
  return (
    <section className="contact-one">
    <div className="container">
      <div className="contact-one__content text-center">
        <h2 className="contact-one__title">
          Fill out the form to send us a message or report abuse
        </h2>
        {/* /.contact-one__title */}
        <p className="contact-one__description">
          The distracted by the readable content of a page when looking at
          its layout
        </p>
      </div>
      {/* /.contact-one__content */}
      <form
        action={sendMail}
        className="contact-one__form contact-form-validated"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="contact-one__form__input">
              <input type="text" name="name" placeholder="Name" />
            </div>
            {/* /.contact-one__form__input */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6">
            <div className="contact-one__form__input">
              <input type="email" name="email" placeholder="Email" />
            </div>
            {/* /.contact-one__form__input */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6">
            <div className="contact-one__form__input">
              <input type="text" name="website" placeholder="Website" />
            </div>
            {/* /.contact-one__form__input */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-6">
            <div className="contact-one__form__input">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            {/* /.contact-one__form__input */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-md-12">
            <div className="contact-one__form__input">
              <textarea
                name="message"
                placeholder="Message (Optional)"
                defaultValue={""}
              />
            </div>
            {/* /.contact-one__form__input */}
          </div>
          {/* /.col-md-12 */}
          <div className="col-md-12">
            <div className="contact-one__form__input text-center">
              <button type="submit" className="thm-btn contact-one__btn">
                <span>
                  Submit
                  <i className="icon-arrow" />
                </span>
              </button>
            </div>
            {/* /.contact-one__form__input */}
          </div>
          {/* /.col-md-12 */}
        </div>
        {/* /.row */}
      </form>
      {/* /.contact-one__form */}
    </div>
    {/* /.container */}
  </section>
  )
}

export default ContactOne
