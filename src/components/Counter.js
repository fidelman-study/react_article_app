import React, { Component } from 'react';
import { increment }  from '../AC/counter';
import { connect } from 'react-redux';

class Counter extends Component {

	render() {
		return (
			<div>
				<h1>{this.props.count}</h1>
				<a href="#" onClick = {this.handleIncrement}>increment me</a>
			</div>
		);
	};

	handleIncrement = ev => {
		ev.preventDefault();
		this.props.wrappedIncrement();
	};
}
// чистая функция - когда внутри только пропсы и стейты
// Рендер должен быть чистой функцией

export default connect((state) => {
	const { count } = state;
	return { count };
}, {
	wrappedIncrement: increment
})(Counter);