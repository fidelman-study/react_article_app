import {} from '../constants';
import { normalizedComments } from '../fixtures';

export default (comments = normalizedComments, action) => {
    const { type, payload } = action;

    return comments;
}
