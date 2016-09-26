import React, {Component} from 'react';

class ArticleNotFound extends Component {
    render() {
        const {id} = this.props.location.query;
        return(
          <h1>Sorry, article with id: {id} not found</h1>
        );
    }
}

export default ArticleNotFound;