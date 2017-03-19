import React, { Component } from 'react';

import Navbar from './components/Navbar.js'

import './App.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			tab: '',
		}

		this.updateTab = this.updateTab.bind(this)
	}

	updateTab(event) {
		this.setState({tab: event.target.name})
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h1>Stockpile</h1>
				</div>
				{this.props.children}
				<Navbar tab={this.state.tab} updateTab={this.updateTab} />
			</div>
		);
	}
}

export default App;
