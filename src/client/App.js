import React, {Component} from 'react';
import HelloWorld from './components/HelloWorld';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: 'Mr. Monty',
		};
	}

	render() {
		return (
			<div>
				<h1> App works ! {this.state.name}</h1>
				<HelloWorld />
			</div>

		);
	}
}
