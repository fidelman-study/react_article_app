import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { connect } from 'react-redux';
import { changeDateFilter, changeSelectedFilter } from '../AC/filters';

import Daypicker from './DaypickerContainer';

class Container extends  Component {

    render() {

        const { articles, filters, changeDateFilter } = this.props;
        const options = articles.valueSeq().map(article => ({
            label: article.get('title'),
            value: article.get('id')
        })).toJS();

        return (
            <div>
                <Select options = {options} value={filters.get('selected')} onChange = {this.handleChange} multi={true}/>
                <Daypicker dates = {filters.get('dates')} changeDates = {changeDateFilter} />
            </div>


        );
    }

    handleChange = (selected) => {
        this.props.changeSelectedFilter(selected.map(option => option.value));
    };


}

export default connect((state) => {
    const { articles, filters } = state;
    return { articles, filters };
}, {
    changeSelectedFilter,
    changeDateFilter
})(Container);