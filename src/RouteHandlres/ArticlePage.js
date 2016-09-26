import React, { Component } from 'react';
import ArticleContainer from '../components/ArticleContainer';

class ArticlePage extends Component {
    render() {

        const { id } = this.props.params;

        return(
            <ArticleContainer key = {id} articleId = {id}/>
        )
    };
};

export default ArticlePage;