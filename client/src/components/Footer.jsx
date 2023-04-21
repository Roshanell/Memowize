const Footer = () => {
	return (
		<footer>
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<h4>About us</h4>
						</div>
						<div class="col-md-4">
							<h4>Information</h4>
							<ul class="address1">
								<li>
									<i class="fa fa-map-marker"></i>Lorem Ipsum 132 xyz Lorem
									Ipsum
								</li>
								<li>
									<i class="fa fa-envelope"></i>
									<a href="mailto:#">info@test.com</a>
								</li>
								<li>
									<i class="fa fa-mobile" aria-hidden="true"></i>{" "}
									<a href="tel:12 34 56 78 90">12 34 56 78 90</a>
								</li>
							</ul>
						</div>
						<div class="col-md-4">
							<h4>Connect</h4>
							<ul class="social-icon">
								<li>
									<a href="#">
										<i class="fa fa-facebook" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-instagram" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-twitter" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="container">
					<div class="row">
						<div class="col-sm-5">
							<p class="copyright text-uppercase">© 2023|</p>
						</div>
						<div class="col-sm-7">
							<ul>
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">About Us</a>
								</li>
								<li>
									<a href="#">Our services</a>
								</li>
								<li>
									<a href="#">Contact Us</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
