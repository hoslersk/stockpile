import React, { Component } from 'react';

import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'
import FormTitle from '../components/FormTitle'

export default class LogIn extends Component {
	render() {
		return (
			<div className="page-content">
				<Form>
					<FormTitle text="Welcome Back!" />
					<Input
						label="Username"
						name="username"
						type="text"
						required
					/>
					<Input
						label="Password"
						name="password"
						type="password"
						required
					/>
					<Button type="submit" text="Login" />
				</Form>
			</div>
		)
	}
}
