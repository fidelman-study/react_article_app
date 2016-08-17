import React, { Component } from 'react';
import Comment from './Comment';

export default class Article extends Component {

    state = {
        isOpen: false
    };

    render() {
        const { article } = this.props;

        const commentItems = this.props.comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject} /></li>);

        const body = this.state.isOpen ? 
                <section>
                    {article.text}
                    <ul>
                        {commentItems}
                    </ul>
                        
                </section> : null;
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
}