import React, { useContext, useState } from 'react';
import MainContext from '../context/mainContext';

function Card(props) {
	const context = useContext(MainContext);

	const { cartadd } = context;
	const [ love, setLove ] = useState(false);

	return (
		<div class="product-item">
			<div class="pi-pic">
				<img src={props.img} alt={props.name} />
				<div class="pi-links">
					<a
						class="add-card"
						onClick={() => {
							cartadd({ name: props.name, price: props.price, img: props.img });
						}}
					>
						<i class="flaticon-bag" />
						<span style={{ cursor: 'pointer' }}>ADD TO CART</span>
					</a>
					<a class="wishlist-btn" onClick={() => setLove(!love)}>
						{love ? (
							<i class="fa fa-heart" style={{ fontSize: '18px', color: 'red' }} />
						) : (
							<i class="flaticon-heart" />
						)}
					</a>
				</div>
			</div>
			<div class="pi-text">
				<h6>$ {props.price}</h6>
				<p>{props.name}</p>
			</div>
		</div>
	);
}

export default Card;
