import React, { Component, creatClass } from 'react';
import Article from './Article';
import toggleOpenArticle from '../mixins/toggleOpenArticle';

const ArticleList = creatClass({

	mixins: [toggleOpenArticle],

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
});


export default ArticleList;