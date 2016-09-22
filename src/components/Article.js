import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';
import toggleOpen from '../decorators/toggleOpen';
import { connect } from 'react-redux'
import { deleteArticle, loadArticlesById } from '../AC/articles'

//Не перегружай компоненты - стоит разнести на Article и CommentList
class Article extends Component {

    componentWillReceiveProps({ isOpen, loadArticlesById, article }) {
        if(isOpen && !this.props.isOpen && !article.loaded) loadArticlesById('/api/article',article.id);
    }

    render() {
        const { comments, article, toggleOpen, isOpen } = this.props;

        if (article.loading) return <h2>Loading...</h2>;

        const body = isOpen ?
            <section>
                {article.text}
                <CommentList article = {article} />
            </section> : null;

        return (
            <div>
                <h3 style={{cursor: 'pointer'}}
                    onClick = {toggleOpen}>
                    {article.title + ' (' + article.date + ') '}
                    <a href = "#" onClick = {this.handleDelete}>
                        delete
                    </a>
                </h3>
                {body}
            </div>
        )
    };

    handleDelete = ev => {
         ev.preventDefault()
         const { deleteArticle, article } = this.props;
         deleteArticle(article.id)
     }

};

Article.propTypes = {
    comments: PropTypes.array,
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    toggleOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};

export default connect(null, { deleteArticle, loadArticlesById })(Article);