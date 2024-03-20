import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
  return (
    <section className="faq-two">
    <div className="faq-two__bg" style={{backgroundImage: `url(${require("../../assets/images/background/faq-two-bg.jpg")})`}}></div>
    <div className="container">
        <div className="row">
            <div className="col-xl-7 col-lg-6">
                <div className="faq-two__left">
                    <div className="faq-two__img float-bob-y">
                        <img src={require("../../assets/images/resources/faq-two-img-1.png")} alt="img" />
                    </div>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6">
                <div className="faq-two__right">
                    <h3 className="faq-two__title">Explore new games & <br /> entertainment every day</h3>
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                        <div className="accrodion">
                            <div className="accrodion-title">
                                <h4>Play together</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion  active">
                            <div className="accrodion-title">
                                <h4>Beat your own records</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion last-child">
                            <div className="accrodion-title">
                                <h4>Experience the game</h4>
                            </div>
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/about" className="thm-btn faq-two__btn">
                        <span>
                            Play Now
                            <i className="icon-arrow"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Faq