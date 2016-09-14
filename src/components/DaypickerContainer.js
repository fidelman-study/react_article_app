import React, { Component, PropTypes } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import ru_local from '../locale_ru'; // русскоязычная локализация
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import { resetDayPicker } from '../AC/filters';

class Daypicker extends Component {

    static propTypes = {
        changeDates: PropTypes.func.isRequired,
        dates: PropTypes.object.isRequired
    };

    render() {
        const { from, to } = this.props.dates;
        moment.locale('ru');

        const getRangeTitle =
            <div>
                <em>DayPicker</em>
                {!from && !to && <p>Пожалуйста, выберите  <strong>первый день</strong>.</p>}
                {from && !to && <p>Пожалуйста, выберите  <strong>последний день</strong>. Первый день - {moment(from).format('LL')}</p>}
                {from && to &&
                <p>
                    Вы выбрали даты с { moment(from).format('LL') } до { moment(to).format('LL') } <a href="#" onClick = {this.handleResetClick}>Выбрать заново</a>
                </p>}
            </div>;

        return (
            <div>
                <DayPicker
                    numberOfMonths = { 2 }
                    onDayClick = {this.handleDayClick}
                    selectedDays = { day => DateUtils.isDayInRange(day, {from: from, to: to})}
                    locale={ 'ru' }
                    localeUtils={ ru_local }
                />
                { getRangeTitle }
            </div>

        );

    }


    handleDayClick = (e, day) => {
        const {changeDates, dates} = this.props;
        const range = DateUtils.addDayToRange(day, dates);
        changeDates(range);
    };

    handleResetClick = (e) => {
        e.preventDefault();
        this.props.resetDayPicker();
    };
}

export default connect(null,{
    resetDayPicker
})(Daypicker);