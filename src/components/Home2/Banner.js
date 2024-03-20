import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner-two">
            <div className="banner-two__shape-1 float-bob-y"
                style={{backgroundImage: `url(${require("../../assets/images/shapes/banner-two-shape-1.png")})`}}></div>
            <div className="banner-two__shape-2 float-bob-x">
                <img src={require("../../assets/images/shapes/banner-two-shape-2.png")} alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="banner-two__left">
                            <div className="banner-two__sub-title-box">
                                <div className="banner-two__sub-title-icon">
                                    <span className="icon-icon-check"></span>
                                </div>
                                <p className="banner-two__sub-title">30-days money back guarantee</p>
                            </div>
                            <h2 className="banner-two__title">Unlimited storage, unbeatable hosting
                            </h2>
                            <p className="banner-two__text count-box">Join <span className="count-text" data-stop="1570620"
                                    data-speed="1500"></span>+ websites who are building their <br />
                                businesses online.</p>
                            <Link to="/about" className="thm-btn banner-two__btn">
                                <span>
                                    Get Started
                                    <i className="icon-arrow"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="banner-two__right">
                            <div className="banner-two__img wow fadeInUp" data-wow-duration="1500ms">
                                <img src={require("../../assets/images/resources/banner-two-img-1.png")} alt="img" className="float-bob-y" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner