import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, FAIL, SUCCESS, LOAD_ARTICLE_BY_ID} from '../constants';
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

export function loadArticlesById(callAPI, id) {
    return {
        type: LOAD_ARTICLE_BY_ID,
        payload: {id},
        callAPI: `${callAPI}/${id}`
    }
}

export function loadArticlesWithThunk(callApi) {
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