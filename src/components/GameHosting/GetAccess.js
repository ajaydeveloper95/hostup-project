import React from 'react'

function GetAccess() {
  return (
    <section className="get-access">
          <div className="get-access__img float-bob-x">
            <img src="assets/images/resources/get-access-img-1.png" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="get-access__left">
                  <h3 className="get-access__title">
                    Get access to a remote <br /> desktop of your server with{" "}
                    <br />
                    the operating system
                  </h3>
                  <p className="get-access__text">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy
                  </p>
                  <div className="get-access__btn-box">
                    <div className="get-access__btn-box-content">
                      <div className="get-access__btn-icon">
                        <img
                          src="assets/images/icons/get-access-btn-icon-1-1.png"
                          alt="img"
                        />
                      </div>
                      <a href="about.html" className="get-access__btn">
                        Get Windows VPS <span className="icon-arrow" />
                      </a>
                    </div>
                    <div className="get-access__btn-box-content get-access__btn-box-content--two">
                      <div className="get-access__btn-icon">
                        <img
                          src="assets/images/icons/get-access-btn-icon-1-2.png"
                          alt="img"
                        />
                      </div>
                      <a href="about.html" className="get-access__btn">
                        Get Linux VPS <span className="icon-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default GetAccess
