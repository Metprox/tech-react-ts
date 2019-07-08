import { all } from 'redux-saga/effects';

import { watchRequestNews } from './news';
import { watchRequestAuth } from './auth';

export default function* rootSaga() {
    yield all([
        watchRequestNews(),
        watchRequestAuth(),
    ]);
}
