import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';

class NavItem extends Component {
	render() {
		return(
			<li
				className={`navitem${this.props.tab === this.props.details.name ? '-active' : ''}`}
				onClick={this.props.updateTab}
			>
				<Link to={this.props.details.link} name={this.props.details.name}>{this.props.details.text}</Link>
			</li>
		)
	}
}

NavItem.Proptypes = {
	updateTab: PropTypes.func,
	tab: PropTypes.string,
	details: PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string,
		name: PropTypes.string,
	})
}

export default NavItem
