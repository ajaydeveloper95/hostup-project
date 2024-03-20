import React from "react";
import { Link } from "react-router-dom";
import BlogPage1 from "../../assets/images/blog/blog-page-1-1.jpg";
import BlogPage2 from "../../assets/images/blog/blog-page-1-2.jpg";
import BlogPage3 from "../../assets/images/blog/blog-page-1-3.jpg";
import BlogPage4 from "../../assets/images/blog/blog-page-1-4.jpg";
import BlogPage5 from "../../assets/images/blog/blog-page-1-5.jpg";
import BlogPage6 from "../../assets/images/blog/blog-page-1-6.jpg";
import BlogPage7 from "../../assets/images/blog/blog-page-1-7.jpg";
import BlogPage8 from "../../assets/images/blog/blog-page-1-8.jpg";
import BlogUser1 from "../../assets/images/blog/blog-one-user-img-1-1.jpg";
import BlogUser2 from "../../assets/images/blog/blog-one-user-img-1-2.jpg";
import BlogUser3 from "../../assets/images/blog/blog-one-user-img-1-3.jpg";
import lp1 from "../../assets/images/blog/lp-1-1.jpg";
import lp2 from "../../assets/images/blog/lp-1-2.jpg";
import lp3 from "../../assets/images/blog/lp-1-3.jpg";
import sidebarSale1 from "../../assets/images/shapes/sidebar-sale-box-shape-1.png";

function BlogPage() {
  return (
    <section className="blog-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="blog-page__left">
              <div className="row">
                {/* Blog One Single Start */}
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={BlogPage1} alt="img" />
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user-and-date">
                        <div className="blog-one__user">
                          <div className="blog-one__user-img">
                            <img src={BlogUser1} alt="img" />
                          </div>
                          <p className="blog-one__user-name">DAN BRADMAN</p>
                        </div>
                        <p className="blog-one__date">22 OCT 2022</p>
                      </div>
                      <h3 className="blog-one__title">
                        <Link to="/blog-details">
                          Handful of model structures
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        If you are going to use a passage of Lorem Ipsum be sure
                        there isn't anything embarrassing.
                      </p>
                      <Link to="/blog-details" className="blog-one__btn">
                        Read more <span className="icon-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single End */}
                {/* Blog One Single Start */}
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={BlogPage2} alt="img" />
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user-and-date">
                        <div className="blog-one__user">
                          <div className="blog-one__user-img">
                            <img src={BlogUser2} alt="img" />
                          </div>
                          <p className="blog-one__user-name">DAN BRADMAN</p>
                        </div>
                        <p className="blog-one__date">22 OCT 2022</p>
                      </div>
                      <h3 className="blog-one__title">
                        <Link to="/blog-details">
                          Passage of Lorem Ipsum be sure
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        If you are going to use a passage of Lorem Ipsum be sure
                        there isn't anything embarrassing.
                      </p>
                      <Link to="/blog-details" className="blog-one__btn">
                        Read more <span className="icon-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single End */}
                {/* Blog One Single Start */}
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={BlogPage3} alt="img" />
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user-and-date">
                        <div className="blog-one__user">
                          <div className="blog-one__user-img">
                            <img src={BlogUser3} alt="img" />
                          </div>
                          <p className="blog-one__user-name">DAN BRADMAN</p>
                        </div>
                        <p className="blog-one__date">22 OCT 2022</p>
                      </div>
                      <h3 className="blog-one__title">
                        <Link to="/blog-details">If you are going to use</Link>
                      </h3>
                      <p className="blog-one__text">
                        If you are going to use a passage of Lorem Ipsum be sure
                        there isn't anything embarrassing.
                      </p>
                      <Link to="/blog-details" className="blog-one__btn">
                        Read more <span className="icon-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single End */}
                {/* Blog One Single Start */}
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={BlogPage4} alt="img" />
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user-and-date">
                        <div className="blog-one__user">
                          <div className="blog-one__user-img">
                            <img src={BlogUser2} alt="img" />
                          </div>
                          <p className="blog-one__user-name">DAN BRADMAN</p>
                        </div>
                        <p className="blog-one__date">22 OCT 2022</p>
                      </div>
                      <h3 className="blog-one__title">
                        <Link to="/blog-details">
                          Lorem Ipsum be sure there
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        If you are going to use a passage of Lorem Ipsum be sure
                        there isn't anything embarrassing.
                      </p>
                      <Link to="/blog-details" className="blog-one__btn">
                        Read more <span className="icon-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single End */}
                {/* Blog One Single Start */}
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={BlogPage5} alt="img" />
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user-and-date">
                        <div className="blog-one__user">
                          <div className="blog-one__user-img">
                            <img src={BlogPage1} alt="img" />
                          </div>
                          <p className="blog-one__user-name">DAN BRADMAN</p>
                        </div>
                        <p className="blog-one__date">22 OCT 2022</p>
                      </div>
                      <h3 className="blog-one__title">
                        <Link to="/blog-details">
                          Handful of model structures
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        If you are going to use a passage of Lorem Ipsum be sure
                        there isn't anything embarrassing.
                      </p>
                      <Link to="/blog-details" className="blog-one__btn">
                        Read more <span className="icon-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single End */}
                {/* Blog One Single Start */}
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={BlogPage6} alt="img" />
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user-and-date">
                        <div className="blog-one__user">
                          <div className="blog-one__user-img">
                            <img src={BlogUser2} alt="img" />
                          </div>
                          <p className="blog-one__user-name">DAN BRADMAN</p>
                        </div>
                        <p className="blog-one__date">22 OCT 2022</p>
                      </div>
                      <h3 className="blog-one__title">
                        <Link to="/blog-details">Repeat predefined chunks</Link>
                      </h3>
                      <p className="blog-one__text">
                        If you are going to use a passage of Lorem Ipsum be sure
                        there isn't anything embarrassing.
                      </p>
                      <Link to="/blog-details" className="blog-one__btn">
                        Read more <span className="icon-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single End */}
                {/* Blog One Single Start */}
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={BlogPage7} alt="img" />
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user-and-date">
                        <div className="blog-one__user">
                          <div className="blog-one__user-img">
                            <img src={BlogUser3} alt="img" />
                          </div>
                          <p className="blog-one__user-name">DAN BRADMAN</p>
                        </div>
                        <p className="blog-one__date">22 OCT 2022</p>
                      </div>
                      <h3 className="blog-one__title">
                        <Link to="/blog-details">
                          Ipsum be sure there isn't anything
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        If you are going to use a passage of Lorem Ipsum be sure
                        there isn't anything embarrassing.
                      </p>
                      <Link to="/blog-details" className="blog-one__btn">
                        Read more <span className="icon-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single End */}
                {/* Blog One Single Start */}
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={BlogPage8} alt="img" />
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user-and-date">
                        <div className="blog-one__user">
                          <div className="blog-one__user-img">
                            <img src={BlogUser2} alt="img" />
                          </div>
                          <p className="blog-one__user-name">DAN BRADMAN</p>
                        </div>
                        <p className="blog-one__date">22 OCT 2022</p>
                      </div>
                      <h3 className="blog-one__title">
                        <Link to="/blog-details">
                          There isn't anything embarrassing.
                        </Link>
                      </h3>
                      <p className="blog-one__text">
                        If you are going to use a passage of Lorem Ipsum be sure
                        there isn't anything embarrassing.
                      </p>
                      <Link to="/blog-details" className="blog-one__btn">
                        Read more <span className="icon-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single End */}
                <div className="blog-page__pagination">
                  <ul className="pg-pagination list-unstyled">
                    <li className="count">
                      <Link to="/#">1</Link>
                    </li>
                    <li className="count">
                      <Link to="/#">2</Link>
                    </li>
                    <li className="count">
                      <Link to="/#">3</Link>
                    </li>
                    <li className="next">
                      <Link to="/#" aria-label="Next">
                        <span className="icon-arrow" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="sidebar">
              <div className="sidebar__single sidebar__search">
                <form action="#" className="sidebar__search-form">
                  <div className="sidebar__search-form-inner">
                    <input type="search" placeholder="Search..." />
                    <button type="submit">
                      <i className="icon-search-icon" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="sidebar__single sidebar__category">
                <div className="sidebar__title-box">
                  <h3 className="sidebar__title">Categories</h3>
                </div>
                <ul className="sidebar__category-list list-unstyled">
                  <li>
                    <Link to="/blog-details">
                      <i className="icon-arrow-right" />
                      Cloud Hosting <span>(05)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-details">
                      <i className="icon-arrow-right" />
                      Dedicated Hosting <span>(03)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-details">
                      <i className="icon-arrow-right" />
                      WordPress Hosting <span>(06)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-details">
                      <i className="icon-arrow-right" />
                      Reseller Hosting
                      <span>(07)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-details">
                      <i className="icon-arrow-right" />
                      Shared Hosting
                      <span>(08)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-details">
                      <i className="icon-arrow-right" />
                      VPS Hosting
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar__single sidebar__post">
                <div className="sidebar__title-box">
                  <h3 className="sidebar__title">Recent Post</h3>
                </div>
                <ul className="sidebar__post-list list-unstyled">
                  <li>
                    <div className="sidebar__post-image">
                      <img src={lp1} alt="img" />
                    </div>
                    <div className="sidebar__post-content">
                      <h3>
                        <span className="sidebar__post-content-meta">
                          <i className="icon-icon-calender" />
                          22 OCT 2022
                        </span>
                        <Link to="/news-details">
                          Desktop a publishing packages <br /> and web page
                          editors.
                        </Link>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="sidebar__post-image">
                      <img src={lp2} alt="img" />
                    </div>
                    <div className="sidebar__post-content">
                      <h3>
                        <span className="sidebar__post-content-meta">
                          <i className="icon-icon-calender" />
                          22 OCT 2022
                        </span>
                        <Link to="/news-details">
                          Aliquam tellus nulla <br /> sollicitudin at
                        </Link>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="sidebar__post-image">
                      <img src={lp3} alt="img" />
                    </div>
                    <div className="sidebar__post-content">
                      <h3>
                        <span className="sidebar__post-content-meta">
                          <i className="icon-icon-calender" />
                          22 OCT 2022
                        </span>
                        <Link to="/news-details">
                          All the Lorem Ipsum generators <br /> on the Internet.
                        </Link>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sidebar__single sidebar__tags">
                <div className="sidebar__title-box">
                  <h3 className="sidebar__title">Tags</h3>
                </div>
                <div className="sidebar__tags-list">
                  <Link to="/#">Popular Hosting</Link>
                  <Link to="/#">Domain</Link>
                  <Link to="/#">CMS</Link>
                  <Link to="/#">WP Hosting</Link>
                  <Link to="/#">Cloud</Link>
                  <Link to="/#">Hosting</Link>
                </div>
              </div>
              <div className="sidebar__single sidebar__sale-box">
                <div
                  className="sidebar__sale-box-bg float-bob-y"
                  style={{
                    backgroundImage: `url(${sidebarSale1})`,
                  }}
                ></div>
                <h3 className="sidebar__sale-box-title">Winter Sale!</h3>
                <div className="sidebar__sale-box-content-box">
                  <div className="timer-box">
                    <div className="countdown-timer">
                      <div className="default-coundown">
                        <div className="box">
                          <div
                            className="countdown time-countdown-two"
                            data-countdown-time="2023/08/01"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="sidebar__sale-box-text">
                  Get 4 months free before 2023. <br /> End of years savings are
                  live!
                </p>
                <Link to="/login" className="thm-btn sidebar__sale-box__btn">
                  <span>
                    Learn More
                    <i className="icon-arrow" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
