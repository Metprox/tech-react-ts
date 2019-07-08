import { NEWS_SUCCESS, NEWS_FAIL } from '../actions/types';

interface Istate {
    mynews: [];
    error: boolean;
}

const initialState: Istate = {
    mynews: [],
    error: null,
};

export const newsReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case NEWS_SUCCESS:
            return {
                ...state,
                mynews: payload,
            };
        case NEWS_FAIL:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
