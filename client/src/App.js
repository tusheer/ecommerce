import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Home from './components/Home';
import Products from './components/Products';
import Layout from './components/Layout';
import Cetagory from './components/Cetagoty';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Sign from './components/sign';

import StateContext from './context/stateContext';

function App() {
	const [ id, setId ] = useState(null);
	useEffect(() => {
		let items = {};
		items = JSON.parse(localStorage.getItem('userId'));
		setId(items);
	}, []);

	const routes = [
		{ path: '/', name: 'Home', Component: Home },
		{ path: '/men', name: 'Cetagory', Component: Cetagory },
		{ path: '/women', name: 'Cetagory', Component: Cetagory },
		{ path: '/mens', name: 'Cetagory', Component: Cetagory },
		{ path: '/jewlry', name: 'Cetagory', Component: Cetagory },
		{ path: '/shoes', name: 'Cetagory', Component: Cetagory },
		{ path: '/checkout', name: 'Checkout', Component: Checkout },
		{ path: '/products', name: 'Products', Component: Products },
		{ path: '/cart', name: 'Cart', Component: Cart },
		{ path: '/contact', name: 'Contact', Component: Contact },
		{ path: '/sign', name: 'Sign', Component: Sign },
	];

	return (
		<React.Fragment>
			<Router>
				<StateContext>
					<Layout userId={id}>
						<div className="container-tusher">
							{routes.map(({ path, Component }) => (
								<Route key={path} exact path={path}>
									{({ match }) => (
										<CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
											<div className="page">
												<Component path={path} />
											</div>
										</CSSTransition>
									)}
								</Route>
							))}
						</div>
					</Layout>
				</StateContext>
			</Router>
		</React.Fragment>
	);
}

export default App;
