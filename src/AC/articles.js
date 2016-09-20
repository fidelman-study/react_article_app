import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, FAIL, SUCCESS} from '../constants';
import $ from 'jquery';

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            id
        }
    }
}

export function loadArticles(callAPI) {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI
    }
}

export function loadlArticlesWithThunk(callApi) {
    return function(dispatch, getState) {
        dispatch({
            type: LOAD_ALL_ARTICLES + START
        });
        $.get(callApi)
            .done(response => dispatch({
                type: LOAD_ALL_ARTICLES + SUCCESS,
                response
            }))
            .fail(error => dispatch({
                type: LOAD_ALL_ARTICLES + FAIL,
                error
            }));
    }
}