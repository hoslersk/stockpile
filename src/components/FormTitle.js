import React, { Component, PropTypes } from 'react';

class FormTitle extends Component {
	render() {
		return (
			<div className="form-title">{this.props.text}</div>
		)
	}
}

FormTitle.propTypes = {
	text: PropTypes.string,
}

export default FormTitle
