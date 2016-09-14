import { SELECT_FILTER, PICK_DATE, RESET_DAY_PICKER } from '../constants';

export function changeSelectedFilter(ids) {
    return {
        type: SELECT_FILTER,
        payload: {ids}
    }
}
export function changeDateFilter(dates) {
    return {
        type: PICK_DATE,
        payload: { dates }
    }
}

export function resetDayPicker() {
    return {
        type: RESET_DAY_PICKER
    }
}