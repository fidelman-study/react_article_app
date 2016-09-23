import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';

import Container from '../components/Container'


class Root extends Component {
    render() {
        return(
            <Provider store = { store }>
                <Container />
            </Provider>
        )
    };
};

export default Root;