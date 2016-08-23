import React, { Component, PropTypes } from 'react';
import Article from './Article';
import toggleOpenArticle from '../decorators/toggleOpenArticle';

class ArticleList extends Component {

	/*
	componentWillMount() {
		console.log('WillMount');
	}

	componentDidMount() {
		console.log('DidMount')
	}

	componentWillReceiveProps(nextProps) {
		console.log('WillReceiveProps')
	}

	*/

	render() {
		

		const { openArticleId, articles, toggleOpenArticle } = this.props;

		const articleItems = articles.map(
			articleObject => (
				<li key = {articleObject.id}>
					<Article 
						comments = {articleObject.comments ? articleObject.comments : []} 
						article = {articleObject} 
						isOpen = {openArticleId === articleObject.id}
						toggleOpen = {toggleOpenArticle(articleObject.id)}
					/> 
				</li>));

		return (
	        <ul>
	            {articleItems}
	        </ul>
	    );
	}   
}


/*
 * при указании openArticleId isRequired - ругается
 * это изз того, что эти свойства образуются после декоратора?
 */

ArticleList.propTypes = {
	articles: PropTypes.array,
	toggleOpenArticle: PropTypes.func.isRequired,
	openArticleId: PropTypes.string
};



export default toggleOpenArticle(ArticleList);