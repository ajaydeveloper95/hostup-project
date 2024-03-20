import React from "react";
import { Link } from "react-router-dom";
import RightHostingShape from "../../assets/images/shapes/right-hosting-shape-1.png";
import RightHostingImg1 from "../../assets/images/resources/right-hosting-img-1.png";

function RightHosting() {
  return (
    <section className="right-hosting">
      <div className="right-hosting__shape-1 zoominout">
        <img src={RightHostingShape} alt="img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="right-hosting__left">
              <div className="right-hosting__img float-bob-y">
                <img src={RightHostingImg1} alt="img" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="right-hosting__right">
              <h2 className="right-hosting__title">
                Find the right hosting for <br /> your domain
              </h2>
              <div className="right-hosting__main-content-box">
                <div className="right-hosting__inner tabs-box">
                  <ul className="tab-buttons clearfix list-unstyled">
                    <li data-tab="#VPS-hosting" className="tab-btn active-btn">
                      <div className="icon">
                        <span className="icon-ssd-server" />
                      </div>
                      <div className="content">
                        <h3>VPS Hosting</h3>
                      </div>
                    </li>
                    <li data-tab="#web-hosting" className="tab-btn">
                      <div className="icon">
                        <span className="icon-icon-world" />
                      </div>
                      <div className="content">
                        <h3>Web Hosting</h3>
                      </div>
                    </li>
                    <li data-tab="#cloud-hosting" className="tab-btn">
                      <div className="icon">
                        <span className="icon-cloud-server" />
                      </div>
                      <div className="content">
                        <h3>Cloud Hosting</h3>
                      </div>
                    </li>
                  </ul>
                  <div className="tabs-content">
                    {/*tab*/}
                    <div className="tab active-tab" id="VPS-hosting">
                      <div className="right-hosting__tab-content-box">
                        <p className="right-hosting__text">
                          The Latin professor at Hampden-Sydney College in
                          Virginia, looked up one of the more obscure Latin
                          words.
                        </p>
                        <div className="right-hosting__points-box">
                          <ul className="list-unstyled right-hosting__points">
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>Unlimited websites</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>One-click WordPress installs</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>Free WordPress/cPanel Dashboard</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>Unmetered bandwidth</p>
                              </div>
                            </li>
                          </ul>
                          <ul className="list-unstyled right-hosting__points right-hosting__points--two">
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>
                                  Free SSL certificate{" "}
                                  <span className="icon-icon-error" />
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>
                                  Free domain included{" "}
                                  <span className="icon-icon-error" />
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>
                                  Free dedicated IP{" "}
                                  <span className="icon-icon-error" />
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <Link to="about" className="thm-btn right-hosting__btn">
                          <span>
                            Read more
                            <i className="icon-arrow" />
                          </span>
                        </Link>
                      </div>
                    </div>
                    {/*tab*/}
                    {/*tab*/}
                    <div className="tab" id="web-hosting">
                      <div className="right-hosting__tab-content-box">
                        <p className="right-hosting__text">
                          The Latin professor at Hampden-Sydney College in
                          Virginia, looked up one of the more obscure Latin
                          words.
                        </p>
                        <div className="right-hosting__points-box">
                          <ul className="list-unstyled right-hosting__points">
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>Unlimited websites</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>One-click WordPress installs</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>Free WordPress/cPanel Dashboard</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>Unmetered bandwidth</p>
                              </div>
                            </li>
                          </ul>
                          <ul className="list-unstyled right-hosting__points right-hosting__points--two">
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>
                                  Free SSL certificate{" "}
                                  <span className="icon-icon-error" />
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>
                                  Free domain included{" "}
                                  <span className="icon-icon-error" />
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>
                                  Free dedicated IP{" "}
                                  <span className="icon-icon-error" />
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <Link to="about" className="thm-btn right-hosting__btn">
                          <span>
                            Read more
                            <i className="icon-arrow" />
                          </span>
                        </Link>
                      </div>
                    </div>
                    {/*tab*/}
                    {/*tab*/}
                    <div className="tab" id="cloud-hosting">
                      <div className="right-hosting__tab-content-box">
                        <p className="right-hosting__text">
                          The Latin professor at Hampden-Sydney College in
                          Virginia, looked up one of the more obscure Latin
                          words.
                        </p>
                        <div className="right-hosting__points-box">
                          <ul className="list-unstyled right-hosting__points">
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>Unlimited websites</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>One-click WordPress installs</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>Free WordPress/cPanel Dashboard</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>Unmetered bandwidth</p>
                              </div>
                            </li>
                          </ul>
                          <ul className="list-unstyled right-hosting__points right-hosting__points--two">
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>
                                  Free SSL certificate{" "}
                                  <span className="icon-icon-error" />
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>
                                  Free domain included{" "}
                                  <span className="icon-icon-error" />
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icon-icon-check" />
                              </div>
                              <div className="text">
                                <p>
                                  Free dedicated IP{" "}
                                  <span className="icon-icon-error" />
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <Link to="about" className="thm-btn right-hosting__btn">
                          <span>
                            Read more
                            <i className="icon-arrow" />
                          </span>
                        </Link>
                      </div>
                    </div>
                    {/*tab*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightHosting;
