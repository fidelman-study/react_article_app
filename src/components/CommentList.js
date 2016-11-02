import React , { Component, PropTypes } from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import ComponentCount from './ComponentCount';
import NewComment from './NewComment';
import { connect } from 'react-redux';
import { loadComments } from '../AC/comment';

class CommentList extends Component {

	componentWillReceiveProps({ isOpen, loadComments, article: {id, commentsLoading, commenstLoaded} }) {
		if(commentsLoading || commenstLoaded) return;
		if (isOpen && !this.props.isOpen) loadComments(id);
	}

	render() {

		const { article, isOpen, toggleOpen } = this.props;
		const { comments, commentsLoaded } = article;


		if (!comments || !comments.length) return <div>No comments yet <NewComment articleId = {article.id}/></div>
		const toggleButton = <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments.
			<ComponentCount count = {comments.length}/>
		</a>;

		if (!isOpen) return <div>{toggleButton}</div>;
		if (!commentsLoaded) return <div>{toggleButton}<h3>Loading...</h3></div>;


		const commentItems = comments.map(commentId => <li key = {commentId}><Comment commentId = {commentId} /></li>);


		return (
			<div>
				{toggleButton}
				<ul>{commentItems}</ul>
				<NewComment articleId = {article.id} />
			</div>
		);
	}
};

CommentList.propTypes = {
	article: PropTypes.object,
	isOpen: PropTypes.bool.isRequired,
	toggleOpen: PropTypes.func.isRequired
};

export default connect(null, {
	loadComments
})(toggleOpen(CommentList));