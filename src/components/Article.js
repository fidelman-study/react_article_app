import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'
import { deleteArticle, loadArticlesById } from '../AC/articles'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };


    render() {
        const { article, isOpen, toggleOpen } = this.props;
        if (!article || article.loading) return <h1>Loading...</h1>;
        const { text, title } = article;
        const body = isOpen ? <section>{text}<CommentList article = {article}/></section> : null;
        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                <a href = "#" onClick = {this.handleDelete}>delete article</a>
                {body}
            </div>
        )
    }

    handleDelete = ev => {
        ev.preventDefault();
        const { deleteArticle, article } = this.props;
        deleteArticle(article.id)
    }
}

export default connect(null, { deleteArticle, loadArticlesById })(Article)