import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';

class NavItem extends Component {
	render() {
		debugger
		return(
			<li className="navitem">
				<Link to={this.props.details.link} name={this.props.details.name}>{this.props.details.text}</Link>
			</li>
		)
	}
}

NavItem.Proptypes = {
	details: PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string,
		name: PropTypes.string,
	})
}

export default NavItem
