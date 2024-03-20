import React from 'react'

const Contact = () => {
  return (
    <section className="contact-two">
            <div className="contact-two__bg" style={{backgroundImage: `url(${require("../../assets/images/background/contact-two-bg.png")})`}}>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="contact-two__left">
                            <div className="contact-two__section-title text-left">
                                <h2 className="contact-two__section-title__title">Stay up to date with latest <br /> arrivals
                                    now
                                </h2>
                                <p className="contact-two__section-title__text">There are many variations of passages of
                                    Lorem
                                    Ipsum available, but <br /> words which don't look even slightly believable.</p>
                            </div>
                            <div className="contact-two__platform-box">
                                <ul className="contact-two__platform-list contact-two__platform-list-1 list-unstyled">
                                    <li>
                                        <div className="contact-two__platform-img">
                                            <img src={require("../../assets/images/resources/platform-1-1.png")} alt="img" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-two__platform-img">
                                            <img src={require("../../assets/images/resources/platform-1-2.png")} alt="img" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-two__platform-img">
                                            <img src={require("../../assets/images/resources/platform-1-3.png")} alt="img" />
                                        </div>
                                    </li>
                                </ul>
                                <ul className="contact-two__platform-list list-unstyled">
                                    <li>
                                        <div className="contact-two__platform-img">
                                            <img src={require("../../assets/images/resources/platform-1-4.png")} alt="img" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-two__platform-img">
                                            <img src={require("../../assets/images/resources/platform-1-5.png")} alt="img" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-two__platform-img">
                                            <img src={require("../../assets/images/resources/platform-1-6.png")} alt="img" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-two__right">
                            <div className="contact-two__form-box">
                                <form action="assets/inc/sendemail.php" className="contact-two__form contact-form-validated"
                                    novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-two__input-box">
                                                <input type="text" placeholder="Name" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-two__input-box">
                                                <input type="email" placeholder="Email" name="email" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-two__input-box">
                                                <input type="text" placeholder="Birthdate" name="phone" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-two__input-box">
                                                <div className="contact-two__showing-sort">
                                                    <select className="selectpicker" aria-label="Default select example">
                                                        <option selected>Country</option>
                                                        <option value="1">Usa</option>
                                                        <option value="2">Eng</option>
                                                        <option value="3">Fra</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact-two__input-box text-message-box">
                                                <textarea name="message" placeholder="Message (Optional)"></textarea>
                                            </div>
                                            <div className="contact-two__btn-box">
                                                <button type="submit" className="thm-btn contact-two__btn"><span>
                                                        Submit
                                                        <i className="icon-arrow"></i>
                                                    </span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact