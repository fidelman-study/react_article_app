import { DELETE_ARTICLE, ADD_NEW_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants';
import { normalizedArticles} from '../fixtures';
import { Record, OrderedMap } from 'immutable';
import { arrayToMap } from '../utils';

const Article = new Record({
    id: '',
    date: null,
    title: '',
    text: '',
    comments: []
});



 export default (articles = new OrderedMap({}), action) => {
     const { type, payload, response, error } = action;

     switch (type) {
         case DELETE_ARTICLE:
 			return articles.delete(payload.id);
         case ADD_NEW_COMMENT:
            return articles.updateIn([payload.articleId, 'comments'], comments => comments.concat(action.randomId));
         case LOAD_ALL_ARTICLES + SUCCESS:
             return articles.merge(arrayToMap(response, Article));

     }

     return articles
 }