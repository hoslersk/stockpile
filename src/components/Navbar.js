import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';

class Navbar extends Component {
	render() {
		return(
			<ul className="navbar">
				<li className="navitem">
					<Link to="/" name="home">Home</Link>
				</li>
				<li className="navitem">
					<Link to="/collection" name="collection">Collection</Link>
				</li>
				<li className="navitem">
					<Link to="/games" name="games">Games</Link>
				</li>
				<li className="navitem">
					<Link to="/login" name="login">Log In</Link>
				</li>
				<li className="navitem">
					<Link to="/signup" name="signup">Sign Up</Link>
				</li>
			</ul>
		)
	}
}

Navbar.Proptypes = {
	updateTab: PropTypes.func,
	tab: PropTypes.string,
}

export default Navbar
