import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import { Link } from 'react-router';

class Root extends Component {
    render() {
        return(
            <Provider store = { store }>
                <div>
                    <ul>
                        <li><Link to ="/articles">Articles</Link></li>
                        <li><Link to ="/filter" >Filter</Link></li>
                        <li><Link to ="/counter" >Counter</Link></li>
                        <li><Link to ="/comments" >Comments</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </Provider>
        )
    };
};

export default Root;