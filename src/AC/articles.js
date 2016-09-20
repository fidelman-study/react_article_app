import { DELETE_ARTICLE, LOAD_ALL_ARTICLES} from '../constants';

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