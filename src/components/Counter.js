import React, { Component } from 'react';
import store from '../store';
import { increment }  from '../AC/counter';

export default class Counter extends Component {

	state = {
		count: store.getState().count
	};


	componentWillMount() {
		store.subscribe(this.handleStoreChange);
	};

	handleStoreChange = () => {
		this.setState({
			count: store.getState().count
		})
	};

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<a href="#" onClick = {this.handleIncrement}>increment me</a>
			</div>
		);
	};

	handleIncrement = ev => {
		ev.preventDefault();
		const action = increment();
		store.dispatch(action);
	};
}
// чистая функция - когда внутри только пропсы и стейты
// Рендер должен быть чистой функцией