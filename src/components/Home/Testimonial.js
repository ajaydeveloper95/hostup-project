import React from 'react'

const Testimonial = () => {
  return (
    <section className="testimonial-one">
			<div className="testimonial-one__shape-1 float-bob-y">
				<img src="assets/images/shapes/testimonial-one-shape-1.png" alt="img" />
			</div>
			<div className="testimonial-one__shape-2 float-bob-x">
				<img src="assets/images/shapes/testimonial-one-shape-2.png" alt="img" />
			</div>
			<div className="container">
				<div className="testimonial-one__inner">
					<h3 className="testimonial-one__title">We love our customers our <br /> customers love us
					</h3>
					<div className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel" data-owl-options='{
						"loop": true,
						"autoplay": true,
						"margin": 30,
						"nav": true,
						"dots": false,
						"smartSpeed": 500,
						"autoplayTimeout": 10000,
						"navText": ["<span className=\"icon-arrow\"></span>","<span className=\"icon-arrow\"></span>"],
						"responsive": {
							"0": {
								"items": 1
							},
							"768": {
								"items": 2
							},
							"992": {
								"items": 3
							},
							"1320": {
								"items": 4
							}
						}
					}'>
						
						<div className="item">
							<div className="testimonial-one__single">
								<div className="testimonial-one__content-box">
									<p className="testimonial-one__text">“Long established fact that a reader will be
										distracted
										by the <span>readable content</span> of a page when looking at its layout. The
										point of using
										Lorem Ipsum.”</p>
									<div className="testimonial-one__rating-and-quote-box">
										<div className="testimonial-one__rating">
											<div className="testimonial-one__rating-logo">
												<img src={require("../../assets/images/resources/testimonial-logo.png")} alt="img" />
											</div>
											<div className="testimonial-one__rating-star">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="far fa-star"></i>
											</div>
										</div>
										<div className="testimonial-one__quote">
											<img src={require("../../assets/images/icons/quote-icon.png")} alt="img" />
										</div>
									</div>
								</div>
								<div className="testimonial-one__client-info">
									<div className="testimonial-one__client-img">
										<img src={require("../../assets/images/testimonial/testimonial-1-1.png")} alt="img" />
									</div>
									<div className="testimonial-one__client-content">
										<h3 className="testimonial-one__name">Martin Jerald D</h3>
										<p className="testimonial-one__sub-title">Web Developer, California</p>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="item">
							<div className="testimonial-one__single">
								<div className="testimonial-one__content-box">
									<p className="testimonial-one__text">““All the Lorem Ipsum generators on the
										<span>Internet tend</span> to repeat predefined chunks as necessary, making this
										the first true generator on the Internet. It uses a dictionary of over 200 Latin
										words, There are many variations of passages of Lorem Ipsum available.”</p>
									<div className="testimonial-one__rating-and-quote-box">
										<div className="testimonial-one__rating">
											<div className="testimonial-one__rating-logo">
												<img src={require("../../assets/images/resources/testimonial-logo.png")} alt="img" />
											</div>
											<div className="testimonial-one__rating-star">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="far fa-star"></i>
											</div>
										</div>
										<div className="testimonial-one__quote">
											<img src={require("../../assets/images/icons/quote-icon.png")} alt="img" />
										</div>
									</div>
								</div>
								<div className="testimonial-one__client-info">
									<div className="testimonial-one__client-img">
										<img src={require("../../assets/images/testimonial/testimonial-1-2.png")} alt="img" />
									</div>
									<div className="testimonial-one__client-content">
										<h3 className="testimonial-one__name">John Bradshaw</h3>
										<p className="testimonial-one__sub-title">Entrepreneur, Sydney</p>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="item">
							<div className="testimonial-one__single">
								<div className="testimonial-one__content-box">
									<p className="testimonial-one__text">“Making this the <span>first true generator</span>
										on the
										Internet. It uses a dictionary of over 200 Latin words there are many
										variations.”</p>
									<div className="testimonial-one__rating-and-quote-box">
										<div className="testimonial-one__rating">
											<div className="testimonial-one__rating-logo">
												<img src={require("../../assets/images/resources/testimonial-logo.png")} alt="img" />
											</div>
											<div className="testimonial-one__rating-star">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="far fa-star"></i>
											</div>
										</div>
										<div className="testimonial-one__quote">
											<img src={require("../../assets/images/icons/quote-icon.png")} alt="img" />
										</div>
									</div>
								</div>
								<div className="testimonial-one__client-info">
									<div className="testimonial-one__client-img">
										<img src={require("../../assets/images/testimonial/testimonial-1-3.png")} alt="img" />
									</div>
									<div className="testimonial-one__client-content">
										<h3 className="testimonial-one__name">John Asle</h3>
										<p className="testimonial-one__sub-title">Entrepreneur</p>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="item">
							<div className="testimonial-one__single">
								<div className="testimonial-one__content-box">
									<p className="testimonial-one__text">“Long established fact that a reader will be
										distracted by the <span>readable content</span> of a page when looking at its
										layout. The point of using Lorem Ipsum.”</p>
									<div className="testimonial-one__rating-and-quote-box">
										<div className="testimonial-one__rating">
											<div className="testimonial-one__rating-logo">
												<img src={require("../../assets/images/resources/testimonial-logo.png")} alt="img" />
											</div>
											<div className="testimonial-one__rating-star">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="far fa-star"></i>
											</div>
										</div>
										<div className="testimonial-one__quote">
											<img src={require("../../assets/images/icons/quote-icon.png")} alt="img" />
										</div>
									</div>
								</div>
								<div className="testimonial-one__client-info">
									<div className="testimonial-one__client-img">
										<img src={require("../../assets/images/testimonial/testimonial-1-4.png")} alt="img" />
									</div>
									<div className="testimonial-one__client-content">
										<h3 className="testimonial-one__name">Martin Jerald D</h3>
										<p className="testimonial-one__sub-title">Web Developer, California</p>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="item">
							<div className="testimonial-one__single">
								<div className="testimonial-one__content-box">
									<p className="testimonial-one__text">“Long established fact that a reader will be
										distracted
										by the <span>readable content</span> of a page when looking at its layout. The
										point of using
										Lorem Ipsum.”</p>
									<div className="testimonial-one__rating-and-quote-box">
										<div className="testimonial-one__rating">
											<div className="testimonial-one__rating-logo">
												<img src={require("../../assets/images/resources/testimonial-logo.png")} alt="img" />
											</div>
											<div className="testimonial-one__rating-star">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="far fa-star"></i>
											</div>
										</div>
										<div className="testimonial-one__quote">
											<img src={require("../../assets/images/icons/quote-icon.png")} alt="img" />
										</div>
									</div>
								</div>
								<div className="testimonial-one__client-info">
									<div className="testimonial-one__client-img">
										<img src={require("../../assets/images/testimonial/testimonial-1-1.png")} alt="img" />
									</div>
									<div className="testimonial-one__client-content">
										<h3 className="testimonial-one__name">Martin Jerald D</h3>
										<p className="testimonial-one__sub-title">Web Developer, California</p>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="item">
							<div className="testimonial-one__single">
								<div className="testimonial-one__content-box">
									<p className="testimonial-one__text">““All the Lorem Ipsum generators on the
										<span>Internet tend</span> to repeat predefined chunks as necessary, making this
										the first true generator on the Internet. It uses a dictionary of over 200 Latin
										words, There are many variations of passages of Lorem Ipsum available.”</p>
									<div className="testimonial-one__rating-and-quote-box">
										<div className="testimonial-one__rating">
											<div className="testimonial-one__rating-logo">
												<img src={require("../../assets/images/resources/testimonial-logo.png")} alt="img" />
											</div>
											<div className="testimonial-one__rating-star">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="far fa-star"></i>
											</div>
										</div>
										<div className="testimonial-one__quote">
											<img src={require("../../assets/images/icons/quote-icon.png")} alt="img" />
										</div>
									</div>
								</div>
								<div className="testimonial-one__client-info">
									<div className="testimonial-one__client-img">
										<img src={require("../../assets/images/testimonial/testimonial-1-2.png")} alt="img" />
									</div>
									<div className="testimonial-one__client-content">
										<h3 className="testimonial-one__name">John Bradshaw</h3>
										<p className="testimonial-one__sub-title">Entrepreneur, Sydney</p>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="item">
							<div className="testimonial-one__single">
								<div className="testimonial-one__content-box">
									<p className="testimonial-one__text">“Making this the <span>first true generator</span>
										on the
										Internet. It uses a dictionary of over 200 Latin words there are many
										variations.”</p>
									<div className="testimonial-one__rating-and-quote-box">
										<div className="testimonial-one__rating">
											<div className="testimonial-one__rating-logo">
												<img src={require("../../assets/images/resources/testimonial-logo.png")} alt="img" />
											</div>
											<div className="testimonial-one__rating-star">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="far fa-star"></i>
											</div>
										</div>
										<div className="testimonial-one__quote">
											<img src={require("../../assets/images/icons/quote-icon.png")} alt="img" />
										</div>
									</div>
								</div>
								<div className="testimonial-one__client-info">
									<div className="testimonial-one__client-img">
										<img src={require("../../assets/images/testimonial/testimonial-1-3.png")} alt="img" />
									</div>
									<div className="testimonial-one__client-content">
										<h3 className="testimonial-one__name">John Asle</h3>
										<p className="testimonial-one__sub-title">Entrepreneur</p>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="item">
							<div className="testimonial-one__single">
								<div className="testimonial-one__content-box">
									<p className="testimonial-one__text">“Long established fact that a reader will be
										distracted by the <span>readable content</span> of a page when looking at its
										layout. The point of using Lorem Ipsum.”</p>
									<div className="testimonial-one__rating-and-quote-box">
										<div className="testimonial-one__rating">
											<div className="testimonial-one__rating-logo">
												<img src={require("../../assets/images/resources/testimonial-logo.png")} alt="img" />
											</div>
											<div className="testimonial-one__rating-star">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="far fa-star"></i>
											</div>
										</div>
										<div className="testimonial-one__quote">
											<img src={require("../../assets/images/icons/quote-icon.png")} alt="img" />
										</div>
									</div>
								</div>
								<div className="testimonial-one__client-info">
									<div className="testimonial-one__client-img">
										<img src={require("../../assets/images/testimonial/testimonial-1-4.png")} alt="img" />
									</div>
									<div className="testimonial-one__client-content">
										<h3 className="testimonial-one__name">Martin Jerald D</h3>
										<p className="testimonial-one__sub-title">Web Developer, California</p>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</section>
  )
}

export default Testimonial