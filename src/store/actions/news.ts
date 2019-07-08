import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAIL } from './types';

export const newsRequest = () => ({
    type: NEWS_REQUEST,
});

export const newsSuccess = (mynews: []) => ({
    type: NEWS_SUCCESS,
    payload: mynews,
});

export const newsFail = (message: string) => ({
    type: NEWS_FAIL,
    payload: message,
});
