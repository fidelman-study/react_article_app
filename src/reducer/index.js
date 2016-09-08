import { combineReducers } from 'redux';
import counterReducer from './counter';
import articleReducer from './articles';
import selectorReducer from './selector';
import daypickerReducer from './daypicker';

export default combineReducers({
	count: counterReducer,
	articles: articleReducer,
	selected: selectorReducer,
	daypicker: daypickerReducer
});