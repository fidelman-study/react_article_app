import React, { Component, PropTypes } from 'react';
import ArticleList from './ArticleList';

import JqueryComponent from './JqueryComponent';
import {findDOMNode } from 'react-dom';


import Counter from './Counter';
import Filter from './Filter';
import { connect } from 'react-redux';

class Container extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Counter />
                <Filter articles = {this.props.articles.def}/>
                <ArticleList articles = {this.props.articles.current} />
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref;
        console.log('---', findDOMNode(ref));
    };
}

export default connect((state) => {
    const { articles } = state;
    return { articles };
}, {

})(Container)

/*
 Вставка сторонних компонентов
 1) Прочитать документацию
 2) Установить через npm
 3) Установить лоадеры для стилей
 4) Испорт компонента и вставка в компонент
 5) Импорт стилей
 */
