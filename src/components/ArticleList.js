import React, { Component } from 'react';
import Article from './Article';

export default class ArticleList extends Component {

	render() {
		
		const articleItems = this.props.articles.map(
			articleObject => (
				<li key = {articleObject.id}>
					<Article comments = {articleObject.comments ? articleObject.comments : []} article = {articleObject}/> 
				</li>));

		return (
	        <ul>
	            {articleItems}
	        </ul>
	    );
	}
	    
}