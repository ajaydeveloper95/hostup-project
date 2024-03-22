import React from 'react';
import dataBase1 from "../../assets/images/shapes/database-shape-1.png"
import dataBase2 from "../../assets/images/shapes/database-shape-2.png"
import dataBase3 from "../../assets/images/shapes/database-shape-3.png"
import dataBase4 from "../../assets/images/shapes/database-shape-4.png"
import dataBase5 from "../../assets/images/shapes/database-shape-5.png"

function DataBase() {
  return (
    <section className="database">
    <div className="database__shape-1 float-bob-x">
      <img src={dataBase1} alt="img" />
    </div>
    <div className="database__shape-2 float-bob-y">
      <img src={dataBase2} alt="img" />
    </div>
    <div className="database__shape-3 zoominout">
      <img src={dataBase3} alt="img" />
    </div>
    <div className="database__shape-4 float-bob-y">
      <img src={dataBase4} alt="img" />
    </div>
    <div className="database__shape-5 float-bob-x">
      <img src={dataBase5} alt="img" />
    </div>
    <div className="container">
      <h2 className="database__title">
        Building one high performance site, <br /> our plans flex to your
        needs
      </h2>
      <div className="database__table-responsive">
        <table className="table database__table">
          <thead>
            <tr>
              <th />
              <th>VCPU</th>
              <th>Memory</th>
              <th>CPU Power</th>
              <th>Storage</th>
              <th>Geek Score</th>
              <th>Bandwidth</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VPS-A</td>
              <td>1 vCPU</td>
              <td>2GB</td>
              <td>2.4GHz</td>
              <td>20GB</td>
              <td>3513</td>
              <td>1000TB</td>
              <td>$2.95/mo</td>
              <td>
                <a href="pricing.html" className="database__btn">
                  <span>
                    Select Plan
                    <i className="icon-arrow" />
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>VPS-B</td>
              <td>2 vCPU</td>
              <td>4GB</td>
              <td>4.4GHz</td>
              <td>40GB</td>
              <td>6343</td>
              <td>2000TB</td>
              <td>$6.95/mo</td>
              <td>
                <a href="pricing.html" className="database__btn">
                  <span>
                    Select Plan
                    <i className="icon-arrow" />
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>VPS-C</td>
              <td>3 vCPU</td>
              <td>6GB</td>
              <td>7.2GHz</td>
              <td>60GB</td>
              <td>8515</td>
              <td>3000TB</td>
              <td>$12.45/mo</td>
              <td>
                <a href="pricing.html" className="database__btn">
                  <span>
                    Select Plan
                    <i className="icon-arrow" />
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>VPS-D</td>
              <td>4 vCPU</td>
              <td>8GB</td>
              <td>9.5GHz</td>
              <td>80GB</td>
              <td>10343</td>
              <td>4000TB</td>
              <td>$18.25/mo</td>
              <td>
                <a href="pricing.html" className="database__btn">
                  <span>
                    Select Plan
                    <i className="icon-arrow" />
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>VPS-E</td>
              <td>6 vCPU</td>
              <td>12GB</td>
              <td>14.2GHz</td>
              <td>120GB</td>
              <td>14515</td>
              <td>6000TB</td>
              <td>$22.45/mo</td>
              <td>
                <a href="pricing.html" className="database__btn">
                  <span>
                    Select Plan
                    <i className="icon-arrow" />
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>VPS-F</td>
              <td>8 vCPU</td>
              <td>32GB</td>
              <td>22.5GHz</td>
              <td>240GB</td>
              <td>22343</td>
              <td>8000TB</td>
              <td>$32.25/mo</td>
              <td>
                <a href="pricing.html" className="database__btn">
                  <span>
                    Select Plan
                    <i className="icon-arrow" />
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="database__bottom-text">
        *All our VPS plans are based on OVZ virtualization technology.
      </p>
    </div>
  </section>
  )
}

export default DataBase
