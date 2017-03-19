import React, { Component, PropTypes } from 'react';

class Button extends Component {
	render() {
		return (
			<button className="form-button" type={this.props.type}>{this.props.text}</button>
		)
	}
}

Button.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
}

export default Button
