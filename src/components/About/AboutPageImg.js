import React from 'react';
import AboutPageImgBox1 from "../../assets/images/resources/about-page-img-box-1.jpg"

function AboutPageImg() {
  return (
    <section className="about-page-img-box">
          <div className="about-page-img-box__img">
            <img src={AboutPageImgBox1} alt="img" />
          </div>
        </section>
  )
}

export default AboutPageImg
