import React, { Component, PropTypes } from 'react';
import CSSTransition from 'react-addons-css-transition-group';
import './articleList.css';
import { Link } from 'react-router';


class ArticleList extends Component {

	render() {
		

		const { articles, loading } = this.props;

		if (loading) return <h1>Loading...</h1>;

		const articleItems = articles.map(
			articleObject => (
				<li key = {articleObject.id}>
					<Link to = {`/articles/${articleObject.id}`}>{articleObject.title}</Link>
				</li>));

		return (
	        <CSSTransition
				component = 'ul'
				transitionName = 'article'
				transitionAppear = {true}
				transitionAppearTimeout = {0}
				transitionLeaveTimeout = {300}
				transitionEnterTimeout = {0}
			>
	            {articleItems}
	        </CSSTransition>
	    );
	}   
}


/*
 * при указании openArticleId isRequired - ругается
 * это изз того, что эти свойства образуются после декоратора?
 */
 //ты инициализируешь openArticleId: null. И оно ругаеться, что обязаетльно должна быть строка, а не приходит

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired,
	loading: PropTypes.bool
};



export default ArticleList;
