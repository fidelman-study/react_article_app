import { Router, Route, hashHistory, browserHistory } from 'react-router';
import Root from './RouteHandlres/Root';
import React from 'react';
import CounterPage from './RouteHandlres/CounterPage';
import ArticlesPage from './RouteHandlres/ArticlesPage';
import FiltersPage from './RouteHandlres/FiltersPage';


export default (
    <Router history = {hashHistory}>
        <Route path="/" component = {Root}>
            <Route path="counter" component = {CounterPage} />
            <Route path="filter" component = {FiltersPage} />
            <Route path="articles" component = {ArticlesPage} />
        </Route>
    </Router>
)