import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/mainContext';
import Card from './card';

function Cart() {
	const context = useContext(MainContext);
	const [ wo, setWo ] = useState([]);
	const { cart, women } = context;

	useEffect(() => {
		const tusher = women.slice(0, 4);
		setWo([ ...tusher ]);
	}, []);

	return (
		<div>
			<div class="page-top-info">
				<div class="container">
					<h4>Your cart</h4>
					<div class="site-pagination">
						<a href="">Home</a> /
						<a href="">Your cart</a>
					</div>
				</div>
			</div>

			<section class="cart-section spad">
				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<div class="cart-table">
								{cart.length > 0 ? (
									<React.Fragment>
										<h3>Your Cart</h3>
										<div class="cart-table-warp">
											<table>
												<thead>
													<tr>
														<th class="product-th">Product</th>
														<th class="quy-th">Quantity</th>
														<th class="size-th">SizeSize</th>
														<th class="total-th">Price</th>
													</tr>
												</thead>
												<tbody>
													{cart.map((d) => {
														return (
															<tr key={d.name}>
																<td class="product-col">
																	<img src={d.img} alt={d.name} />
																	<div class="pc-title">
																		<h4>{d.name}</h4>
																		<p>$ {d.price}</p>
																	</div>
																</td>
																<td class="quy-col">
																	<div class="quantity">
																		<div class="pro-qty">
																			<input type="text" value="1" />
																		</div>
																	</div>
																</td>
																<td class="size-col">
																	<h4>Size M</h4>
																</td>
																<td class="total-col">
																	<h4>${d.price}</h4>
																</td>
															</tr>
														);
													})}
												</tbody>
											</table>
										</div>
										<div class="total-cost">
											<h6>
												Total
												<span>
													${cart.reduce((current, data) => {
														return current + data.price;
													}, 0)}
												</span>
											</h6>
										</div>
									</React.Fragment>
								) : (
									<h3>Your Cart is Empty</h3>
								)}
							</div>
						</div>
						<div class="col-lg-4 card-right">
							<form class="promo-code-form">
								<input type="text" placeholder="Enter promo code" />
								<button>Submit</button>
							</form>
							<Link to="/checkout" class="site-btn">
								Proceed to checkout
							</Link>
							<Link to="/" class="site-btn sb-dark">
								Continue shopping
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section class="related-product-section">
				<div class="container">
					<div class="section-title text-uppercase">
						<h2>Continue Shopping</h2>
					</div>
					<div class="row">
						{wo.map((d) => {
							return (
								<div class="col-lg-3 col-sm-6" key={d.name}>
									<Card img={d.img} name={d.name} price={d.price} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Cart;
