import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className="subscribe-one">
                <div className="container">
                    <div className="subscribe-one__inner wow fadeInUp" data-wow-duration="1500ms">
                        <div className="subscribe-one__top">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="subscribe-one__title">Sign up for web hosting today!</div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="subscribe-one__form mc-form" data-url="MC_FORM_URL">
                                        <input type="email" name="EMAIL" placeholder="Enter your email..." />
                                        <button type="submit" className="thm-btn subscribe-one__btn">
                                            <span>
                                                Subscribe
                                                <i className="icon-arrow"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="mc-form__response"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list-unstyled subscribe-one__list">
                                    <li>
                                        <i className="icon-check-circle"></i>
                                        Free domain for 1 year
                                    </li>
                                    <li>
                                        <i className="icon-check-circle"></i>
                                        30-day money-back guarantee
                                    </li>
                                    <li>
                                        <i className="icon-check-circle"></i>
                                        24/7 customer support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-main">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-xl-4 ">
						<div className="footer-widget">
							<div className="footer-widget__logo">
								<Link href="index.html">
									<img src={require("../../assets/images/logo.png")} width="106" height="36" alt="img" />
								</Link>
							</div>
							<p className="footer-widget__text">There are many variations of passages of Lorem Ipsum
								available, but the majority have suffered alteration in some form, by injected humour,
								or randomised words which don't look even slightly believable.
							</p>
							<div className="footer-widget__phone">
								<i className="icon-phone-1 icon"></i>
								<Link href="tel:+180090201000">Helpline - (+1) 800 9020 1000</Link>
							</div>
							<div className="footer-widget__payment">
								<Link href="#"><img src={require("../../assets/images/resources/footer-payment-1.png")}
										alt="footer payment method" /></Link>
								<Link href="#"><img src={require("../../assets/images/resources/footer-payment-2.png")}
										alt="footer payment method" /></Link>
								<Link href="#"><img src={require("../../assets/images/resources/footer-payment-3.png")}
										alt="footer payment method" /></Link>
								<Link href="#"><img src={require("../../assets/images/resources/footer-payment-4.png")}
										alt="footer payment method" /></Link>
								<Link href="#"><img src={require("../../assets/images/resources/footer-payment-5.png")}
										alt="footer payment method" /></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-xl-3">
						<div className="footer-widget footer-widget--services">
							<h3 className="footer-widget__title">Hosting</h3>
							<ul className="list-unstyled footer-widget__nav">
								<li><Link href="shared-hosting.html">Web hosting</Link></li>
								<li><Link href="cloud-hosting.html">Cloud hosting</Link></li>
								<li><Link href="wordpress-hosting.html">WordPress hosting</Link></li>
								<li><Link href="reseller-hosting.html">Reseller hosting</Link></li>
								<li><Link href="vps-hosting.html">VPS hosting</Link></li>
								<li><Link href="dedicated-hosting.html">Dedicated hosting</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6 col-xl-2">
						<div className="footer-widget">
							<h3 className="footer-widget__title">Company</h3>
							<ul className="list-unstyled footer-widget__nav">
								<li><Link href="about.html">About Hostup</Link></li>
								<li><Link href="about.html">Reviews</Link></li>
								<li><Link href="blog.html">Company blog</Link></li>
								<li><Link href="contact.html">Contact us</Link></li>
								<li><Link href="contact.html">Careers</Link></li>
								<li><Link href="about.html">Faq’s</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6 col-xl-3 footer-widget--contact">
						<div className="footer-widget">
							<h3 className="footer-widget__title">Follow us on</h3>
							<ul className="list-unstyled footer-widget__social">
								<li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
								<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
								<li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
								<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
							</ul>
							<h3 className="footer-widget__title">Talk to us</h3>
							<ul className="list-unstyled footer-widget__contact">
								<li>
									<Link href="#">
										<i className="icon-chat"></i>
										Talk via chat
									</Link>
								</li>
								<li>
									<Link href="#">
										<i className="icon-whatsapp"></i>
										Whats app
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>

		<div className="footer-bottom">
			<div className="container">
				<div className="footer-bottom__inner">
					<p><i className="far fa-copyright"></i> Copyright <span className="dynamic-year"></span>
						Hostup. All Rights Reserved</p>
					<ul className="list-unstyled footer-bottom__links">
						<li>
							<Link href="#">Privacy Policy</Link>
						</li>
						<li>
							<Link href="#">Terms & Conditions</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
        </>
    )
}

export default Footer