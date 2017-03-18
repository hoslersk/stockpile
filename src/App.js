import React, { Component } from 'react';

import Navbar from './components/Navbar.js'

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h1>Welcome to Stockpile</h1>
				</div>
				<Navbar />
			</div>
		);
	}
}

export default App;
