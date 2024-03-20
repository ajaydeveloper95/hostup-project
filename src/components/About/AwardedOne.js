import React from "react";
import Awarded1 from "../../assets/images/resources/awarded-1-1.png";
import Awarded2 from "../../assets/images/resources/awarded-1-2.png";
import Awarded3 from "../../assets/images/resources/awarded-1-3.png";
import Awarded4 from "../../assets/images/resources/awarded-1-4.png";
import Awarded5 from "../../assets/images/resources/awarded-1-5.png";

function AwardedOne() {
  return (
    <section className="awarded-one">
      <div className="container">
        <div className="awarded-one__inner">
          <h2 className="awarded-one__title">
            Awarded Leader in Employee <br /> Communications Software
          </h2>
          <ul className="list-unstyled awarded-one__list">
            <li>
              <div className="awarded-one__img">
                <img src={Awarded1} alt="img" />
              </div>
            </li>
            <li>
              <div className="awarded-one__img">
                <img src={Awarded2} alt="img" />
              </div>
            </li>
            <li>
              <div className="awarded-one__img">
                <img src={Awarded3} alt="img" />
              </div>
            </li>
            <li>
              <div className="awarded-one__img">
                <img src={Awarded4} alt="img" />
              </div>
            </li>
            <li>
              <div className="awarded-one__img">
                <img src={Awarded5} alt="img" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AwardedOne;
