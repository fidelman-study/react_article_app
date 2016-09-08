import { PICK_DATE, RESET_DAY_PICKER } from '../constants';

export function dayPicker(daypicker) {
    const { from, to } = daypicker;
    return {
        type: PICK_DATE,
        payload: {
            from,
            to
        }
    }
}

export function resetDayPicker() {
    return {
        type: RESET_DAY_PICKER
    }
}