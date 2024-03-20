import React from 'react'

const HowWorks = () => {
  return (
    <section class="how-it-work">
            <div class="container">
                <div class="how-it-work__inner">
                    <div class="how-it-work__shape-1">
                        <img src={require("../../assets/images/shapes/how-it-work-shape-1.png")} alt="img"/>
                    </div>
                    <div class="how-it-work__section-title text-center">
                        <h2 class="how-it-work__section-title__title">How it works for your online <br /> business and get
                            success
                        </h2>
                        <p class="how-it-work__section-title__text">The distracted by the readable content of a page
                            when
                            looking at its layout
                        </p>
                    </div>
                    <ul class="list-unstyled how-it-work__list">
                        <li class="col-xl-3 col-lg-6 col-md-6">
                            <div class="how-it-work__single">
                                <div class="how-it-work__icon">
                                    <img src={require("../../assets/images/icons/how-it-work-icon-1.png")} alt="img"/>
                                </div>
                                <h4 class="how-it-work__title">Buy a domain</h4>
                                <p class="how-it-work__text">There are many variations offset
                                    wille passages of Lorem Ipsum alteration to an end.</p>
                                <div class="how-it-work__step-text">
                                    <p>Step-</p>
                                    <div class="how-it-work__count"></div>
                                </div>
                            </div>
                        </li>
                        
                        <li class="col-xl-3 col-lg-6 col-md-6">
                            <div class="how-it-work__single">
                                <div class="how-it-work__icon">
                                    <img src={require("../../assets/images/icons/how-it-work-icon-2.png")} alt="img"/>
                                </div>
                                <h4 class="how-it-work__title">Find the right hosting</h4>
                                <p class="how-it-work__text">There are many variations offset
                                    wille passages of Lorem Ipsum alteration to an end.</p>
                                <div class="how-it-work__step-text">
                                    <p>Step-</p>
                                    <div class="how-it-work__count"></div>
                                </div>
                            </div>
                        </li>
                        
                        <li class="col-xl-3 col-lg-6 col-md-6">
                            <div class="how-it-work__single">
                                <div class="how-it-work__icon">
                                    <img src={require("../../assets/images/icons/how-it-work-icon-3.png")} alt="img"/>
                                </div>
                                <h4 class="how-it-work__title">Add professional email</h4>
                                <p class="how-it-work__text">There are many variations offset
                                    wille passages of Lorem Ipsum alteration to an end.</p>
                                <div class="how-it-work__step-text">
                                    <p>Step-</p>
                                    <div class="how-it-work__count"></div>
                                </div>
                            </div>
                        </li>
                        
                        <li class="col-xl-3 col-lg-6 col-md-6">
                            <div class="how-it-work__single">
                                <div class="how-it-work__icon">
                                    <img src={require("../../assets/images/icons/how-it-work-icon-4.png")} alt="img"/>
                                </div>
                                <h4 class="how-it-work__title">Boost performance</h4>
                                <p class="how-it-work__text">There are many variations offset
                                    wille passages of Lorem Ipsum alteration to an end.</p>
                                <div class="how-it-work__step-text">
                                    <p>Step-</p>
                                    <div class="how-it-work__count"></div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default HowWorks