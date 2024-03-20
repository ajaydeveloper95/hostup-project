import React from 'react'
import { Link } from 'react-router-dom'

const Performance = () => {
  return (
    <section className="max-performance">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="max-performance__left">
                            <div className="max-performance__img float-bob-y">
                                <img src={require("../../assets/images/resources/max-performance-img.png")} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="max-performance__right">
                            <h2 className="max-performance__title-top">Maximize performance with LiteSpeed Web Server
                                technology
                            </h2>
                            <ul className="list-unstyled max-performance__list">
                                <li>
                                    <div className="max-performance__list-left">
                                        <div className="max-performance__icon">
                                            <span className="icon-bandwidth"></span>
                                        </div>
                                        <h4 className="max-performance__title">Unmetered <br/> bandwidth</h4>
                                    </div>
                                    <p className="max-performance__text">The publishing packages and webias <br/> their
                                        default model text.</p>
                                </li>
                                <li>
                                    <div className="max-performance__list-left">
                                        <div className="max-performance__icon">
                                            <span className="icon-security"></span>
                                        </div>
                                        <h4 className="max-performance__title">Advanced <br/> Security</h4>
                                    </div>
                                    <p className="max-performance__text">The publishing packages and webias <br/> their
                                        default model text.</p>
                                </li>
                                <li>
                                    <div className="max-performance__list-left">
                                        <div className="max-performance__icon">
                                            <span className="icon-ssl-certificate"></span>
                                        </div>
                                        <h4 className="max-performance__title">SSL <br/> Certificate</h4>
                                    </div>
                                    <p className="max-performance__text">The publishing packages and webias <br/> their
                                        default model text.</p>
                                </li>
                            </ul>
                            <Link to="/about" className="thm-btn max-performance__btn">
                                <span>
                                    Read more
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

export default Performance