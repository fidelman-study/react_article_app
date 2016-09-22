import {ADD_NEW_COMMENT, LOAD_COMMENTS} from '../constants';

export default function addNewComment(comment, id) {
    return {
        type: ADD_NEW_COMMENT,
        payload: {
            comment, id
        },
        generateRandomId: true
    }
}

export function loadComments(callAPI, id) {
    return {
        type: LOAD_COMMENTS,
        payload: {id},
        callAPI: `${callAPI}?article=${id}`
    }
}