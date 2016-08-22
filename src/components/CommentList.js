import React , { Component } from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {

	render() {
		const commentItems = this.props.comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject} /></li>);

		const toggler = commentItems.length 
			? 
			<a onClick = {this.props.toggleOpen} href = "#">
				{this.props.isOpen ? 'Hide comments' : 'Show comments'}
			</a> 
			:
			null;

		const comment = this.props.isOpen
					?
					<ul>{commentItems}</ul>
					:
					null;

		return (
			<div>
				{toggler}
				{comment}
			</div>
		);
	}
};

export default toggleOpen(CommentList);