import React, { Component, PropTypes } from 'react';

export default class ComponentCount extends Component {
	render() {
		return (
			<strong>
				{this.props.count}
			</strong>
		);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.count != nextProps.count;
	}
}

ComponentCount.propTypes = {
	count: PropTypes.number
};
