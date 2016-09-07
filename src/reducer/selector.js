import { SELECT_FILTER } from '../constants';

export default function selectorReducer(state = null, action) {
    const { type, payload } = action;
    return type === SELECT_FILTER ? payload.selected : state;
}

//if(!selected.length) {
//    console.info('Empty');
//} else {
//    console.log(payload.array.map((item) => {
//        return item.value;
//    }));
//}