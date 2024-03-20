import React from 'react'

const Whychoose = () => {
  return (
    <section className="why-choose-one">
			<div className="why-choose-one__bg"
				style={{backgroundImage: "url(assets/images/background/why-choose-one-bg.jpg)"}}></div>
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6">
						<div className="why-choose-one__left">
							<div className="why-choose-one__img float-bob-y">
								<img src={require("../../assets/images/resources/why-choose-one-img-1.png")} alt="img" />
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div className="why-choose-one__right">
							<h2 className="why-choose-one__title">Manage your apps with our <br /> award-winning Hostup
							</h2>
							<ul className="list-unstyled why-choose-one__points">
								<li>
									<div className="why-choose-one__icon">
										<span className="icon-control-panel"></span>
									</div>
									<div className="why-choose-one__content">
										<h4 className="why-choose-one__content-title">Control Panel CPanel</h4>
										<p className="why-choose-one__text">The point of using Lorem Ipsum is that it has a
											more look like readable English.</p>
									</div>
								</li>
								<li>
									<div className="why-choose-one__icon">
										<span className="icon-hosting-app"></span>
									</div>
									<div className="why-choose-one__content">
										<h4 className="why-choose-one__content-title">100+ Free Hosting apps</h4>
										<p className="why-choose-one__text">The point of using Lorem Ipsum is that it has a
											more look like readable English.</p>
									</div>
								</li>
								<li>
									<div className="why-choose-one__icon">
										<span className="icon-backups"></span>
									</div>
									<div className="why-choose-one__content">
										<h4 className="why-choose-one__content-title">Automated backups</h4>
										<p className="why-choose-one__text">The point of using Lorem Ipsum is that it has a
											more look like readable English.</p>
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

export default Whychoose