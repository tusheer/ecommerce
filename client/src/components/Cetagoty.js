import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/mainContext';
import Card from './card';
function Category(props) {
	const context = useContext(MainContext);
	const { women, mens, shoes, jewelry } = context;
	const [ data, setData ] = useState([]);

	const tusher = (data) => {
		let shorna;
		if (data === '/men') {
			shorna = mens;
		} else if (data === '/women') {
			shorna = women;
		} else if (data === '/jewlry') {
			shorna = jewelry;
		} else {
			shorna = shoes;
		}
		return shorna;
	};

	useEffect(() => {
		const data1 = tusher(props.path);
		setData([ ...data1 ]);
	}, []);

	return (
		<div>
			<div className="page-top-info" style={{ backgroundColor: 'white' }}>
				<div className="container">
					<h4>CAtegory PAge</h4>
					<div className="site-pagination">
						<a href="">Home</a> /
						<a href="">Shop</a> /
					</div>
				</div>
			</div>

			<section className="category-section spad" style={{ backgroundColor: '#F8F7F7' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12  order-1 order-lg-2 mb-5 mb-lg-0">
							<div className="row">
								{data.map((d) => {
									return (
										<div className="col-lg-4 col-sm-6" style={{ overflow: 'hidden' }}>
											<Card name={d.name} img={d.img} price={d.price} />
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Category;
