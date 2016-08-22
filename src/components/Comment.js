import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {

	render() {
		
		const { comment } = this.props;

		return (
			<div>
				<h3>{comment.user}</h3>
				<p>{comment.text}</p>
			</div>
		);
	}
};

Comment.propTypes = {
	comment: PropTypes.shape({
		user: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	}).isRequired
};
