import React from "react";
import dataCenterThree from "../../assets/images/icons/data-center-three-map.png";

function DataCenter() {
  return (
    <section className="data-center-three">
      <div className="container">
        <div className="data-center-three__top">
          <div className="data-center-three__section-title text-center">
            <h2 className="data-center-three__section-title__title">
              Our Cloud Servers Around <br /> the World
            </h2>
            <p className="data-center-three__section-title__text">
              The distracted by the readable content of a page when looking at
              its layout
            </p>
          </div>
          <div className="data-center-three__map">
            <img src={dataCenterThree} alt="" />
            <div className="data-center-three__location-1">
              <div className="data-center-three__map-markar" />
              <div className="data-center-three__popup-box">
                <div className="data-center-three__popup">
                  <div className="data-center-three__popup-inner">
                    <h5 className="data-center-three__popup-title">France</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-center-three__location-1 data-center-three__location-2">
              <div className="data-center-three__map-markar data-center-three__map-markar-2" />
              <div className="data-center-three__popup-box">
                <div className="data-center-three__popup">
                  <div className="data-center-three__popup-inner">
                    <h5 className="data-center-three__popup-title">
                      London, UK
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-center-three__location-1 data-center-three__location-3">
              <div className="data-center-three__map-markar data-center-three__map-markar-3" />
              <div className="data-center-three__popup-box">
                <div className="data-center-three__popup">
                  <div className="data-center-three__popup-inner">
                    <h5 className="data-center-three__popup-title">India</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-center-three__location-1 data-center-three__location-4">
              <div className="data-center-three__map-markar data-center-three__map-markar-4" />
              <div className="data-center-three__popup-box">
                <div className="data-center-three__popup">
                  <div className="data-center-three__popup-inner">
                    <h5 className="data-center-three__popup-title">Canada</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-center-three__location-1 data-center-three__location-5">
              <div className="data-center-three__map-markar data-center-three__map-markar-5" />
              <div className="data-center-three__popup-box">
                <div className="data-center-three__popup">
                  <div className="data-center-three__popup-inner">
                    <h5 className="data-center-three__popup-title">Germany</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-center-three__location-1 data-center-three__location-6">
              <div className="data-center-three__map-markar data-center-three__map-markar-6" />
              <div className="data-center-three__popup-box">
                <div className="data-center-three__popup">
                  <div className="data-center-three__popup-inner">
                    <h5 className="data-center-three__popup-title">Japan</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-center-three__location-1 data-center-three__location-7">
              <div className="data-center-three__map-markar data-center-three__map-markar-7" />
              <div className="data-center-three__popup-box">
                <div className="data-center-three__popup">
                  <div className="data-center-three__popup-inner">
                    <h5 className="data-center-three__popup-title">USA</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="data-center-three__location-1 data-center-three__location-8">
              <div className="data-center-three__map-markar data-center-three__map-markar-8" />
              <div className="data-center-three__popup-box">
                <div className="data-center-three__popup">
                  <div className="data-center-three__popup-inner">
                    <h5 className="data-center-three__popup-title">
                      Switzerland
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataCenter;
