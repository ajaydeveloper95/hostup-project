import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <section className="blog-three">
            <div className="blog-three__shape-1 float-bob-y">
                <img src={require("../../assets/images/shapes/blog-three-shape-1.png")} alt="img" />
            </div>
            <div className="blog-three__shape-2 zoominout">
                <img src={require("../../assets/images/shapes/blog-three-shape-2.png")} alt="img" />
            </div>
            <div className="blog-three__shape-3 float-bob-x">
                <img src={require("../../assets/images/shapes/blog-three-shape-3.png")} alt="img" />
            </div>
            <div className="container">
                <div className="blog-three__section-title text-center">
                    <h2 className="blog-three__section-title__title">Latest Gaming news, tips & <br /> tricks, updates</h2>
                    <p className="blog-three__section-title__text">Many desktop publishing packages and web page editors now
                        use Lorem Ipsum</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src={require("../../assets/images/blog/blog-3-1.jpg")} alt="img" />
                                </div>
                                <div className="blog-three__date">
                                    <p><span className="icon-icon-calender"></span>22 OCT 2022</p>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <h3 className="blog-three__title"><Link href="blog-details.html">Handful of model
                                    structures</Link></h3>
                                <p className="blog-three__text">It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div className="blog-three__user-and-date">
                                <div className="blog-three__user">
                                    <div className="blog-three__user-img">
                                        <img src={require("../../assets/images/blog/blog-three-user-img-1-1.jpg")} alt="img" />
                                    </div>
                                    <p className="blog-three__user-name">DAN BRADMAN</p>
                                </div>
                                <p className="blog-three__date-2"><span className="icon-clock-icon"></span>5 MINS READ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src={require("../../assets/images/blog/blog-3-2.jpg")} alt="img" />
                                </div>
                                <div className="blog-three__date">
                                    <p><span className="icon-icon-calender"></span>22 OCT 2022</p>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <h3 className="blog-three__title"><Link href="blog-details.html">Majority have suffered
                                    alteration</Link></h3>
                                <p className="blog-three__text">Many desktop publishing packages and webinar page editors
                                    now use Lorem Ipsum as their default model text.</p>
                            </div>
                            <div className="blog-three__user-and-date">
                                <div className="blog-three__user">
                                    <div className="blog-three__user-img">
                                        <img src={require("../../assets/images/blog/blog-three-user-img-1-2.jpg")} alt="img" />
                                    </div>
                                    <p className="blog-three__user-name">MARK LUCIFER</p>
                                </div>
                                <p className="blog-three__date-2"><span className="icon-clock-icon"></span>5 MINS READ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src={require("../../assets/images/blog/blog-3-3.jpg")} alt="img" />
                                </div>
                                <div className="blog-three__date">
                                    <p><span className="icon-icon-calender"></span>22 OCT 2022</p>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <h3 className="blog-three__title"><Link href="blog-details.html">Various versions have
                                    evolved</Link></h3>
                                <p className="blog-three__text">All the Lorem Ipsum generators on the Internet tend to
                                    repeat predefined chunks as necessary, making this the first true generator.</p>
                            </div>
                            <div className="blog-three__user-and-date">
                                <div className="blog-three__user">
                                    <div className="blog-three__user-img">
                                        <img src={require("../../assets/images/blog/blog-three-user-img-1-3.jpg")} alt="img" />
                                    </div>
                                    <p className="blog-three__user-name">PETER MATHEW</p>
                                </div>
                                <p className="blog-three__date-2"><span className="icon-clock-icon"></span>5 MINS READ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog