import React from 'react'

function CounterOne() {
  return (
    <section className="counter-one">
          <div
            className="counter-one__bg"
            style={{
              backgroundImage:
                "url(assets/images/background/counter-one-bg.png)",
            }}
          ></div>
          <div className="container">
            <h3 className="counter-one__title">
              Leading provider of web-presence <br /> solutions
            </h3>
            <div className="row">
              {/*Counter One Single Start*/}
              <div className="col-xl-4 col-lg-4">
                <div className="counter-one__single">
                  <div className="counter-one__count-box count-box">
                    <h3
                      className="count-text"
                      data-stop={200}
                      data-speed={1500}
                    >
                      00
                    </h3>
                    <h4 className="counter-one__count-text">k</h4>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Happy Customers</p>
                </div>
              </div>
              {/*Counter One Single End*/}
              {/*Counter One Single Start*/}
              <div className="col-xl-4 col-lg-4">
                <div className="counter-one__single">
                  <div className="counter-one__count-box count-box">
                    <h3 className="count-text" data-stop={20} data-speed={1500}>
                      00
                    </h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">
                    Years of Hosting Experience
                  </p>
                </div>
              </div>
              {/*Counter One Single End*/}
              {/*Counter One Single Start*/}
              <div className="col-xl-4 col-lg-4">
                <div className="counter-one__single">
                  <div className="counter-one__count-box count-box">
                    <h3
                      className="count-text"
                      data-stop={350}
                      data-speed={1500}
                    >
                      00
                    </h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Hosting Professionals</p>
                </div>
              </div>
              {/*Counter One Single End*/}
            </div>
          </div>
        </section>
  )
}

export default CounterOne
