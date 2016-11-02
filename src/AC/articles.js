import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, FAIL, SUCCESS, LOAD_ARTICLE_BY_ID} from '../constants';
import $ from 'jquery';
import { browserHistory } from 'react-router';

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            id
        }
    }
}


export function loadArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticlesById(id) {

    return function(dispatch, getState) {
        dispatch({
            type: LOAD_ARTICLE_BY_ID + START,
            payload: {id}
        });
        $.get(`/api/article/${id}`)
            .done(response => dispatch({
                type: LOAD_ARTICLE_BY_ID + SUCCESS,
                payload: {id},
                response
            }))
            .fail(error => {
                dispatch({
                    type: LOAD_ARTICLE_BY_ID + FAIL,
                    payload: {id},
                    error
                });
                browserHistory.replace(`/articles/not_found?id=${id}`); // push/replace - remember/not
            });
    }
}

export function loadArticlesWithThunk() {
    return function(dispatch, getState) {
        dispatch({
            type: LOAD_ALL_ARTICLES + START
        });
        $.get('/api/article')
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