import React, { Component } from 'react';
import CommentList from './CommentList';
import toggleOpen from '../decorators/toggleOpen';

//Не перегружай компоненты - стоит разнести на Article и CommentList
class Article extends Component {


    render() {
        const { comments, article, toggleOpen, isOpen } = this.props;

        const body = isOpen ? 
            <section>
                {article.text}
                <CommentList comments = {comments} />
            </section> : null;
        return (
            <div>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    };

}

export default toggleOpen(Article);
