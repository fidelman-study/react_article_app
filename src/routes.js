import { Router, Route, hashHistory, browserHistory } from 'react-router';
import Root from './RouteHandlres/Root';
import React from 'react';

export default (
    <Router history = {hashHistory}>
        <Route path="/" component = {Root}  />
    </Router>
)