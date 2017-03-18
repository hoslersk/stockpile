import React, { Component } from 'react';

import Navbar from './components/Navbar.js'

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Welcome to Stockpile</h2>
				</div>
				<Navbar />
			</div>
		);
	}
}

export default App;