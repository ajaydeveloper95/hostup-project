import React from 'react'

function ComparisionThree() {
  return (
    <section className="comparision-three">
    <div className="comparision-three__shape-1 float-bob-y">
      <img src="assets/images/shapes/comparision-three-shape-1.png" alt="img" />
    </div>
    <div className="comparision-three__shape-2 float-bob-y">
      <img src="assets/images/shapes/comparision-three-shape-2.png" alt="img" />
    </div>
    <div className="comparision-three__shape-3 float-bob-x">
      <img src="assets/images/shapes/comparision-three-shape-3.png" alt="img" />
    </div>
    <div className="container">
      <div className="comparision-three__section-title text-center">
        <h2 className="comparision-three__section-title__title">
          Average page load difference <br /> before &amp; after migration
        </h2>
        <p className="comparision-three__section-title__text">
          The distracted by the readable content of a page when looking at its
          layout
        </p>
      </div>
      <div className="comparision-three__inner">
        <div className="comparision-three__progress-box">
          <div className="comparision-three__progress-box-border" />
          <div className="comparision-three__progress">
            <h4 className="comparision-three__progress-title">
              After switching to Hostup
            </h4>
            <div className="bar">
              <div className="bar-inner count-bar" data-percent="70%">
                <div className="count-text">2.10s</div>
              </div>
            </div>
          </div>
          <div className="comparision-three__progress marb-0">
            <h4 className="comparision-three__progress-title">
              Before switching to Hostup
            </h4>
            <div className="bar">
              <div
                className="bar-inner bar-inner-two count-bar"
                data-percent="100%"
              >
                <div className="count-text">2.55s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ComparisionThree
