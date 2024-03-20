import React from 'react'

const Domain = () => {
  return (
    <section className="choose-domain-two">
            <div className="choose-domain-two__shape-1 float-bob-y">
                <img src= {require("../../assets/images/shapes/choose-name-two-shape-1.png")} alt="img"/>
            </div>
            <div className="choose-domain-two__shape-2 float-bob-x">
                <img src= {require("../../assets/images/shapes/choose-name-two-shape-2.png")} alt="img"/>
            </div>
            <div className="choose-domain-two__shape-3 zoominout">
                <img src= {require("../../assets/images/shapes/choose-name-two-shape-3.png")} alt="img"/>
            </div>
            <div className="choose-domain-two__shape-4">
                <img src= {require("../../assets/images/shapes/choose-name-two-shape-4.png")} alt="img"/>
            </div>
            <div className="choose-domain-two__shape-5">
                <img src= {require("../../assets/images/shapes/choose-name-two-shape-5.png")} alt="img"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="choose-domain-two__left">
                            <div className="choose-domain-two__img float-bob-y">
                                <img src= {require("../../assets/images/resources/choose-domain-two-img-1.png")} alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="choose-domain-two__right">
                            <h2 className="choose-domain-two__title">Choose from your perfect domain start with</h2>
                            <p className="choose-domain-two__text">The distracted by the readable content of a page when
                                looking
                            </p>
                            <form className="choose-domain-two__form" action="#">
                                <div className="choose-domain-two__input-box">
                                    <input type="text" name="domain" placeholder="Search domain name..." />
                                    <div className="choose-domain-two__name">
                                        <select className="selectpicker">
                                            <option value=".com" selected>.com</option>
                                            <option value=".info">.info </option>
                                            <option value=".net">.net</option>
                                            <option value=".org">.org</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="thm-btn choose-domain-two__btn">
                                    <span>
                                        <i className="icon-search-icon"></i>
                                    </span>
                                </button>
                            </form>
                            <div className="choose-domain-two__bottom">
                                <ul className="list-unstyled choose-domain-two__list">
                                    <li>
                                        <p className="choose-domain-two__type">.com</p>
                                        <p className="choose-domain-two__price">$2.99/Year</p>
                                    </li>
                                    <li>
                                        <p className="choose-domain-two__type">.store</p>
                                        <p className="choose-domain-two__price">$1.99/Year</p>
                                    </li>
                                    <li>
                                        <p className="choose-domain-two__type">.online</p>
                                        <p className="choose-domain-two__price">$3.99/Year</p>
                                    </li>
                                    <li>
                                        <p className="choose-domain-two__type">.co</p>
                                        <p className="choose-domain-two__price">$1.99/Year</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Domain