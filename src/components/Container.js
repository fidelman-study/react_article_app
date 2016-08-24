import React, { Component, PropTypes } from 'react';
import ArticleList from './ArticleList';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
// для импортирования стилей необходим style-loader и css-loader

class Container extends Component {
    static propTypes = {

    };

    state = {
        selected: null
    }
    
    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

export default Container


/*
Вставка сторонних компонентов
1) Прочитать документацию
2) Установить через npm
3) Установить лоадеры для стилей
4) Испорт компонента и вставка в компонент
5) Импорт стилей
*/
