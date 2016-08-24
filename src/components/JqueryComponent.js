import React, { Component } from 'react';

export default class JqueryComponent extends Component {

	componentDidMount() {
		console.log(this.refs.container); // Node
		// Внутрь NODE можно обернуть стороннюю библиотеку
	}
	

	render() {

		return (
			<div ref="container">Hello world</div>
		);
	}
}
