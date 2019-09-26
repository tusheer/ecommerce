import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/mainContext';

function Header(props) {
	const context = useContext(MainContext);

	const { cart, userId } = context;
	return (
		<div>
			<header class="header-section">
				<div class="header-top">
					<div class="container">
						<div class="row">
							<div class="col-lg-2 text-center text-lg-left">
								<Link to="/" class="site-logo">
									<img src="img/logo.png" alt="" />
								</Link>
							</div>
							<div class="col-xl-6 col-lg-5">
								<form class="header-search-form">
									<input type="text" placeholder="Search on divisima ...." />
									<button>
										<i class="flaticon-search" />
									</button>
								</form>
							</div>
							<div class="col-xl-4 col-lg-5">
								<div class="user-panel">
									<div class="up-item">
										{props.userId ? (
											<React.Fragment>
												{' '}
												<img
													src={props.userId.imageUrl}
													alt="Avatar"
													style={{
														verticalAlign: 'middle',
														width: '30px',
														height: '30px',
														borderRadius: '50%',
														display: 'inline',
													}}
												/>
												<p
													style={{
														display: 'inline',
														marginLeft: '7px',
													}}
												>
													{props.userId.name}{' '}
												</p>
											</React.Fragment>
										) : userId ? (
											<React.Fragment>
												{' '}
												<img
													src={userId.imageUrl}
													alt="Avatar"
													style={{
														verticalAlign: 'middle',
														width: '30px',
														height: '30px',
														borderRadius: '50%',
														display: 'inline',
													}}
												/>
												<p
													style={{
														display: 'inline',
														marginLeft: '7px',
													}}
												>
													{userId.name}{' '}
												</p>
											</React.Fragment>
										) : (
											<React.Fragment>
												<i class="flaticon-profile" />
												<Link to="sign">Sign In or Create Account</Link>
											</React.Fragment>
										)}
									</div>
									<div class="up-item">
										<div class="shopping-card">
											<i class="flaticon-bag" />
											<span>{cart.length}</span>
										</div>
										<Link to="/cart">Shopping Cart</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<nav class="main-navbar">
					<div class="container">
						<ul class="main-menu ">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/women">Women</Link>
							</li>
							<li>
								<Link to="/men">Men</Link>
							</li>
							<li>
								<Link to="/jewlry">
									Jewelry
									<span class="new">New</span>
								</Link>
							</li>
							<li>
								<Link to="/shoes">Shoes</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Header;
