import React , { Component, PropTypes } from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import ComponentCount from './ComponentCount';


class CommentList extends Component {

	render() {
		const commentItems = this.props.comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject} /></li>);

		const toggler = commentItems.length 
			? 
			<a onClick = {this.props.toggleOpen} href = "#">
				{this.props.isOpen ? 'Hide comments ' : 'Show comments '}
				<ComponentCount count = {commentItems.length}/>
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

CommentList.propTypes = {
	comments: PropTypes.array,
	isOpen: PropTypes.bool.isRequired,
	toggleOpen: PropTypes.func.isRequired
};

export default toggleOpen(CommentList);