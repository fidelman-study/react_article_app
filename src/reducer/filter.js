import { SELECT_FILTER, PICK_DATE, RESET_DAY_PICKER } from '../constants';

const defaultFilters = {
    selected: [],
    dates: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload, response, error } = action
    console.log(type);
    switch (type) {
        case SELECT_FILTER:
            return { ...filters, selected: payload.ids }

        case PICK_DATE:
            return { ...filters, ...payload }
        case RESET_DAY_PICKER:
            return {...defaultFilters }
    }

    return filters;
}