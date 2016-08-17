import React, { Component } from 'react';
import Article from './Article';

export default class ArticleList extends Component {

	render() {
		
		const articleItems = this.props.articles.map(
			articleObject => (
				<li key = {articleObject.id}>
					<Article comments = {articleObject.comments ? articleObject.comments : []} article = {articleObject}/> 
					{/* ощущение, что это условие – костыль. 
					  * Но метод map не работает с объектом, у которого нет свойства comments 
					  * может быть в исходных данных создать это свойство пустым???
					*/}
				</li>));

		return (
	        <ul>
	            {articleItems}
	        </ul>
	    );
	}
	    
}