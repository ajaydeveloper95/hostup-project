import React from 'react';
import dataBaseIcon1 from "../../assets/images/icons/database-two-icon-1.png"
import dataBaseIcon2 from "../../assets/images/icons/database-two-icon-2.png"
import databaseShape2 from "../../assets/images/shapes/database-two-shape-1.png"

function DataBaseTwo() {
  return (
    <section className="database-two">
    <div
      className="database-two__shape float-bob-y"
      style={{
        backgroundImage:
          `url(${databaseShape2})`,
      }}
    />
    <div className="container">
      <h2 className="database-two-top__title">
        Enhance the performance of <br /> any managed VPS plan
      </h2>
      <div className="row">
        {/* Database Two Single Start */}
        <div className="col-xl-6 col-lg-6">
          <div className="database-two__single">
            <div className="database-two__icon">
              <img
                src={dataBaseIcon1}
                alt="img"
              />
            </div>
            <h3 className="database-two__title">
              Supercharge Your MySQL <br /> Database
            </h3>
            <p className="database-two__text">
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some
              form, by injected humour, or randomised words which don't
              look even slightly believable.
            </p>
            <a
              href="vps-hosting.html"
              className="database-two__read-more"
            >
              Read more <span className="icon-arrow" />
            </a>
          </div>
        </div>
        {/* Database Two Single End */}
        {/* Database Two Single Start */}
        <div className="col-xl-6 col-lg-6">
          <div className="database-two__single">
            <div className="database-two__icon">
              <img
                src={dataBaseIcon2}
                alt="img"
              />
            </div>
            <h3 className="database-two__title">
              Unmanaged VPS Powered <br /> by the Cloud
            </h3>
            <p className="database-two__text">
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some
              form, by injected humour, or randomised words which don't
              look even slightly believable.
            </p>
            <a
              href="vps-hosting.html"
              className="database-two__read-more"
            >
              Read more <span className="icon-arrow" />
            </a>
          </div>
        </div>
        {/* Database Two Single End */}
      </div>
    </div>
  </section>
  )
}

export default DataBaseTwo
