import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';

class Root extends Component {
    render() {
        console.log(this.props);
        return(
            <Provider store = { store }>
                <div>
                    {this.props.children}
                </div>
            </Provider>
        )
    };
};

export default Root;