import React from 'react'

function RegisterOne() {
  return (
    <section className="register-one">
    <div className="container">
      <div
        className="register-one__inner wow fadeInUp"
        data-wow-duration="1500ms"
      >
        <h3 className="register-one__title">Register Hostup Account</h3>
        {/* /.register-one__title */}
        <p className="register-one__text">
          The distracted by the readable content of a page when looking at its
          layout
        </p>
        {/* /.register-one__text */}
        <form action="#" className="register-one__form">
          <div className="row">
            <div className="col-md-6">
              <input type="text" name="fname" placeholder="First Name" />
            </div>
            {/* /.col-md-6 */}
            <div className="col-md-6">
              <input type="text" name="lname" placeholder="Last Name" />
            </div>
            {/* /.col-md-6 */}
            <div className="col-md-12">
              <input type="email" name="email" placeholder="Email" />
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
              <button type="submit" className="thm-btn register-one__btn">
                <span>
                  Sign up
                  <i className="icon-arrow" />
                </span>
              </button>
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </form>
        {/* /.register-one__form */}
        <p className="register-one__tagline">
          Signing up for a Hostup account means you agree with a{" "}
          <a href="#">Privacy Policy</a> and <a href="#">Terms of Services</a>
        </p>
        <p className="register-one__tagline register-one__tagline--highlight">
          Already have an account? <a href="login.html">Sign in</a>
        </p>
      </div>
      {/* /.register-one__inner */}
    </div>
    {/* /.container */}
  </section>
  )
}

export default RegisterOne
