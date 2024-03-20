import React from 'react'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <section className="feature-one">
			<div className="container">
				<h2 className="feature-one__sec-title">Grow your website faster by <br /> using Hostup
				</h2>
				<ul className="list-unstyled feature-one__list">
					<li>
						<div className="feature-one__single">
							<div className="feature-one__icon">
								<img src={require("../../assets/images/icons/feature-one-icon-1-1.png")} alt="img" />
							</div>
							<h3 className="feature-one__title"><Link to="/about">Performance Security</Link></h3>
							<p className="feature-one__text">There are many variations offset
								wille passages of Lorem Ipsum alteration to an end.</p>
						</div>
					</li>
					<li>
						<div className="feature-one__single">
							<div className="feature-one__icon">
								<img src={require("../../assets/images/icons/feature-one-icon-1-2.png")} alt="img" />
							</div>
							<h3 className="feature-one__title"><Link to="/about">Optimized Hosting</Link></h3>
							<p className="feature-one__text">There are many variations offset
								wille passages of Lorem Ipsum alteration to an end.</p>
						</div>
					</li>
					<li>
						<div className="feature-one__single">
							<div className="feature-one__icon">
								<img src={require("../../assets/images/icons/feature-one-icon-1-3.png")} alt="img" />
							</div>
							<h3 className="feature-one__title"><Link to="/about">11 Data Centers</Link></h3>
							<p className="feature-one__text">There are many variations offset
								wille passages of Lorem Ipsum alteration to an end.</p>
						</div>
					</li>
					<li>
						<div className="feature-one__single">
							<div className="feature-one__icon">
								<img src={require("../../assets/images/icons/feature-one-icon-1-4.png")} alt="img" />
							</div>
							<h3 className="feature-one__title"><Link to="/about">Technical Support</Link></h3>
							<p className="feature-one__text">There are many variations offset
								wille passages of Lorem Ipsum alteration to an end.</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
  )
}

export default Feature