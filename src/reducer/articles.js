import { DELETE_ARTICLE, ADD_NEW_COMMENT,LOAD_ARTICLE_BY_ID, LOAD_COMMENTS, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants';
import { normalizedArticles} from '../fixtures';
import { Record, OrderedMap, Map } from 'immutable';
import { arrayToMap } from '../utils';

const Article = new Record({
    id: '',
    date: null,
    title: '',
    text: '',
    loading: false,
    commentsLoading: false,
    commentsLoaded: false,
    comments: []
});

const defaultState = new Map({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});

 export default (state = defaultState, action) => {
     const { type, payload, response, error } = action;

     switch (type) {
         case DELETE_ARTICLE:
 			return state.update('entities', entities => entities.delete(payload.id));

         case ADD_NEW_COMMENT:
            return state.updateIn(
                ['entities', payload.id, 'comments'],
                comments => comments.concat(action.randomId)
            );

         case LOAD_ALL_ARTICLES + START:
             return state.set('loading', true);

         case LOAD_ALL_ARTICLES + SUCCESS:
             return state
                 .update('entities', entities => entities.merge(arrayToMap(response, Article)))
                 .set('loading', false)
                 .set('loaded', true);

         case LOAD_ARTICLE_BY_ID + START:
             return state.updateIn(['entities', payload.id], new Article({}), article => article.set('loading', true));

         case LOAD_ARTICLE_BY_ID + SUCCESS:
             return state
                 .setIn(['entities', payload.id], new Article({...response, loaded: true}));

         case LOAD_COMMENTS + START:
             return state.setIn(['entities', payload.id, 'commentsLoading'], true);

         case LOAD_COMMENTS + SUCCESS:
             return state
                 .setIn(['entities', payload.id, 'commentsLoaded'], true)
                 .setIn(['entities', payload.id, 'commentsLoading'], false);

     }


     return state
 }