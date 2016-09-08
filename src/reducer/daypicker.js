import { PICK_DATE, RESET_DAY_PICKER } from '../constants';

export default function daypickerReducer(state = {from: null, to: null}, action) {
    const { type, payload } = action;
    switch(type) {
        case PICK_DATE:
            return {
                from: payload.from,
                to: payload.to
            };
        case RESET_DAY_PICKER:
            return {
                from: null,
                to: null
            };
        default:
            return state;
    }
}