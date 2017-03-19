import React from 'react';
import { Route } from 'react-router';

import App from './App';
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Games from './pages/Games'
import Collection from './pages/Collection'

export default (
	<Route path="/" component={App}>
		<Route path="/collection" component={Collection} />
		<Route path="/games" component={Games} />
		<Route path='/login' component={LogIn} />
		<Route path='/signup' component={SignUp} />
	</Route>
);
