import React from 'react'

function GetFaster() {
  return (
    <section className="get-faster">
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-lg-6">
          <div className="get-faster__left">
            <div className="get-faster__img">
              <img
                src="assets/images/resources/get-faster-img-1.png"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="get-faster__right">
            <h3 className="get-faster__title">
              Get faster sites — up to 3x faster page load times
            </h3>
            <ul className="get-faster__points list-unstyled">
              <li>
                <div className="icon">
                  <span className="icon-icon-check-2" />
                </div>
                <div className="content">
                  <h3>Faster page load times</h3>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-icon-check-2" />
                </div>
                <div className="content">
                  <h3>Object Cache Pro</h3>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend too be
                    repeat predefined chunks.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-icon-check-2" />
                </div>
                <div className="content">
                  <h3>Global Content Delivery Network</h3>
                  <p>
                    The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                  </p>
                </div>
              </li>
            </ul>
            <div className="get-faster__btn-box">
              <a href="about.html" className="thm-btn get-faster__btn">
                <span>
                  Read more
                  <i className="icon-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GetFaster
