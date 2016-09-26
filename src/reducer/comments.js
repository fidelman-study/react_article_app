import { ADD_NEW_COMMENT, LOAD_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS } from '../constants';
import { normalizedComments } from '../fixtures';
import { Record, List, Map, OrderedMap } from 'immutable';
import { arrayToMap } from '../utils';

const CommentModel = new Record({
    id: null,
    user: null,
    text: ''
});

const defaultState = new Map({
    entities: new OrderedMap({})
});

//const immutableComments = new List(normalizedComments.map(comment => new CommentModel(comment)));

export default (state = defaultState, action) => {
    const { type, payload, response } = action;

    switch(type) {
        case ADD_NEW_COMMENT:
            //return state.push({...payload.comment, id: action.randomId});
            return state.update('entities', entities => entities.set(action.randomId, new CommentModel(payload.comment)))

        case LOAD_COMMENTS + SUCCESS:
            return state.update('entities', entities => entities.merge(arrayToMap(response, CommentModel)));

        case LOAD_COMMENTS_FOR_PAGE + START:
            return state.setIn(['pagination', payload.page], new List([]))

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return state
                .update('entities', entities => entities.merge(arrayToMap(response.records, CommentModel)))
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)
    }
    return state;
}




