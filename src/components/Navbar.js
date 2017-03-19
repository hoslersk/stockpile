import React, { Component, PropTypes } from 'react'

import NavItem from './NavItem'

import NAVITEMS from '../constants/navitems'

class Navbar extends Component {

	get navItems() {
		const status = 'signed-out' // will be replaces by state info
		return NAVITEMS[status].map(details => <NavItem details={details} />)
	}

	render() {
		return(
			<ul className="navbar">
				{this.navItems}
			</ul>
		)
	}
}

Navbar.Proptypes = {
	children: PropTypes.node,
	// updateTab: PropTypes.func,
	// tab: PropTypes.string,
}

export default Navbar
