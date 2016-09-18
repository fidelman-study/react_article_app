import React , { Component, PropTypes } from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import ComponentCount from './ComponentCount';
import NewComment from './NewComment';

class CommentList extends Component {

	render() {

		const { article, toggleOpen, isOpen } = this.props;
		const comments = article.comments;

		const commentItems = comments.map(commentId => <li key = {commentId}><Comment commentId = {commentId} /></li>);

		const toggler = commentItems.length 
			? 
			<a onClick = {toggleOpen} href = "#">
				{isOpen ? 'Hide comments ' : 'Show comments '}
				<ComponentCount count = {commentItems.length}/>
			</a> 
			:
			<NewComment articleId = {article.id} />;

		const comment = isOpen
					?
					<div>
						<ul>{commentItems}</ul>
						<NewComment articleId = {article.id} />
					</div>
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
	article: PropTypes.object,
	isOpen: PropTypes.bool.isRequired,
	toggleOpen: PropTypes.func.isRequired
};

export default toggleOpen(CommentList);