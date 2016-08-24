import React , { Component, createClass } from 'react';
import Comment from './Comment';
import toggleOpen from '../mixins/toggleOpen';


const CommentList = createClass({

	mixins: [toggleOpen],

	render() {
		const commentItems = this.props.comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject} /></li>);

		const toggler = commentItems.length 
					? 
					<a onClick = {this.toggleOpen} href = "#">
						{this.state.isOpen ? 'Hide comments' : 'Show comments'}
					</a> 
					:
					null;

		const comment = this.state.isOpen
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


});

export default CommentList;