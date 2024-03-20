import React from 'react'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
  return (
    <section className="comming-soon">
            <div className="comming-soon__bg" style={{backgroundImage: `url(${require("../../assets/images/background/comming-soon-bg.png")})`}}>
            </div>
            <div className="container">
                <div className="comming-soon__section-title text-center">
                    <h2 className="comming-soon__section-title__title">Coming Soon!!!</h2>
                    <p className="comming-soon__section-title__text">The distracted by the readable content of a page when
                        looking at its layout</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="comming-soon__single">
                            <div className="comming-soon__img-box">
                                <div className="comming-soon__img">
                                    <img src={require("../../assets/images/resources/comming-soon-1-1.jpg")} alt="img" />
                                </div>
                                <div className="comming-soon__sub-title">
                                    <p>PLAFORMS : PC, PLAY STATION 5, XBOX SERIES X|S</p>
                                </div>
                            </div>
                            <div className="comming-soon__content">
                                <div className="comming-soon__title-box">
                                    <h3 className="comming-soon__title"><Link to="/pricing">Battlefield 2042 (Gold
                                            Edition)</Link></h3>
                                    <div className="comming-soon__price-box">
                                        <p><span>$45.99</span>$35.99</p>
                                    </div>
                                </div>
                                <div className="comming-soon__btn-box">
                                    <Link to="/pricing" className="thm-btn comming-soon__btn">
                                        <span>
                                            Pre-Order
                                            <i className="icon-arrow"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="comming-soon__single">
                            <div className="comming-soon__img-box">
                                <div className="comming-soon__img">
                                    <img src={require("../../assets/images/resources/comming-soon-1-2.jpg")} alt="img" />
                                </div>
                                <div className="comming-soon__sub-title">
                                    <p>PLAFORMS : PC, PLAY STATION 5, XBOX SERIES X|S</p>
                                </div>
                            </div>
                            <div className="comming-soon__content">
                                <div className="comming-soon__title-box">
                                    <h3 className="comming-soon__title"><Link to="/pricing">Fifa 2023 (Ultimate
                                            Edition)</Link></h3>
                                    <div className="comming-soon__price-box">
                                        <p><span>$67.99 </span> $55.99</p>
                                    </div>
                                </div>
                                <div className="comming-soon__btn-box">
                                    <Link to="/pricing" className="thm-btn comming-soon__btn">
                                        <span>
                                            Pre-Order
                                            <i className="icon-arrow"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="comming-soon__single">
                            <div className="comming-soon__img-box">
                                <div className="comming-soon__img">
                                    <img src={require("../../assets/images/resources/comming-soon-1-3.jpg")} alt="img" />
                                </div>
                                <div className="comming-soon__sub-title">
                                    <p>PLAFORMS : PC, PLAY STATION 5, XBOX SERIES X|S</p>
                                </div>
                            </div>
                            <div className="comming-soon__content">
                                <div className="comming-soon__title-box">
                                    <h3 className="comming-soon__title"><Link to="/pricing">Atomic Heart</Link></h3>
                                    <div className="comming-soon__price-box">
                                        <p><span>$45.99</span> $35.99</p>
                                    </div>
                                </div>
                                <div className="comming-soon__btn-box">
                                    <Link to="/pricing" className="thm-btn comming-soon__btn">
                                        <span>
                                            Pre-Order
                                            <i className="icon-arrow"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="comming-soon__single">
                            <div className="comming-soon__img-box">
                                <div className="comming-soon__img">
                                    <img src={require("../../assets/images/resources/comming-soon-1-4.jpg")} alt="img" />
                                </div>
                                <div className="comming-soon__sub-title">
                                    <p>PLAFORMS : PC, PLAY STATION 5, XBOX SERIES X|S</p>
                                </div>
                            </div>
                            <div className="comming-soon__content">
                                <div className="comming-soon__title-box">
                                    <h3 className="comming-soon__title"><Link to="/pricing">Company of Heroes 3</Link></h3>
                                    <div className="comming-soon__price-box">
                                        <p><span>$67.99</span>$55.99</p>
                                    </div>
                                </div>
                                <div className="comming-soon__btn-box">
                                    <Link to="/pricing" className="thm-btn comming-soon__btn">
                                        <span>
                                            Pre-Order
                                            <i className="icon-arrow"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ComingSoon