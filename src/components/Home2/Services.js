import React from 'react'
import { Link } from 'react-router-dom'

const Servides = () => {
  return (
    <section className="services-one">
            <div className="services-one__shape-1 float-bob-x">
                <img src={require("../../assets/images/shapes/services-one-shape-1.png")} alt="img" />
            </div>
            <div className="services-one__shape-2 float-bob-y">
                <img src={require("../../assets/images/shapes/services-one-shape-2.png")} alt="img" />
            </div>
            <div className="container">
                <div className="services-one__section-title text-center">
                    <h2 className="services-one__section-title__title">We Provide you World Class <br/> Hosting Services</h2>
                    <p className="services-one__section-title__text">The distracted by the readable content of a page when
                        looking at its layout
                    </p>
                </div>
                <div className="row">
                    
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="services-one__tag">
                                <div className="services-one__tag-icon">
                                    <img src={require("../../assets/images/icons/services-one-tag-icon-1.png")} alt="img" />
                                </div>
                                <p className="services-one__tag-text">MOST POPULAR</p>
                            </div>
                            <div className="services-one__icon">
                                <img src={require("../../assets/images/icons/services-one-1-1.png")} alt="img" />
                            </div>
                            <h3 className="services-one__title"><Link href="wordpress-hosting.html">Web Hosting</Link></h3>
                            <p className="services-one__text">Many desktop publishing packages and webs page editors now use
                                Lorem Ipsum as their default model text.</p>
                            <p className="services-one__bottom-text">Starting @: $2.59/mo</p>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <img src={require("../../assets/images/icons/services-one-1-2.png")} alt="img" />
                            </div>
                            <h3 className="services-one__title"><Link href="shared-hosting.html">Shared Hosting</Link></h3>
                            <p className="services-one__text">Many desktop publishing packages and webs page editors now use
                                Lorem Ipsum as their default model text.</p>
                            <p className="services-one__bottom-text">Starting @: $2.59/mo</p>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <img src={require("../../assets/images/icons/services-one-1-3.png")} alt="img" />
                            </div>
                            <h3 className="services-one__title"><Link href="vps-hosting.html">VPS Hosting</Link></h3>
                            <p className="services-one__text">Many desktop publishing packages and webs page editors now use
                                Lorem Ipsum as their default model text.</p>
                            <p className="services-one__bottom-text">Starting @: $2.59/mo</p>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <img src={require("../../assets/images/icons/services-one-1-4.png")} alt="img" />
                            </div>
                            <h3 className="services-one__title"><Link href="cloud-hosting.html">Cloud Hosting</Link></h3>
                            <p className="services-one__text">Many desktop publishing packages and webs page editors now use
                                Lorem Ipsum as their default model text.</p>
                            <p className="services-one__bottom-text">Starting @: $2.59/mo</p>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="services-one__tag">
                                <div className="services-one__tag-icon">
                                    <img src={require("../../assets/images/icons/services-one-tag-icon-2.png")} alt="img" />
                                </div>
                                <p className="services-one__tag-text">RECOMMENDED</p>
                            </div>
                            <div className="services-one__icon">
                                <img src={require("../../assets/images/icons/services-one-1-5.png")} alt="img" />
                            </div>
                            <h3 className="services-one__title"><Link href="wordpress-hosting.html">WordPress Hosting</Link></h3>
                            <p className="services-one__text">Many desktop publishing packages and webs page editors now use
                                Lorem Ipsum as their default model text.</p>
                            <p className="services-one__bottom-text">Starting @: $2.59/mo</p>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="services-one__icon">
                                <img src={require("../../assets/images/icons/services-one-1-6.png")} alt="img" />
                            </div>
                            <h3 className="services-one__title"><Link href="dedicated-hosting.html">Dedicated Hosting</Link></h3>
                            <p className="services-one__text">Many desktop publishing packages and webs page editors now use
                                Lorem Ipsum as their default model text.</p>
                            <p className="services-one__bottom-text">Starting @: $2.59/mo</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
  )
}

export default Servides