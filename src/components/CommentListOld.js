import React , { Component, createClass } from 'react';
import Comment from './Comment';

const CommentList = createClass({

	getInitialState() {
		return {
			isOpenComments: false
		}
	},

	render() {
		const commentItems = this.props.comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject} /></li>);

		const toggler = commentItems.length 
					? 
					<a onClick = {this.toggleComments} href = "#">
						{this.state.isOpenComments ? 'Hide comments' : 'Show comments'}
					</a> 
					:
					null;

		const comment = this.state.isOpenComments
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
	},

	toggleComments(ev) {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        });
        ev.preventDefault();
    }

});

