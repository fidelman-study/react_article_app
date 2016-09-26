import React, { PropTypes, Component } from 'react';
import addNewComment from '../AC/comment';
import { connect } from 'react-redux';

class NewComment extends Component {

    static contextTypes = {
        user: PropTypes.string
    };

    state = {
        text: ''
    };

    render() {

        const {text} = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <strong>Add comment – </strong>
                {/*<input
                    type="text"
                    placeholder="user"
                    value = {user}
                    onChange = {this.handleChange('user')}
                />*/}
                <input
                    type="text"
                    placeholder="text"
                    value = {text}
                    onChange = {this.handleChange('text')}
                />
                <input type="submit"/>
            </form>
        );
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        });
    };

    handleSubmit = ev => {
        ev.preventDefault();
        const { text } = this.state;
        const { addNewComment, articleId } = this.props;
        const { user } = this.context;
        if(text) {
            addNewComment({ user, text }, articleId);
        } else {
            alert('Please, type your name and comment text');
        }
    }

}

export default connect(null,{
    addNewComment
})(NewComment);