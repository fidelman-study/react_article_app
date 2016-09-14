import { INCREMENT } from '../constants';

export default (state = 0, action) => {
	const { type } = action;
	return type == INCREMENT ? state + 1 : state;
}