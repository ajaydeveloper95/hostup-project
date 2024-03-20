import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className="banner-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner-one__left">
                                <div className="banner-one__sub-title-box">
                                    <div className="banner-one__sub-title-icon">
                                        <span className="icon-icon-check"></span>
                                    </div>
                                    <p className="banner-one__sub-title">30-days money back guarantee</p>
                                </div>
                                <h2 className="banner-one__title">Build a Professional <br /> website with Hostup
                                </h2>
                                <p className="banner-one__text count-box">Join <span className="count-text" data-stop="1570620"
                                    data-speed="1500"></span>+ websites who are building their <br />
                                        businesses online.</p>
                                <Link to="/about" className="thm-btn banner-one__btn">
                                    <span>
                                        Get Started
                                        <i className="icon-arrow"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner-one__right">
                                <div className="banner-one__img wow fadeInUp" data-wow-duration="1500ms">
                                    <img src={require("../../assets/images/resources/banner-one-img-1.png")} alt="img" className="float-bob-y" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero