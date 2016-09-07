import { SELECT_FILTER } from '../constants';

export function changeSelect(selected) {
    return {
        type: SELECT_FILTER,
        payload: {
            selected
        }
    }
}