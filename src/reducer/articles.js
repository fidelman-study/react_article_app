import { DELETE_ARTICLE } from '../constants';
import { normalizedArticles} from '../fixtures';
import { Record, OrderedMap } from 'immutable';

const Article = new Record({
    id: '',
    date: null,
    title: '',
    text: '',
    comments: []
});

const articlesMap = normalizedArticles.reduce((acc, article) => acc.set(article.id, new Article(article)), new OrderedMap({}))

 export default (articles = articlesMap, action) => {
     const { type, payload, response, error } = action;

     switch (type) {
         case DELETE_ARTICLE:
 			return articles.delete(payload.id);
     }

     return articles
 }