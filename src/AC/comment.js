import {ADD_NEW_COMMENT, LOAD_COMMENTS} from '../constants';

export default function addNewComment(comment, articleId) {
    return {
        type: ADD_NEW_COMMENT,
        payload: {
            comment, articleId
        },
        generateRandomId: true
    }
}

export default function loadComments(callAPI, id) {
    return {
        type: LOAD_COMMENTS,
        payload: {id},
        callAPI: `${callAPI}?article=${id}`
    }
}