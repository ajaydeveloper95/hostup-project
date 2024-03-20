import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <section className="blog-two">
            <div className="container">
                <div className="blog-two__section-title text-center">
                    <h2 className="blog-two__section-title__title">Check out the latest top-notch <br /> stories from the
                        industry</h2>
                    <p className="blog-two__section-title__text">Many desktop publishing packages and web page editors now
                        use Lorem <br /> Ipsum as their default model text.</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src={require("../../assets/images/blog/blog-2-1.png")} alt="img" />
                                        <div className="blog-two__date">
                                            <p><span className="icon-icon-calender"></span>22 OCT 2022</p>
                                        </div>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <h3 className="blog-two__title"><Link to="/blog-details">Handful of model structures</Link>
                                </h3>
                                <p className="blog-two__text">It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div className="blog-two__user-and-date">
                                <div className="blog-two__user">
                                    <div className="blog-two__user-img">
                                        <img src={require("../../assets/images/blog/blog-two-user-img-1-1.jpg")} alt="img" />
                                    </div>
                                    <p className="blog-two__user-name">DAN BRADMAN</p>
                                </div>
                                <p className="blog-two__date-2"><span className="icon-clock-icon"></span>5 MINS READ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src={require("../../assets/images/blog/blog-2-2.png")} alt="img" />
                                        <div className="blog-two__date">
                                            <p><span className="icon-icon-calender"></span>22 OCT 2022</p>
                                        </div>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <h3 className="blog-two__title"><Link to="/blog-details">Majority have suffered
                                    alteration</Link>
                                </h3>
                                <p className="blog-two__text">Many desktop publishing packages and webinar page editors now
                                    use Lorem Ipsum as their default model text.</p>
                            </div>
                            <div className="blog-two__user-and-date">
                                <div className="blog-two__user">
                                    <div className="blog-two__user-img">
                                        <img src={require("../../assets/images/blog/blog-two-user-img-1-2.jpg")} alt="img" />
                                    </div>
                                    <p className="blog-two__user-name">MARK LUCIFER</p>
                                </div>
                                <p className="blog-two__date-2"><span className="icon-clock-icon"></span>5 MINS READ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src={require("../../assets/images/blog/blog-2-3.png")} alt="img" />
                                        <div className="blog-two__date">
                                            <p><span className="icon-icon-calender"></span>22 OCT 2022</p>
                                        </div>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <h3 className="blog-two__title"><Link to="/blog-details">Various versions have
                                    evolved</Link>
                                </h3>
                                <p className="blog-two__text">All the Lorem Ipsum generators on the Internet tend to repeat
                                    predefined chunks as necessary, making this the first true generator.</p>
                            </div>
                            <div className="blog-two__user-and-date">
                                <div className="blog-two__user">
                                    <div className="blog-two__user-img">
                                        <img src={require("../../assets/images/blog/blog-two-user-img-1-3.jpg")} alt="img" />
                                    </div>
                                    <p className="blog-two__user-name">PETER MATHEW</p>
                                </div>
                                <p className="blog-two__date-2"><span className="icon-clock-icon"></span>5 MINS READ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog