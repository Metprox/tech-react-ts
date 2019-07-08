import { put, call, takeEvery } from 'redux-saga/effects';
import { NEWS_REQUEST } from '../actions/types';
import { newsSuccess, newsFail } from '../actions/news';
import axios from '../../axios';

function* requestNews() {
    try {
        const response = yield call(axios.get, '/todos');
        let news = response.data;
        yield put(newsSuccess(news));
    } catch (error) {
        const message = 'failed to load news';
        yield put(newsFail(message));
    }
}

export function* watchRequestNews() {
    yield takeEvery(NEWS_REQUEST, requestNews);
}
