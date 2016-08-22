import React , { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

	state = {
        isOpen: false
    };

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

	 toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        if (ev) ev.preventDefault();
    }
}

