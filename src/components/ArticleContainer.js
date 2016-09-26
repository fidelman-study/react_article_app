import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Article from './Article';
import { loadArticlesById } from '../AC/articles';

class ArticleContainer extends  Component {

    static propTypes = {
      articleId: PropTypes.string.isRequired
    };

    componentDidMount() {
        const { article, loadArticlesById, articleId } = this.props;
        if(!article || !article.loaded) loadArticlesById('/api/article', articleId);
    }


    render() {
        return(
            <div>
                <Article article = {this.props.article} isOpen={true}/>
            </div>

        );
    }

}

export default connect((state, props) => ({
    article: state.articles.getIn(['entities', props.articleId]),
    loaded: state.articles.get('loaded')
}), {
    loadArticlesById
})(ArticleContainer);

