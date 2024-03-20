import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <section className="blog-one">
			<div className="container">
				<div className="blog-one__section-title text-center">
					<h2 className="blog-one__section-title__title">Check out the latest top-notch <br /> stories from the
						industry
					</h2>
					<p className="blog-one__section-title__text">Many desktop publishing packages and web page editors now
						use Lorem <br /> Ipsum as their default model text.
					</p>
				</div>
				<div className="row">
					<div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
						<div className="blog-one__single">
							<div className="blog-one__img">
								<img src={require("../../assets/images/blog/blog-1-1.png")} alt="img" />
							</div>
							<div className="blog-one__content">
								<div className="blog-one__user-and-date">
									<div className="blog-one__user">
										<div className="blog-one__user-img">
											<img src={require("../../assets/images/blog/blog-one-user-img-1-1.jpg")} alt="img" />
										</div>
										<p className="blog-one__user-name">DAN BRADMAN</p>
									</div>
									<p className="blog-one__date">22 OCT 2022</p>
								</div>
								<h3 className="blog-one__title"><Link to="/blog-details">Handful of model structures</Link>
								</h3>
								<p className="blog-one__text">If you are going to use a passage of Lorem Ipsum
									be sure there isn't anything embarrassing.</p>
								<Link to="/blog-details" className="blog-one__btn">Read more <span
										className="icon-arrow"></span></Link>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
						<div className="blog-one__single">
							<div className="blog-one__img">
								<img src={require("../../assets/images/blog/blog-1-2.png")} alt="img" />
							</div>
							<div className="blog-one__content">
								<div className="blog-one__user-and-date">
									<div className="blog-one__user">
										<div className="blog-one__user-img">
											<img src={require("../../assets/images/blog/blog-one-user-img-1-2.jpg")} alt="img" />
										</div>
										<p className="blog-one__user-name">DAN BRADMAN</p>
									</div>
									<p className="blog-one__date">22 OCT 2022</p>
								</div>
								<h3 className="blog-one__title"><Link to="/blog-details">Repeat predefined chunks</Link>
								</h3>
								<p className="blog-one__text">If you are going to use a passage of Lorem Ipsum
									be sure there isn't anything embarrassing.</p>
								<Link to="/blog-details" className="blog-one__btn">Read more <span
										className="icon-arrow"></span></Link>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
						<div className="blog-one__single">
							<div className="blog-one__img">
								<img src={require("../../assets/images/blog/blog-1-3.png")} alt="img" />
							</div>
							<div className="blog-one__content">
								<div className="blog-one__user-and-date">
									<div className="blog-one__user">
										<div className="blog-one__user-img">
											<img src={require("../../assets/images/blog/blog-one-user-img-1-3.jpg")} alt="img" />
										</div>
										<p className="blog-one__user-name">DAN BRADMAN</p>
									</div>
									<p className="blog-one__date">22 OCT 2022</p>
								</div>
								<h3 className="blog-one__title"><Link to="/blog-details">First true generator on the
										Internet
									</Link>
								</h3>
								<p className="blog-one__text">If you are going to use a passage of Lorem Ipsum
									be sure there isn't anything embarrassing.</p>
								<Link to="/blog-details" className="blog-one__btn">Read more <span
										className="icon-arrow"></span></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Blog