/**
 * Created by aaa on 24/08/16.
 */
import React from 'react';
import DayPicker from 'react-day-picker';
const weekdaysLong = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
const weekdaysShort = {
    // Idem
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Вс'],
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};
const months = {
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'ноябрь', 'Декабрь'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
const firstDayOfWeek = {
    ru: 1,
    en: 0,
};

const localeUtils = {
    formatDay: (d, locale = 'en') =>
        `${weekdaysLong[locale][d.getDay()]}, ${d.getDate()} ${months[locale][d.getMonth()]} ${d.getFullYear()}`,
    formatWeekdayShort: (index, locale = 'en') => weekdaysShort[locale][index],
    formatWeekdayLong: (index, locale = 'en') => weekdaysLong[locale][index],
    getFirstDayOfWeek: (locale) => firstDayOfWeek[locale],
    getMonths: (locale) => months[locale],
    formatMonthTitle: (d, locale) => `${months[locale][d.getMonth()]} ${d.getFullYear()}`,
};

export default localeUtils;