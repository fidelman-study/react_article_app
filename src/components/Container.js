import React, { Component, PropTypes } from 'react';
import ArticleList from './ArticleList';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
// для импортирования стилей необходим style-loader и css-loader
// да

import JqueryComponent from './JqueryComponent';
import {findDOMNode } from 'react-dom';

// ДЗ3 - импортируем daypicker
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import ru_local from '../locale_ru'; // русскоязычная локализация

import Counter from './Counter';
import { connect } from 'react-redux';


class Container extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        from: null,
        to: null
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        const { from, to } = this.state;
        moment.locale('ru');

        return (
            <div>
                <Counter />
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>
                <DayPicker
                    numberOfMonths = { 2 }
                    onDayClick = {this.handleDayClick}
                    selectedDays = { day => DateUtils.isDayInRange(day, { from, to }) }
                    locale={ 'ru' }
                    localeUtils={ ru_local }
                />
                <ArticleList articles = {this.props.articles} />
                {/*<JqueryComponent items = {this.props.articles} ref= {this.getJQ} />*/}
                <hr/>
                <em>DayPicker</em>
                { !from && !to && <p>Пожалуйста, выберите  <strong>первый день</strong>.</p> }
                { from && !to && <p>Пожалуйста, выберите  <strong>последний день</strong>. Первый день - {moment(from).format('LL')}</p> }
                { from && to &&
                    <p>
                        Вы выбрали даты с { moment(from).format('LL') } до { moment(to).format('LL') } <a href="#" onClick = {this.handleResetClick}>Выбрать заново</a>
                    </p>
                }
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref;
        console.log('---', findDOMNode(ref));
    };

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    }
}

export default connect((state) => {
    const { articles } = state
    return { articles }
}
)(Container) 

/*
 Вставка сторонних компонентов
 1) Прочитать документацию
 2) Установить через npm
 3) Установить лоадеры для стилей
 4) Испорт компонента и вставка в компонент
 5) Импорт стилей
 */
