import React, { Component, PropTypes } from 'react';
import ArticleListContainer from '../components/ArticleListContainer'

class ArticlesPage extends Component {

    handleChange = ev => {
        this.setState({
            user: ev.target.value
        });
    };

    state = {
        user: ''
    };

    static childContextTypes = {
        user: PropTypes.string
    };

    getChildContext() {
        return {
            user: this.state.user
        }
    }

    // turn off the pure function mode in the connect

    render() {
        return(
            <div>
                <input type="text" value={this.state.user} onChange={this.handleChange} />
                <div className="left-bar">
                    <ArticleListContainer />
                </div>
                <div className="right-bar">
                    {this.props.children}
                </div>
            </div>
        )
    };
};

export default ArticlesPage;