import React, { Component, PropTypes } from 'react';
import ArticleList from './ArticleList';

import JqueryComponent from './JqueryComponent';
import {findDOMNode } from 'react-dom';

import { loadArticles, loadlArticlesWithThunk } from '../AC/articles';

import Counter from './Counter';
import Filter from './Filter';
import { connect } from 'react-redux';

class Container extends Component {
    static propTypes = {

    };

    componentDidMount() {
        const { loaded, loadindg } = this.props;
        //if (!loaded && !loadindg) this.props.loadArticles('/api/article');
        if (!loaded && !loadindg) this.props.loadlArticlesWithThunk('/api/article');
    }

    render() {

        const { loading, loaded } = this.props;

        return (
            <div>
                <Counter />
                <Filter />
                <ArticleList articles = {this.props.articles} loading = {loading} />
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref;
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
    loadlArticlesWithThunk
})(Container)


/*
 Вставка сторонних компонентов
 1) Прочитать документацию
 2) Установить через npm
 3) Установить лоадеры для стилей
 4) Испорт компонента и вставка в компонент
 5) Импорт стилей
 */
