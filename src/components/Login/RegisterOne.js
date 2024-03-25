import React from 'react';
import LoginGoogleImg from "../../assets/images/resources/login-google.png";
import LoginLinkedIMg from "../../assets/images/resources/login-linkedin.png";
import LoginFaceBookimg from "../../assets/images/resources/login-facebook.png";

function RegisterOne() {
  return (
    <section className="register-one">
    <div className="container">
      <div
        className="register-one__inner wow fadeInUp"
        data-wow-duration="1500ms"
      >
        <h3 className="register-one__title">Sign in to Hostup</h3>
        {/* /.register-one__title */}
        <p className="register-one__text">
          The distracted by the readable content of a page when looking at
          its layout
        </p>
        {/* /.register-one__text */}
        <form action="#" className="register-one__form">
          <div className="row">
            <div className="col-md-12">
              <input
                type="text"
                name="email"
                placeholder="Enter your email or phone number"
              />
            </div>
            {/* /.col-md-12 */}
            <div className="col-md-12">
              <div className="register-one__form__password">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <i className="icon-password password-toggler" />
              </div>
              {/* /.register-one__password */}
            </div>
            {/* /.col-md-12 */}
            <div className="col-md-12">
              <div className="register-one__form__forgot">
                <a href="#">Forgot Password?</a>
              </div>
              {/* /.register-one__form__forgot */}
            </div>
            {/* /.col-md-12 */}
            <div className="col-md-12">
              <button type="submit" className="thm-btn register-one__btn">
                <span>
                  Sign in
                  <i className="icon-arrow" />
                </span>
              </button>
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </form>
        {/* /.register-one__form */}
        <p className="register-one__tagline">or</p>
        <div className="register-one__social">
          <a href="#">
            <img
              src={LoginGoogleImg}
              alt="img"
            />
          </a>
          <a href="#">
            <img
              src={LoginLinkedIMg}
              alt="img"
            />
          </a>
          <a href="#">
            <img
              src={LoginFaceBookimg}
              alt="img"
            />
          </a>
        </div>
        {/* /.register-one__social */}
        <p className="register-one__tagline register-one__tagline--highlight">
          Dont have an account? <a href="register.html">Sign up</a>
        </p>
      </div>
      {/* /.register-one__inner */}
    </div>
    {/* /.container */}
  </section>
  )
}

export default RegisterOne
