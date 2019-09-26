import React from 'react';

function Footer() {
	return (
		<div>
			<section class="footer-section">
				<div class="container">
					<div class="footer-logo text-center">
						<a href="index.html">
							<img src="./img/logo-light.png" alt="" />
						</a>
					</div>
					<div class="row">
						<div class="col-lg-3 col-sm-6">
							<div class="footer-widget about-widget">
								<h2>About</h2>
								<p>
									Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam
									frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.
								</p>
								<img src="img/cards.png" alt="" />
							</div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="footer-widget about-widget">
								<h2>Questions</h2>
								<ul>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">About Us</a>
									</li>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">Track Orders</a>
									</li>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">Returns</a>
									</li>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">Jobs</a>
									</li>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">Shipping</a>
									</li>
								</ul>
								<ul>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">Partners</a>
									</li>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">Bloggers</a>
									</li>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">Support</a>
									</li>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">Terms of Use</a>
									</li>
									<li>
										<a href="https://tusher-protfolio.herokuapp.com">Press</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="footer-widget about-widget">
								<h2>Questions</h2>
								<div class="fw-latest-post-widget">
									<div class="lp-item">
										<div class="lp-thumb set-bg" data-setbg="img/blog-thumbs/1.jpg" />
										<div class="lp-content">
											<h6>what shoes to wear</h6>
											<span>Oct 21, 2018</span>
											<a href="https://tusher-protfolio.herokuapp.com" class="readmore">
												Read More
											</a>
										</div>
									</div>
									<div class="lp-item">
										<div class="lp-thumb set-bg" data-setbg="img/blog-thumbs/2.jpg" />
										<div class="lp-content">
											<h6>trends this year</h6>
											<span>Oct 21, 2019</span>
											<a href="https://tusher-protfolio.herokuapp.com" class="readmore">
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-sm-6">
							<div class="footer-widget contact-widget">
								<h2>Questions</h2>
								<div class="con-info">
									<span>C.</span>
									<p>Tusher Company Ltd </p>
								</div>
								<div class="con-info">
									<span>B.</span>
									<p>1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68 </p>
								</div>
								<div class="con-info">
									<span>T.</span>
									<p>+53 345 7953 32453</p>
								</div>
								<div class="con-info">
									<span>E.</span>
									<p>jaanealamtusher@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="social-links-warp">
					<div class="container">
						<div class="social-links">
							<a href="https://tusher-protfolio.herokuapp.com" class="instagram">
								<i class="fa fa-instagram" />
								<span>instagram</span>
							</a>
							<a href="https://tusher-protfolio.herokuapp.com" class="google-plus">
								<i class="fa fa-google-plus" />
								<span>g+plus</span>
							</a>
							<a href="https://tusher-protfolio.herokuapp.com" class="pinterest">
								<i class="fa fa-pinterest" />
								<span>pinterest</span>
							</a>
							<a href="https://tusher-protfolio.herokuapp.com" class="facebook">
								<i class="fa fa-facebook" />
								<span>facebook</span>
							</a>
							<a href="https://tusher-protfolio.herokuapp.com" class="twitter">
								<i class="fa fa-twitter" />
								<span>twitter</span>
							</a>
							<a href="https://tusher-protfolio.herokuapp.com" class="youtube">
								<i class="fa fa-youtube" />
								<span>youtube</span>
							</a>
							<a href="https://tusher-protfolio.herokuapp.com" class="tumblr">
								<i class="fa fa-tumblr-square" />
								<span>tumblr</span>
							</a>
						</div>

						<p class="text-white text-center mt-5">
							Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with{' '}
							<i class="fa fa-heart-o" aria-hidden="true" /> by{' '}
							<a href="https://tusher-protfolio.herokuapp.com" target="_blank" rel="noopener noreferrer">
								Jane Alam Tusher
							</a>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
