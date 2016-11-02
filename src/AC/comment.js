import {ADD_NEW_COMMENT, LOAD_COMMENTS, LOAD_COMMENTS_FOR_PAGE} from '../constants';

export default function addNewComment(comment, id) {
    return {
        type: ADD_NEW_COMMENT,
        payload: {
            comment, id
        },
        generateRandomId: true
    }
}

export function loadComments(id) {
    return {
        type: LOAD_COMMENTS,
        payload: {id},
        callAPI: `/api/comment?article=${id}`
    }
}

export function loadCommentsForPage(page) {
    return {
        type: LOAD_COMMENTS_FOR_PAGE,
        payload: { page },
        callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
    }
}