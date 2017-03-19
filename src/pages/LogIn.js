import React, { Component } from 'react';

export default class LogIn extends Component {
	render() {
		return (
			<div className="page-content">
				<form className="login-form">
					<div className="form-title">Welcome Back!</div>
					<div className="form-field">
						<label className="form-label">Username</label>
						<input
							className="form-input"
							type="text"
							name="username"
							required
						/>
					</div>

					<div className="form-field">
						<label className="form-label">Password</label>
						<input
							className="form-input"
							type="password"
							name="password"
							required
						/>
					</div>

					<button className="form-button" type="submit">Login</button>
				</form>
			</div>
		)
	}
}
