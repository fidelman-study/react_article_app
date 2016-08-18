import React, { Component } from 'react';
import Comment from './Comment';

//Не перегружай компоненты - стоит разнести на Article и CommentList
export default class Article extends Component {

    state = {
        isOpenArticle: false,
        isOpenComments: false,
        //Лучше хранить минимальный стейт - ведь текс зависит от isOpenComments, его достаточно
        commentTogglerName: 'Show comments'
    };

    render() {
        const { article } = this.props;

        const commentItems = this.props.comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject} /></li>);

        const body = this.state.isOpenArticle ? 
                <section>
                    {article.text}
                    <br/>
                    {commentItems.length ? <a onClick = {this.toggleComments} href = "#">{this.state.commentTogglerName}</a> : null}
                    {this.state.isOpenComments ? <ul>{commentItems}</ul> : null}
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

    toggleComments = (ev) => {
        this.setState({
            isOpenComments: !this.state.isOpenComments,
            commentTogglerName: this.state.commentTogglerName == 'Show comments' ? 'Hide comments' : 'Show comments'
        });
        ev.preventDefault();
    };
}
