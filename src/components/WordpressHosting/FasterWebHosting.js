import React from 'react'

function FasterWebHosting() {
  return (
    <section className="faster-wp-hosting">
      <div className="container">
        <div className="faster-wp-hosting__section-title text-center">
          <h2 className="faster-wp-hosting__section-title__title">
            The fastest WordPress <br /> hosting around
          </h2>
          <p className="faster-wp-hosting__section-title__text">
            The distracted by the readable content of a page when looking at its
            layout
          </p>
        </div>
        <div className="faster-wp-hosting__inner">
          <div className="faster-wp-hosting__table-responsive">
            <table className="table faster-wp-hosting__table">
              <thead>
                <tr>
                  <th>Hosting Sites</th>
                  <th>Fully Loaded Time</th>
                  <th>Time to First Byte</th>
                  <th>Price Per Month</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hostup</td>
                  <td>0.5 seconds</td>
                  <td>190 milliseconds</td>
                  <td>$5.99/month</td>
                </tr>
                <tr>
                  <td>Fenco</td>
                  <td>0.9 seconds</td>
                  <td>396 milliseconds</td>
                  <td>$18.59/month</td>
                </tr>
                <tr>
                  <td>Melpe</td>
                  <td>0.9 seconds</td>
                  <td>245 milliseconds</td>
                  <td>$24.99/month</td>
                </tr>
                <tr>
                  <td>Halsey</td>
                  <td>1.2 seconds</td>
                  <td>445 milliseconds</td>
                  <td>$13.99/month</td>
                </tr>
                <tr>
                  <td>Paese</td>
                  <td>1.6 seconds</td>
                  <td>525 milliseconds</td>
                  <td>$23.99/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="faster-wp-hosting__bottom">
            Hostup tested with SSD, cloudfare CDN and nearest hosting country{" "}
            <a href="about.html">
              Read more <span className="icon-arrow" />
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FasterWebHosting
