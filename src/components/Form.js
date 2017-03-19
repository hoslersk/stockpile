import React, { Component } from 'react';

export default class Form extends Component {
	render() {
		return (
			<form className="login-form">
				{this.props.children}
			</form>
		)
	}
}
