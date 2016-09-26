import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Root from './RouteHandlres/Root';
import React from 'react';
import CounterPage from './RouteHandlres/CounterPage';
import ArticlesPage from './RouteHandlres/ArticlesPage';
import FiltersPage from './RouteHandlres/FiltersPage';
import ArticlePage from './RouteHandlres/ArticlePage';
import CommentsRoot from './RouteHandlres/CommentsRoot';
import CommentsPage from './RouteHandlres/CommentsPage';
import IndexArticlePage from './RouteHandlres/IndexArticlePage';
import NotFoundPage from './RouteHandlres/NotFoundPage';
import NewArticlePage from './RouteHandlres/NewArticlePage';
import ArticleNotFound from './RouteHandlres/ArticleNotFound';
import store from './store';

export default (
    <Router history = {browserHistory}>
        {/*<Redirect from="/" to="/articles" />*/}
        <Route path="/" component = {Root}>
            <IndexRedirect to = "/articles" />
            <Route path="counter" component = {CounterPage} />
            <Route path="filter" component = {FiltersPage} />
            <Route path="articles" component = {ArticlesPage}>
                <IndexRoute component = {IndexArticlePage} />
                <Route path="new" component = {NewArticlePage}
                    onEnter={(nextState, replace) => {
                        if (!store.getSate().user) replace('/articles');
                    }}
                />
                <Route path="not_found" component = {ArticleNotFound} />
                <Route path=":id" component = {ArticlePage} />
            </Route>
            <Redirect from="/comments" to="/comments/1" />
            <Route path="comments" component = {CommentsRoot}>
                <Route path=":page" component = {CommentsPage}/>
            </Route>
            <Route path="*" component = {NotFoundPage} />
        </Route>
    </Router>
);

// Redirect - simple redirect from to
// IndexRedirect - go from the parent
// IndexRoute - default component if we have the parent path
// Use a component which has the first matched path