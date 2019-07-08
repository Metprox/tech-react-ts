import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from './types';

export const authRequest = (
    login: string,
    password: string,
    token: boolean,
) => ({
    type: AUTH_REQUEST,
    payload: { login, password, token },
});

export const authSuccess = (
    login: string,
    password: string,
    token: boolean,
) => ({
    type: AUTH_SUCCESS,
    payload: { login, password, token },
});

export const authFail = (msg: string, token: boolean) => ({
    type: AUTH_FAIL,
    payload: { msg, token },
});
