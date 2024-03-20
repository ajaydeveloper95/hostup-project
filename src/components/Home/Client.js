import React from 'react'

const Client = () => {
    return (
        <>
            <section className="client-logo">
                <div className="container">
                    <ul className="list-unstyled client-logo__list">
                        <li>
                            <div className="client-logo__single">
                                <div className="client-logo__img">
                                    <img src={require("../../assets/images/resources/client-logo-1-1.png")} alt="img" />
                                </div>
                                <div className="client-logo__rating-box">
                                    <div className="client-logo__rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p className="client-logo__point">(4.9/5)</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="client-logo__single">
                                <div className="client-logo__img">
                                    <img src={require("../../assets/images/resources/client-logo-1-2.png")} alt="img" />
                                </div>
                                <div className="client-logo__rating-box">
                                    <div className="client-logo__rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                    </div>
                                    <p className="client-logo__point">(4.3/5)</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="client-logo__single">
                                <div className="client-logo__img">
                                    <img src={require("../../assets/images/resources/client-logo-1-3.png")} alt="img" />
                                </div>
                                <div className="client-logo__rating-box">
                                    <div className="client-logo__rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                    </div>
                                    <p className="client-logo__point">(4.5/5)</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="client-logo__single">
                                <div className="client-logo__img">
                                    <img src={require("../../assets/images/resources/client-logo-1-4.png")} alt="img" />
                                </div>
                                <div className="client-logo__rating-box">
                                    <div className="client-logo__rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <p className="client-logo__point">(4.8/5)</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Client