import React, { Component, PropTypes } from 'react';
import ArticleList from './ArticleList';

import JqueryComponent from './JqueryComponent';
import {findDOMNode } from 'react-dom';

import { loadArticles, loadArticlesWithThunk } from '../AC/articles';

import { connect } from 'react-redux';

class Container extends Component {
    static propTypes = {

    };

    componentDidMount() {
        const { loaded, loadindg, loadArticlesWithThunk } = this.props;
        //if (!loaded && !loadindg) this.props.loadArticles();
        if (!loaded && !loadindg) loadArticlesWithThunk();
    }

    render() {

        const { loading, articles } = this.props;

        return (
            <ArticleList articles = {articles} loading = {loading} />
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref;
        console.log(findDOMNode(ref));
    };
}

export default connect((state) => {
    const { articles, filters } = state;

    const selected = filters.get('selected');
    const dates = filters.get('dates');

    const filteredArticles = articles.get('entities').valueSeq()
            .filter(article => !selected.length || selected.includes(article.id))
            .filter(article => {
                const publisingDate = Date.parse(article.date)
                return (!dates.from || dates.from < publisingDate) && (!dates.to || dates.to > publisingDate)
            });

    const loading = articles.get('loading');
    const loaded = articles.get('loaded');

    return { articles: filteredArticles, loading, loaded };

},{
    loadArticles,
    loadArticlesWithThunk
}, null, {pure: false} // when you don't check the props for the context
)(Container)


/*
 Вставка сторонних компонентов
 1) Прочитать документацию
 2) Установить через npm
 3) Установить лоадеры для стилей
 4) Испорт компонента и вставка в компонент
 5) Импорт стилей
 */
