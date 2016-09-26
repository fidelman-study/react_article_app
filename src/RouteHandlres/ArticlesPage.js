import React, { Component } from 'react';
import ArticleListContainer from '../components/ArticleListContainer'

class ArticlesPage extends Component {
    render() {
        return(
            <div>
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