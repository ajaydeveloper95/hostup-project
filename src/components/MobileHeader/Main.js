import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileHeader = ({setactive, active}) => {
    const [homedd, sethomedd] = useState(false)
    const [headerdd, setheaderdd] = useState(false)
    const [hostingdd, sethostingdd] = useState(false)
    const [domaindd, setdomaindd] = useState(false)
    const [pagesdd, setpagesdd] = useState(false)
  return (
    <div className={`mobile-nav__wrapper ${active && "expanded"}`}>
                <div className="mobile-nav__overlay mobile-nav__toggler"></div>
                <div className="mobile-nav__content">
                    <Link onClick={()=>{setactive(false)}} to="#" className="mobile-nav__close mobile-nav__toggler">
                        <span></span>
                        <span></span>
                    </Link>

                    <div className="logo-box">
                        <Link to="/" aria-label="logo image">
                            <img src={require("../../assets/images/logo.png")} width="106" height="36" alt="Hostup" />
                        </Link>
                    </div>
                    <div className="mobile-nav__container"></div>
                    <div className="mobile-nav__container"><ul className="mobile-menu__list">
                        <li className="menu-item-has-children">
                            <Link onClick={()=>sethomedd(!homedd)} to="#">Home<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></Link>
                            {homedd && <ul className="d-block">
                                <li><Link to="/">Home One</Link></li>
                                <li><Link to="/home2">Home Two</Link></li>
                                <li><Link to="/home3">Home Three</Link></li>
                                <li><Link to="/home4">Home Four</Link></li>
                                <li className="menu-item-has-children"><Link to="/" onClick={()=>setheaderdd(!headerdd)}>Header Styles<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></Link>
                                    {headerdd && <ul className="d-block">
                                        <li><Link to="/">Header One</Link></li>
                                        <li><Link to="/home2">Header Two</Link></li>
                                        <li><Link to="/home3">Header Three</Link></li>
                                        <li><Link to="/home4">Header Four</Link></li>
                                    </ul>}
                                </li>
                            </ul>}
                        </li>
                        <li className="current"><Link to="/about">About</Link></li>
                        <li className="menu-item-has-children">
                            <Link onClick={()=>sethostingdd(!hostingdd)} to="#">Hosting<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></Link>
                            {hostingdd && 
                            <ul className="d-block">
                                <li><Link to="/shared-hosting">Shared Hosting</Link></li>
                                <li><Link to="/wordpress-hosting">WordPress Hosting</Link></li>
                                <li><Link to="/vps-hosting">VPS Hosting</Link></li>
                                <li><Link to="/cloud-hosting">Cloud Hosting</Link></li>
                                <li><Link to="/game-hosting">Game Hosting</Link></li>
                                <li><Link to="/reseller-hosting">Reseller Hosting</Link></li>
                                <li><Link to="/dedicated-hosting">Dedicated Hosting</Link></li>
                            </ul>}
                        </li>
                        <li className="menu-item-has-children megamenu">
                            <Link onClick={()=>setdomaindd(!domaindd)} to="#">Domain<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></Link>
                            {domaindd && <ul className="d-block">
                                <li>
                                    <section className="domain-showcase">
                                        <div className="container">
                                            <div className="domain-showcase__inner">

                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <div className="domain-showcase__item">
                                                            <div className="domain-showcase__icon">
                                                                <i className="fa fa-check"></i>
                                                            </div>
                                                            <div className="domain-showcase__title">Easy domain management
                                                            </div>
                                                            <div className="domain-showcase__tagline">The point of using
                                                                Lorem Ipsum is that it has more normal distribution of
                                                                letters, as opposed.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="domain-showcase__item">
                                                            <div className="domain-showcase__icon">
                                                                <i className="fa fa-check"></i>
                                                            </div>
                                                            <div className="domain-showcase__title">Auto-renewal</div>
                                                            <div className="domain-showcase__tagline">The point of using
                                                                Lorem Ipsum is that it has more normal distribution of
                                                                letters, as opposed.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="domain-showcase__item">
                                                            <div className="domain-showcase__icon">
                                                                <i className="fa fa-check"></i>
                                                            </div>
                                                            <div className="domain-showcase__title">Domain lock</div>
                                                            <div className="domain-showcase__tagline">The point of using
                                                                Lorem Ipsum is that it has more normal distribution of
                                                                letters, as opposed.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="domain-showcase__item">
                                                            <div className="domain-showcase__icon">
                                                                <i className="fa fa-check"></i>
                                                            </div>
                                                            <div className="domain-showcase__title">Domain forwarding</div>
                                                            <div className="domain-showcase__tagline">The point of using
                                                                Lorem Ipsum is that it has more normal distribution of
                                                                letters, as opposed.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                            </ul>}
                        </li>
                        <li className="menu-item-has-children">
                            <Link onClick={()=>setpagesdd(!pagesdd)} to="#">Pages<button aria-label="dropdown toggler"><i className="fa fa-angle-down"></i></button></Link>
                            {pagesdd && <ul className="d-block">
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/blog-details">Blog Details</Link></li>
                                <li><Link to="/ssl-certificate">SSL Certificate</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/compare-pricing">Compare Pricing</Link></li>
                                <li><Link to="/data-center">Data Center</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/under-construction">Under Construction</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>}
                        </li>
                    </ul></div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-phone"></i>
                            <Link to="/tel:+8898006802">+ 88 ( 9800 ) 6802</Link>
                        </li>
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link to="/mailto:needhelp@company.com">needhelp@company.com</Link>
                        </li>
                        <li>
                            <i className="fa fa-map-marker-alt"></i>
                            88 Broklyn Golden Road Street <br /> New York. USA
                        </li>
                    </ul>
                    <ul className="mobile-nav__social">
                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                    </ul>

                </div>
            </div>
  )
}

export default MobileHeader