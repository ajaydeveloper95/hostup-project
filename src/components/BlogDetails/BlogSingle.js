import React from "react";
import { Link } from "react-router-dom";
import BlogSingleImg1 from "../../assets/images/blog/blog-single-img-1.jpg";
import BlogSingleUser1 from "../../assets/images/blog/blog-single-user-img-1-1.jpg";
import PagenationImg1 from "../../assets/images/blog/blog-single-pagenation-img-1.jpg";
import PagenationImg2 from "../../assets/images/blog/blog-single-pagenation-img-2.jpg";
import Comment1 from "../../assets/images/blog/comment-1-1.jpg";
import Comment2 from "../../assets/images/blog/comment-1-2.jpg";
import Comment3 from "../../assets/images/blog/comment-1-3.jpg";
import lp1 from "../../assets/images/blog/lp-1-1.jpg";
import lp2 from "../../assets/images/blog/lp-1-2.jpg";
import lp3 from "../../assets/images/blog/lp-1-3.jpg";
import Sidebarshape2 from "../../assets/images/shapes/sidebar-sale-box-shape-1.png";
import sendMailPHP from "../../assets/inc/sendemail.php";

function BlogSingle() {
  return (
    <section className="blog-single">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="blog-single__left">
              <div className="blog-single__img">
                <img src={BlogSingleImg1} alt="img" />
              </div>
              <div className="blog-single__user-and-date">
                <div className="blog-single__user">
                  <div className="blog-single__user-img">
                    <img src={BlogSingleUser1} alt="img" />
                  </div>
                  <p className="blog-single__user-name">DAN BRADMAN</p>
                </div>
                <p className="blog-single__date">
                  <span className="icon-icon-calender" />
                  22 OCT 2022
                </p>
              </div>
              <h3 className="blog-single__title">
                Various versions have evolved over the years
              </h3>
              <p className="blog-single__text-1">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary.
              </p>
              <p className="blog-single__text-1 blog-single__text-2">
                Making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
              <p className="blog-single__text-1 blog-single__text-3">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend.
              </p>
              <p className="blog-single__text-1 blog-single__text-4">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text.
              </p>
              <div className="blog-single__quote-box">
                <div className="blog-single__quote-icon">
                  <span className="icon-quote-icon" />
                </div>
                <p className="blog-single__quote-text">
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal opposed to using making it look like readable English.
                </p>
              </div>
              <p className="blog-single__text-1 blog-single__text-5">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.
              </p>
              <p className="blog-single__text-1 blog-single__text-6">
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum.
              </p>
              <div className="blog-single__pagenation">
                <div className="blog-single__social-box">
                  <h3 className="blog-single__social-title">Share this post</h3>
                  <ul className="list-unstyled blog-single__social">
                    <li>
                      <Link to="/#">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="blog-single__pagenation-left">
                  <div className="blog-single__pagenation-left-img">
                    <img src={PagenationImg1} alt="img" />
                  </div>
                  <div className="blog-single__pagenation-left-content">
                    <h4 className="blog-single__pagenation-left-title">
                      <Link to="/#">
                        Publishing the packages <br /> and web page
                      </Link>
                    </h4>
                    <div className="blog-single__pagenation-btn">
                      <Link to="/blog-details">
                        <span className="icon-arrow" />
                        Prev Post
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-single__pagenation-right">
                  <div className="blog-single__pagenation-right-content">
                    <h4 className="blog-single__pagenation-right-title">
                      <Link to="/#">
                        Various versions have to <br />
                        evolved over
                      </Link>
                    </h4>
                    <div className="blog-single__pagenation-btn-2">
                      <Link to="/blog-details">
                        Next Post
                        <span className="icon-arrow" />
                      </Link>
                    </div>
                  </div>
                  <div className="blog-single__pagenation-right-img">
                    <img src={PagenationImg2} alt="img" />
                  </div>
                </div>
              </div>
              <div className="blog-single__comment-and-form">
                <div className="comment-one">
                  <h3 className="comment-one__title">3 Comments</h3>
                  <div className="comment-one__single">
                    <div className="comment-one__image">
                      <img src={Comment1} alt="img" />
                    </div>
                    <div className="comment-one__content">
                      <h3>
                        Maria Philps<span>May 7, 2022 - 3.30PM</span>
                      </h3>
                      <p>
                        The majority have suffered alteration in some form, by
                        injected humour.
                      </p>
                      <Link to="/blog-details" className="comment-one__btn">
                        <span className="icon-icon-reply" />
                        reply
                      </Link>
                    </div>
                  </div>
                  <div className="comment-one__single comment-one__single-2">
                    <div className="comment-one__image">
                      <img src={Comment2} alt="img" />
                    </div>
                    <div className="comment-one__content">
                      <h3>
                        John Wick<span>May 7, 2022 - 3.30PM</span>
                      </h3>
                      <p>All the Lorem Ipsum generators on the Internet...</p>
                      <Link to="/blog-details" className="comment-one__btn">
                        <span className="icon-icon-reply" />
                        reply
                      </Link>
                    </div>
                  </div>
                  <div className="comment-one__single">
                    <div className="comment-one__image">
                      <img src={Comment3} alt="img" />
                    </div>
                    <div className="comment-one__content">
                      <h3>
                        Andrew Johns<span>May 7, 2022 - 3.30PM</span>
                      </h3>
                      <p>
                        The majority have suffered alteration in some form, by
                        injected humour.
                      </p>
                      <Link to="/blog-details" className="comment-one__btn">
                        <span className="icon-icon-reply" />
                        reply
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="comment-form">
                  <h3 className="comment-form__title">Post your comments</h3>
                  <form
                    action={sendMailPHP}
                    className="comment-one__form contact-form-validated"
                    noValidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="comment-form__input-box">
                          <input type="text" placeholder="Name" name="name" />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="comment-form__input-box">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="comment-form__input-box">
                          <input
                            type="text"
                            placeholder="Website"
                            name="name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Message (Optional)"
                            defaultValue={""}
                          />
                        </div>
                        <div className="checked-box">
                          <input
                            type="checkbox"
                            name="skipper1"
                            id="skipper"
                            defaultChecked=""
                          />
                          <label htmlFor="skipper">
                            <span />
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                        <div className="comment-form__btn-box">
                          <button
                            type="submit"
                            className="thm-btn comment-form__btn"
                          >
                            <span>
                              Submit
                              <i className="icon-arrow" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="result" />
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
                    backgroundImage: `url(${Sidebarshape2})`,
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

export default BlogSingle;
