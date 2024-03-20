import React from "react";
import BannerFour1 from "../../assets/images/resources/page-banner-four-img-1.png";

function BannerFour() {
  return (
    <section className="page-banner-four">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="page-banner-four__left">
              <h2 className="page-banner-four__title">Domain name Search</h2>
              <p className="page-banner-four__text">
                Search domain name availability using our domain checker tool.{" "}
                <br /> Simply type in your desired name and get instant results
              </p>
              <form className="page-banner-four__form" action="#">
                <div className="page-banner-four__input-box">
                  <input
                    type="text"
                    name="domain"
                    placeholder="Search domain name..."
                  />
                  <div className="page-banner-four__name">
                    <select className="selectpicker">
                      <option value=".com" selected="">
                        .com
                      </option>
                      <option value=".info">.info </option>
                      <option value=".net">.net</option>
                      <option value=".org">.org</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="thm-btn page-banner-four__btn">
                  <span>
                    <i className="icon-search-icon" />
                  </span>
                </button>
              </form>
              <div className="page-banner-four__bottom">
                <ul className="list-unstyled page-banner-four__list">
                  <li>
                    <p className="page-banner-four__type">.com</p>
                    <p className="page-banner-four__price">$2.99/Year</p>
                  </li>
                  <li>
                    <p className="page-banner-four__type">.store</p>
                    <p className="page-banner-four__price">$1.99/Year</p>
                  </li>
                  <li>
                    <p className="page-banner-four__type">.online</p>
                    <p className="page-banner-four__price">$3.99/Year</p>
                  </li>
                  <li>
                    <p className="page-banner-four__type">.co</p>
                    <p className="page-banner-four__price">$1.99/Year</p>
                  </li>
                </ul>
              </div>
              <p className="page-banner-four__bottom-text">
                Already have a domain? <a href="#">Transfer it</a>
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="page-banner-four__right">
              <div className="page-banner-four__img float-bob-y">
                <img src={BannerFour1} alt="img" />
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}

export default BannerFour;
