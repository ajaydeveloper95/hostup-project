import React from 'react'
import { Link } from 'react-router-dom'

const Apps = () => {
  return (
    <section className="apps-one">
			<div className="apps-one__bg" style={{backgroundImage: "url(assets/images/background/apps-one-bg.jpg)"}}></div>
			<div className="container">
				<div className="row">
					<div className="col-xl-5">
						<div className="apps-one__left">
							<h3 className="apps-one__title">More than 100+ apps and integrations designed to make life
								easier
							</h3>
							<p className="apps-one__text">The printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a
								galley of type and scrambled.</p>
							<Link to="/about" className="thm-btn apps-one__btn">
								<span>
									Read more
									<i className="icon-arrow"></i>
								</span>
							</Link>
						</div>
					</div>
					<div className="col-xl-7">
						<div className="apps-one__right">
							<ul className="list-unstyled apps-one__list">
								<li>
									<div className="apps-one__logo">
										<img src={require("../../assets/images/resources/apps-one-logo-1-1.png")} alt="img" />
									</div>
								</li>
								<li>
									<div className="apps-one__logo">
										<img src={require("../../assets/images/resources/apps-one-logo-1-2.png")} alt="img" />
									</div>
								</li>
							</ul>
							<ul className="list-unstyled apps-one__list apps-one__list--two">
								<li>
									<div className="apps-one__logo">
										<img src={require("../../assets/images/resources/apps-one-logo-1-3.png")} alt="img" />
									</div>
								</li>
								<li>
									<div className="apps-one__logo">
										<img src={require("../../assets/images/resources/apps-one-logo-1-4.png")} alt="img" />
									</div>
								</li>
								<li>
									<div className="apps-one__logo">
										<img src={require("../../assets/images/resources/apps-one-logo-1-5.png")} alt="img" />
									</div>
								</li>
							</ul>
							<ul className="list-unstyled apps-one__list apps-one__list--three">
								<li>
									<div className="apps-one__logo">
										<img src={require("../../assets/images/resources/apps-one-logo-1-6.png")} alt="img" />
									</div>
								</li>
								<li>
									<div className="apps-one__logo">
										<img src={require("../../assets/images/resources/apps-one-logo-1-7.png")} alt="img" />
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

export default Apps