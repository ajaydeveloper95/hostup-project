import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <section className="pricing-three">
            <div className="pricing-three__section-title text-center">
                <h2 className="pricing-three__section-title__title">Everything included out <br /> of the box</h2>
                <p className="pricing-three__section-title__text">The distracted by the readable content of a page when
                    looking
                    at its layout</p>
            </div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="pricing-three__single">
                            <div className="pricing-three__img">
                                <img src={require("../../assets/images/resources/pricing-3-1.jpg")} alt="img" />
                                <div className="pricing-three__img-text">
                                    <p>Game Hosting Personal</p>
                                </div>
                            </div>
                            <div className="pricing-three__content">
                                <p className="pricing-three__text">Tools, support and assets to help you deliver better
                                    projects, faster.</p>
                                <div className="pricing-three__price-box">
                                    <h3 className="pricing-three__price">$20. <span
                                            className="pricing-three__price-point">99</span>
                                        <span className="pricing-three__price-validity">/month</span> </h3>
                                    <p className="pricing-three__price-renew">Download free trail for 15 days</p>
                                </div>
                                <p className="pricing-three__points-title">Includes:</p>
                                <ul className="list-unstyled pricing-three__points">
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Multicloud scaling</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Connectivity and matchmaking</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Unlocks Matchmaker</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>10 learning materials</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Community-based support</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="pricing-three__btn-box">
                                <Link to="/pricing" className="thm-btn pricing-three__btn">
                                    <span>
                                        Choose Plan
                                        <i className="icon-arrow"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="pricing-three__single">
                            <div className="pricing-three__img">
                                <img src={require("../../assets/images/resources/pricing-3-2.jpg")} alt="img" />
                                <div className="pricing-three__img-text">
                                    <p>Game Hosting Pro</p>
                                </div>
                            </div>
                            <div className="pricing-three__content">
                                <p className="pricing-three__text">Tools, support and assets to help you deliver better
                                    projects, faster.</p>
                                <div className="pricing-three__price-box">
                                    <h3 className="pricing-three__price">$30. <span
                                            className="pricing-three__price-point">99</span>
                                        <span className="pricing-three__price-validity">/month</span> </h3>
                                    <p className="pricing-three__price-renew">Download free trail for 15 days</p>
                                </div>
                                <p className="pricing-three__points-title">Includes:</p>
                                <ul className="list-unstyled pricing-three__points">
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Multicloud scaling</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Connectivity and matchmaking</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Unlocks Matchmaker</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>100 learning materials</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Community-based support</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="pricing-three__btn-box">
                                <Link to="pricing.html" className="thm-btn pricing-three__btn">
                                    <span>
                                        Choose Plan
                                        <i className="icon-arrow"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="pricing-three__single">
                            <div className="pricing-three__img">
                                <img src={require("../../assets/images/resources/pricing-3-3.jpg")} alt="img" />
                                <div className="pricing-three__img-text">
                                    <p>Game Hosting Plus</p>
                                </div>
                            </div>
                            <div className="pricing-three__content">
                                <p className="pricing-three__text">Tools, support and assets to help you deliver better
                                    projects, faster.</p>
                                <div className="pricing-three__price-box">
                                    <h3 className="pricing-three__price">$50. <span
                                            className="pricing-three__price-point">99</span>
                                        <span className="pricing-three__price-validity">/month</span> </h3>
                                    <p className="pricing-three__price-renew">Download free trail for 15 days</p>
                                </div>
                                <p className="pricing-three__points-title">Includes:</p>
                                <ul className="list-unstyled pricing-three__points">
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Multicloud scaling</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Connectivity and matchmaking</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Unlocks Matchmaker</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Unlimited learning materials</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-icon-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Community-based support</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="pricing-three__btn-box">
                                <Link to="pricing.html" className="thm-btn pricing-three__btn">
                                    <span>
                                        Choose Plan
                                        <i className="icon-arrow"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Pricing