import React from 'react'

function Competitors() {
  return (
    <section className="competitors">
    <div className="container">
      <div className="competitors__section-title text-center">
        <h2 className="competitors__section-title__title">
          Hostup VPS vs. VPS <br /> Competitors
        </h2>
        <p className="competitors__section-title__text">
          The distracted by the readable content of a page when looking at
          its layout
        </p>
      </div>
      <div className="competitors__inner">
        <div className="competitors__table-responsive">
          <table className="table competitors__table">
            <thead>
              <tr>
                <th />
                <th>Hostup VPS</th>
                <th>Halsey VPS</th>
                <th>Paese VPS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cores</td>
                <td>4</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>8 GB</td>
                <td>4 GB</td>
                <td>8 GB</td>
              </tr>
              <tr>
                <td>Disk Space</td>
                <td>180 GB</td>
                <td>120 GB</td>
                <td>140 GB</td>
              </tr>
              <tr>
                <td>Bandwidth</td>
                <td>3000 GB</td>
                <td>Unmetered</td>
                <td>5000 GB</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>$12.88/month</td>
                <td>$25.88/month</td>
                <td>$29.99/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Competitors
