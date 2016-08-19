import React, { Component } from 'react';
import CommentList from './CommentList';

//Не перегружай компоненты - стоит разнести на Article и CommentList
export default class Article extends Component {

    state = {
        isOpenArticle: false
    };

    render() {
        const { article } = this.props;

        const body = this.state.isOpenArticle ? 
                <section>
                    {article.text}
                    <CommentList comments = {this.props.comments} />
                </section> : null;
        return (
            <div>
                <h3 onClick = {this.toggleArticle}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleArticle = (ev) => {
        this.setState({
            isOpenArticle: !this.state.isOpenArticle
        });
    };
}
