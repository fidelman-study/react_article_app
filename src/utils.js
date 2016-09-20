import {OrderedMap } from 'immutable';

export function arrayToMap(array, RecordModel) {
    return array.reduce((acc, article) => acc.set(article.id, new RecordModel(article)), new OrderedMap({}));
}