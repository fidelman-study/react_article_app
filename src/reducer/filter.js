import { SELECT_FILTER, PICK_DATE, RESET_DAY_PICKER } from '../constants';
import { Map } from 'immutable';

const defaultFilters = new Map ({
    selected: [],
    dates: {
        from: null,
        to: null
    }
});

export default (filters = defaultFilters, action) => {
    const { type, payload, response, error } = action;

    switch (type) {
        case SELECT_FILTER:
            return filters.set('selected', payload.ids);

        case PICK_DATE:
            return filters.set('dates', payload.dates);

        case RESET_DAY_PICKER:
            return defaultFilters;
    }

    return filters;
}