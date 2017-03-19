import React, { Component } from 'react';

import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'
import FormTitle from '../components/FormTitle'

export default class SignUp extends Component {
	render() {
		return (
			<div className="page-content">
				<Form>
					<FormTitle text="Sign Up!" />
					<Input
						label="First Name"
						name="firstname"
						type="text"
						required
					/>
					<Input
						label="Email"
						name="email"
						type="email"
						required
					/>
					<Input
						label="Password"
						name="password"
						type="password"
						required
					/>
					<Input
						label="Confirm Password"
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
