import React, { Component, PropTypes } from 'react';

// для импортирования стилей необходим style-loader и css-loader
// ДЗ3 - импортируем daypicker
import DayPicker, { DateUtils } from 'react-day-picker';
import Select from 'react-select';

import moment from 'moment';
import ru_local from '../locale_ru'; // русскоязычная локализация

import { connect } from 'react-redux';
import { changeSelect } from '../AC/selector';
import { dayPicker, resetDayPicker } from '../AC/daypicker';

import 'react-day-picker/lib/style.css';
import 'react-select/dist/react-select.css';

class Container extends  Component {




    render() {

        const { from, to } = this.props.daypicker;
        moment.locale('ru');

        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        const dayPicker =
            <div>
                <em>DayPicker</em>
                {!from && !to && <p>Пожалуйста, выберите  <strong>первый день</strong>.</p>}
                {from && !to && <p>Пожалуйста, выберите  <strong>последний день</strong>. Первый день - {moment(from).format('LL')}</p>}
                {from && to &&
                <p>
                    Вы выбрали даты с { moment(from).format('LL') } до { moment(to).format('LL') } <a href="#" onClick = {this.handleResetClick}>Выбрать заново</a>
                </p>}
                <DayPicker
                    numberOfMonths = { 2 }
                    onDayClick = {this.handleDayClick}
                    selectedDays = { day => DateUtils.isDayInRange(day, {from: from, to: to})}
                    locale={ 'ru' }
                    localeUtils={ ru_local }
                />
            </div>;

        return (
            <div>
                <Select options = {options} value={this.props.selected} onChange = {this.handleChange} multi={true}/>
                { dayPicker }
            </div>


        );
    }

    handleChange = (selected) => {
        this.props.changeSelect(selected);
    };

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.props.daypicker);
        this.props.dayPicker(range);
    };

    handleResetClick = (e) => {
        e.preventDefault();
        this.props.resetDayPicker();
    };
}

export default connect((state) => {
    const { selected, daypicker } = state;
    return { selected, daypicker };
}, {
    changeSelect,
    dayPicker,
    resetDayPicker
})(Container)