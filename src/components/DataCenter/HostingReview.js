import React from "react";
import HostReview1 from "../../assets/images/resources/host-review-1.png"
import HostReview2 from "../../assets/images/resources/host-review-2.png"
import HostReview3 from "../../assets/images/resources/host-review-3.png"
import HostReview4 from "../../assets/images/resources/host-review-4.png"

function HostingReview() {
  return (
    <section className="host-review-one gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="host-review-one__item">
              <img src={HostReview1} alt="img" />
              <div className="host-review-one__item__content">
                <div className="host-review-one__item__star">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                </div>
                {/* /.host-review-one__item__star */}
                <div className="host-review-one__item__count">(4.9/5)</div>
                {/* /.host-review-one__item__count */}
              </div>
              {/* /.host-review-one__item__content */}
            </div>
            {/* /.host-review-one__item */}
          </div>
          {/* /.col-md-6 col-lg-3 */}
          <div className="col-md-6 col-lg-3">
            <div className="host-review-one__item">
              <img src={HostReview2} alt="img" />
              <div className="host-review-one__item__content">
                <div className="host-review-one__item__star">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star-half" />
                </div>
                {/* /.host-review-one__item__star */}
                <div className="host-review-one__item__count">(4.3/5)</div>
                {/* /.host-review-one__item__count */}
              </div>
              {/* /.host-review-one__item__content */}
            </div>
            {/* /.host-review-one__item */}
          </div>
          {/* /.col-md-6 col-lg-3 */}
          <div className="col-md-6 col-lg-3">
            <div className="host-review-one__item">
              <img src={HostReview3} alt="img" />
              <div className="host-review-one__item__content">
                <div className="host-review-one__item__star">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star-half" />
                </div>
                {/* /.host-review-one__item__star */}
                <div className="host-review-one__item__count">(4.5/5)</div>
                {/* /.host-review-one__item__count */}
              </div>
              {/* /.host-review-one__item__content */}
            </div>
            {/* /.host-review-one__item */}
          </div>
          {/* /.col-md-6 col-lg-3 */}
          <div className="col-md-6 col-lg-3">
            <div className="host-review-one__item">
              <img src={HostReview4} alt="img" />
              <div className="host-review-one__item__content">
                <div className="host-review-one__item__star">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                </div>
                {/* /.host-review-one__item__star */}
                <div className="host-review-one__item__count">(4.8/5)</div>
                {/* /.host-review-one__item__count */}
              </div>
              {/* /.host-review-one__item__content */}
            </div>
            {/* /.host-review-one__item */}
          </div>
          {/* /.col-md-6 col-lg-3 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}

export default HostingReview;
