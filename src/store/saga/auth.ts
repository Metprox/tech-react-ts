import { put, takeEvery } from 'redux-saga/effects';
import { AUTH_REQUEST } from '../actions/types';

import { authSuccess, authFail } from '../actions/auth';

export interface Isaga {
    login: string;
    password: string;
    token?: boolean;
}

function* requestAuth(payload: any) {
    const { login, password, token } = payload.payload;
    console.log(login);
    console.log(password);
    console.log(token);
    try {
        if (login == 'Admin' && password == '12345') {
            localStorage.setItem('token', 'true');
            yield put(authSuccess(login, password, true));
        } else if (token == 'true') {
            // localStorage.setItem('token', 'true');
            yield put(authFail('', true));
        } else if (token == 'false') {
            yield put(authFail('', false));
        } else {
            localStorage.removeItem('token');
            yield put(
                authFail('Имя пользователя и пароль введены не верно!', false),
            );
        }
    } catch (error) {
        console.error(error.message);
        localStorage.removeItem('token');
    }
}

export function* watchRequestAuth() {
    yield takeEvery(AUTH_REQUEST, requestAuth);
}
