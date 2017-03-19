import React, { Component, PropTypes } from 'react';

class Input extends Component {
	render() {
		return (
			<div className="form-field">
				<label className="form-label">{this.props.label}</label>
				<input
					className="form-input"
					type={this.props.type}
					name={this.props.name}
					required={this.props.required}
				/>
			</div>
		)
	}
}

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.name,
	required: PropTypes.bool,
}

export default Input
