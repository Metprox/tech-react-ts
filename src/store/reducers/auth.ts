import { AUTH_SUCCESS, AUTH_FAIL } from '../actions/types';

interface Istate {
    login: string;
    password: string;
    token: boolean;
    error: string;
}

const initialState: Istate = {
    login: '',
    password: '',
    token: false,
    error: '',
};

export const authReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                login: payload.login,
                password: payload.password,
                token: payload.token,
            };
        case AUTH_FAIL:
            return {
                ...state,
                error: payload.msg,
                token: payload.token,
            };
        default:
            return state;
    }
};
