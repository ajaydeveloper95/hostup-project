import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner-four">
            <div className="banner-four__bg" style={{backgroundImage: `url(${require("../../assets/images/background/banner-four-bg.jpg")})`}}>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="banner-four__left">
                            <h2 className="banner-four__title">Unique & Powerful <br /> Reengineered VR <br />
                                experiences.
                            </h2>
                            <p className="banner-four__text">It is a long established fact that a reader will be
                                distracted <br /> by page when looking at its layout.</p>
                            <Link to="/about" className="thm-btn banner-four__btn">
                                <span>
                                    Get Started
                                    <i className="icon-arrow"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="banner-four__right">
                            <div className="banner-four__img">
                                <img src={require("../../assets/images/resources/banner-four-img-1.png")} alt="img" className="float-bob-y" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner