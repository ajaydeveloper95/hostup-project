import React from 'react'

const Banner = () => {
  return (
    <div class="banner-three">
            <div class="banner-three__shape-1 float-bob-y">
                <img src={require("../../assets/images/shapes/banner-three-shape-1.png")} alt="img" />
            </div>
            <div class="banner-three__shape-2 img-bounce">
                <img src={require("../../assets/images/shapes/banner-three-shape-2.png")} alt="img" />
            </div>
            <div class="banner-three__shape-3 float-bob-y">
                <img src={require("../../assets/images/shapes/banner-three-shape-3.png")} alt="img" />
            </div>
            <div class="banner-three__shape-4 float-bob-x">
                <img src={require("../../assets/images/shapes/banner-three-shape-4.png")} alt="img" />
            </div>
            <div class="banner-three__shape-5 zoominout">
                <img src={require("../../assets/images/shapes/banner-three-shape-5.png")} alt="img" />
            </div>
            <div class="banner-three__shape-6 float-bob-y">
                <img src={require("../../assets/images/shapes/banner-three-shape-6.png")} alt="img" />
            </div>
            <div class="banner-three__shape-7 zoominout">
                <img src={require("../../assets/images/shapes/banner-three-shape-7.png")} alt="img" />
            </div>
            <div class="banner-three__shape-8 zoominout">
                <img src={require("../../assets/images/shapes/banner-three-shape-8.png")} alt="img" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="banner-three__inner">
                            <div class="banner-three__sub-title-box">
                                <p class="banner-three__sub-title">Up to 65% off Shared Hosting + FREE domain.</p>
                                <p class="banner-three__flase-sale">Flash Sale!</p>
                                <div class="banner-three__star-1">
                                    <img src={require("../../assets/images/shapes/banner-three-star-1.png")} alt="img" />
                                </div>
                                <div class="banner-three__star-2">
                                    <img src={require("../../assets/images/shapes/banner-three-star-2.png")} alt="img" />
                                </div>
                            </div>
                            <h2 class="banner-three__title">Light up your website with <br /> smart hostup solutions</h2>
                            <p class="banner-three__text">All the Lorem Ipsum generators on the Internet tend to repeat
                                predefined chunks as necessary, <br /> making this the first true generator on the
                                Internet.</p>
                            <div class="banner-three__btn-box">
                                <a href="about.html" class="thm-btn banner-three__btn-1">
                                    <span>
                                        Get Started
                                        <i class="icon-arrow"></i>
                                    </span>
                                </a>
                                <a href="about.html" class="thm-btn banner-three__btn-2">
                                    <span>
                                        Watch Video
                                        <i class="icon-arrow"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner