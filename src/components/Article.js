import React, { Component } from 'react';
import CommentList from './CommentListOld';

//Не перегружай компоненты - стоит разнести на Article и CommentList
export default class Article extends Component {

    state = {
        isOpen: false
    };

    render() {
        const { article } = this.props;

        const body = this.state.isOpen ? 
            <section>
                {article.text}
                <CommentList comments = {this.props.comments} />
            </section> : null;
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    };

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        if (ev) ev.preventDefault();
    }
}
