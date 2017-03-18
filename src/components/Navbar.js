import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router';

class Navbar extends Component {
	render() {
		return(
			<ul className="navbar">
				<li className="navitem">Home</li>
				<li className="navitem">Collection</li>
				<li className="navitem">Games</li>
				<li className="navitem">Log In</li>
			</ul>
		)
	}
}

Navbar.Proptypes = {
	updateTab: PropTypes.func,
	tab: PropTypes.string,
}

export default Navbar
