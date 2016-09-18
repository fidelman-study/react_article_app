import {ADD_NEW_COMMENT} from '../constants';

export default function addNewComment(comment, articleId) {
    return {
        type: ADD_NEW_COMMENT,
        payload: {
            comment, articleId
        },
        generateRandomId: true
    }
}