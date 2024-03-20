import React from 'react'

const WhyChoose = () => {
  return (
    <section className="why-choose-three">
            <div className="why-choose-three__shape-1 float-bob-x">
                <img src={require("../../assets/images/shapes/why-choose-three-shape-1.png")} alt="img" />
            </div>
            <div className="container">
                <div className="why-choose-three__inner">
                    <h3 className="why-choose-three__title">Why choose amazing real-time <br /> experiences</h3>
                    <ul className="why-choose-three__points list-unstyled">
                        <li>
                            <div className="icon">
                                <span className="icon-element-icon"></span>
                            </div>
                            <h3>Interactivity Element</h3>
                            <p>There are many variations offset
                                <br /> wille passages of Lorem Ipsum <br /> alteration to an end.</p>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-artistic-icon"></span>
                            </div>
                            <h3>Artistic Inclination</h3>
                            <p>Many desktop publishing begins <br /> packages and web page editors <br /> default model
                                text.</p>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-viewing-icon"></span>
                            </div>
                            <h3>Viewing System</h3>
                            <p>Various versions have evolved as <br /> over the years, sometimes by <br /> sometimes on
                                purpose.</p>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-tracking-icon"></span>
                            </div>
                            <h3>Tracking System</h3>
                            <p>Handful of model sentence too <br /> structures, to generate Lorem <br /> which looks
                                reasonable.</p>
                        </li>
                    </ul>
                    <div className="why-choose-three__bottom">
                        <div className="why-choose-three__ratting-and-text">
                            <div className="why-choose-three__ratting-box">
                                <div className="why-choose-three__ratting-text">
                                    <div className="why-choose-three__ratting-shape-1">
                                        <img src={require("../../assets/images/shapes/why-choose-three-bottom-ratting-shape.png")}
                                            alt="img" />
                                    </div>
                                    <p>4.7</p>
                                </div>
                                <div className="why-choose-three__ratting-title-box">
                                    <h3 className="why-choose-three__ratting-title">Trustpilot</h3>
                                    <div className="why-choose-three__ratting">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star-half"></span>
                                        <span className="icon-star-half"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="why-choose-three__text-box">
                                <p className="why-choose-three__text count-box">Top Rated <span>4.7/5.0</span> for
                                    Trustpilot by <span className="count-text" data-stop="5450"
                                        data-speed="1500"></span><span>+ clients</span>
                                </p>
                                <p className="why-choose-three__text-2 count-box">on more
                                    than <span className="count-text" data-stop="9600" data-speed="1500"></span>+
                                    projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default WhyChoose