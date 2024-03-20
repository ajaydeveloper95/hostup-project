import React from 'react'

const Customer = () => {
  return (
    <section className="customar-rating">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="customar-rating__left">
                            <div className="customar-rating__left-content">
                                <div className="customar-rating__left-content-inner">
                                    <div className="customar-rating__bg"
                                        style={{backgroundImage: `url(${require("../../assets/images/background/customar-rating-bg.png")}`}}>
                                    </div>
                                    <div className="customar-rating__star-1">
                                        <img src={require("../../assets/images/shapes/customar-rating-star-1.png")} alt="img" />
                                    </div>
                                    <div className="customar-rating__star-2">
                                        <img src={require("../../assets/images/shapes/customar-rating-star-2.png")} alt="img" />
                                    </div>
                                    <div className="customar-rating__star-3">
                                        <img src={require("../../assets/images/shapes/customar-rating-star-3.png")} alt="img" />
                                    </div>
                                    <div className="customar-rating__star-4">
                                        <img src={require("../../assets/images/shapes/customar-rating-star-4.png")} alt="img" />
                                    </div>
                                    <div className="customar-rating__icon">
                                        <span className="icon-awards-icon"></span>
                                    </div>
                                    <h3 className="customar-rating__best-number">#No.1 </h3>
                                    <div className="customar-rating__curved-circle">
                                        <div className="curved-circle">
                                            Host Advice
                                        </div>
                                    </div>
                                    <h3 className="customar-rating__title-two">WEB HOSTING</h3>
                                    <h4 className="customar-rating__year">2023</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="customar-rating__right">
                            <ul className="list-unstyled customar-rating__list">
                                <li>
                                    <div className="customar-rating__content">
                                        <div className="customar-rating__logo">
                                            <img src={require("../../assets/images/resources/customar-rating-logo1-1.png")} alt="img" />
                                        </div>
                                        <p className="customar-rating__text">Based on 25,000+ reviews See some of the
                                            reviews
                                            here.</p>
                                    </div>
                                    <div className="customar-rating__rating-point-and-star">
                                        <h5 className="customar-rating__rating-point">4.8/5</h5>
                                        <div className="customar-rating__star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="customar-rating__content">
                                        <div className="customar-rating__logo">
                                            <img src={require("../../assets/images/resources/customar-rating-logo1-2.png")} alt="img" />
                                        </div>
                                        <p className="customar-rating__text">Based on 12,000+ reviews See some of the
                                            reviews here.</p>
                                    </div>
                                    <div className="customar-rating__rating-point-and-star">
                                        <h5 className="customar-rating__rating-point">4.3/5</h5>
                                        <div className="customar-rating__star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="customar-rating__content">
                                        <div className="customar-rating__logo">
                                            <img src={require("../../assets/images/resources/customar-rating-logo1-3.png")} alt="img" />
                                        </div>
                                        <p className="customar-rating__text">Based on 7,500+ reviews See some of the reviews
                                            here.</p>
                                    </div>
                                    <div className="customar-rating__rating-point-and-star">
                                        <h5 className="customar-rating__rating-point">4.2/5</h5>
                                        <div className="customar-rating__star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Customer