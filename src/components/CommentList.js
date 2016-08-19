import React , { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

	state = {
        isOpenComments: false
	}

	render() {
		const commentItems = this.props.comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject} /></li>);

		return (
			<div>
				{commentItems.length 
					? 
					<a onClick = {this.toggleComments} href = "#">
						{this.state.isOpenComments ? 'Hide comments' : 'Show comments'}
					</a> 
					:
					null
				}
				{this.state.isOpenComments
					?
					<ul>{commentItems}</ul>
					:
					null
				}
			</div>
		);
	}

	toggleComments = (ev) => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        });
        ev.preventDefault();
    };
}