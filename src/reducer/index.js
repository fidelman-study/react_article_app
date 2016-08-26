import { INCREMENT } from '../constants';

export default (state, action) => {
	const { type } = action;
	return type == INCREMENT ? state + 1 : state;
}