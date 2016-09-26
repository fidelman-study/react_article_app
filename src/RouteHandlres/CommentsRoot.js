import React, { Component } from 'react';
import CommentsPaginator from '../components/CommentsPaginator';

class CommentRoot extends Component {

    render() {
        return (
          <div>
              <h1>CommentsPaginator</h1>
              {this.props.children}
              <CommentsPaginator />
          </div>
        );
    }

}

export default CommentRoot;