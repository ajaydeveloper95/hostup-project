import React, { useState } from "react";
import { Link } from "react-router-dom";

function TopOffer() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <section className={`top-offer`}>
          <div className="container text-center">
            <span
              onClick={() => setShow(false)}
              className="top-offer__dismiss sec-dismiss"
              data-section-className=".top-offer"
            >
              <i className="icon-close"></i>
            </span>
            <p>
              <i className="icon-stars"></i>
              Hostup Flash Sale: Starting at $2.59/mo for a limited time{" "}
              <Link to="/#">
                <span>Read more</span>
                <i className="icon-arrow"></i>
              </Link>{" "}
              <i className="icon-stars"></i>
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default TopOffer;
