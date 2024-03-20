import React from 'react'

const Services = () => {
  return (
    <section className="services-two">
            <div className="container">
                <div className="services-two__section-title text-center">
                    <h2 className="services-two__section-title__title">Web hosting services for <br /> businesses of all sizes
                    </h2>
                    <p className="services-two__section-title__text">The distracted by the readable content of a page when
                        looking at its layout
                    </p>
                </div>
                <div className="row">
                    <div className="col-xl-7">
                        <div className="services-two__left">
                            <div className="services-two__img">
                                <img src={require("../../assets/images/resources/services-two-img-1.jpg")} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="services-two__right">
                            <ul className="list-unstyled services-two__list">
                                <li>
                                    <div className="icon">
                                        <span className="icon-cpaner-reseller"></span>
                                    </div>
                                    <div className="content">
                                        <h4>CPanel Reseller</h4>
                                        <p>The publishing packages and webs page editors now use Ipsum as their default
                                            model text.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-ssl-certificate-2"></span>
                                    </div>
                                    <div className="content">
                                        <h4>SSL Certificate</h4>
                                        <p>The publishing packages and webs page editors now use Ipsum as their default
                                            model text.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-ssd-server"></span>
                                    </div>
                                    <div className="content">
                                        <h4>SSD Server</h4>
                                        <p>The publishing packages and webs page editors now use Ipsum as their default
                                            model text.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-backups"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Daily Backup</h4>
                                        <p>The publishing packages and webs page editors now use Ipsum as their default
                                            model text.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Services