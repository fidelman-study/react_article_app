import { DELETE_ARTICLE, SELECT_FILTER, PICK_DATE, RESET_DAY_PICKER } from '../constants';
import { articles as defaultArticles} from '../fixtures';
import moment from 'moment';

 export default (articles = {def:defaultArticles, current:defaultArticles}, action) => {
     const { type, payload, response, error } = action;

     switch (type) {
         case DELETE_ARTICLE:
             const current = articles.current.filter(article => article.id != payload.id);
 			return {
                current,
                def: current
            };
         case SELECT_FILTER:

             const selectedArticles = payload.selected.map((item) => {
                 return item.value;
             });

             if(selectedArticles.length) {

                 let current = [];

                 selectedArticles.map(idSelected => {
                     current.push(...articles.def.filter(itemDef => {
                         return itemDef.id === idSelected;
                     }));
                 });

                 return {
                     current,
                     def: articles.def
                 }

             } else {
                 return {
                     current: articles.def,
                     def: articles.def
                 }
             }
         case PICK_DATE:

             const { from, to } = payload;

             return {
                 current: articles.def.filter(item => {
                     return item.date > moment(from).format() && ((to) ? item.date < moment(to).format() : true);
                 }),
                 def: articles.def
             };

         case RESET_DAY_PICKER:
             return {
                 current: articles.def,
                 def: articles.def
             }

     }

     return articles
 }