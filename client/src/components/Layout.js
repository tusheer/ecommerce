import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
	return (
		<React.Fragment>
			<Header userId={props.userId} />
			{props.children}
			<Footer />
		</React.Fragment>
	);
}

export default Layout;
