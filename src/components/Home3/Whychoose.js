import React from 'react'
import { Link } from 'react-router-dom'

const Whychoose = () => {
    return (
        <section className="why-choose-two">
            <div className="why-choose-two__bg"
                style={{ backgroundImage: `url(${require("../../assets/images/background/why-choose-two-bg.png")})` }}></div>
            <div className="container">
                <h2 className="why-choose-two__top-title">Why choose Hostup for your <br /> hosting needs?</h2>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="why-choose-two__single">
                            <div className="why-choose-two__icon">
                                <img src={require("../../assets/images/icons/why-choose-two-icon-1-1.png")} alt="img" />
                            </div>
                            <h4 className="why-choose-two__title"><Link to="/about">99% uptime guarantee</Link></h4>
                            <p className="why-choose-two__text">Many desktop publishing packages and web page editors now
                                use Lorem Ipsum as their default model text, and a search.</p>
                            <Link to="/about" className="why-choose-two__btn">Read more <span className="icon-arrow"></span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="why-choose-two__single">
                            <div className="why-choose-two__icon">
                                <img src={require("../../assets/images/icons/why-choose-two-icon-1-2.png")} alt="img" />
                            </div>
                            <h4 className="why-choose-two__title"><Link to="/about">Maximum Security</Link></h4>
                            <p className="why-choose-two__text">Many desktop publishing packages and web page editors now
                                use Lorem Ipsum as their default model text, and a search.</p>
                            <Link to="/about" className="why-choose-two__btn">Read more <span className="icon-arrow"></span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="why-choose-two__single">
                            <div className="why-choose-two__icon">
                                <img src={require("../../assets/images/icons/why-choose-two-icon-1-3.png")} alt="img" />
                            </div>
                            <h4 className="why-choose-two__title"><Link to="/about">24x7 Technical Support</Link></h4>
                            <p className="why-choose-two__text">Many desktop publishing packages and web page editors now
                                use Lorem Ipsum as their default model text, and a search.</p>
                            <Link to="/about" className="why-choose-two__btn">Read more <span className="icon-arrow"></span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Whychoose