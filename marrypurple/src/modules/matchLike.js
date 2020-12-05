import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as matchAPI from '../lib/api/matching';
import { takeLatest } from 'redux-saga/effects';

const [
    MATCH_LIKE,
    MATCH_LIKE_SUCCESS,
    MATCH_LIKE_FAILURE
] = createRequestActionTypes('match/MATCH_LIKE'); //MATCH리스트의 액션타입만들어주기.
const UNLOAD_LIKE = 'match/UNLOAD_LIKE';

export const likeList = createAction(MATCH_LIKE);
export const unloadLikeList = createAction(UNLOAD_LIKE);

const whoLikesListSaga = createRequestSaga(MATCH_LIKE, matchAPI.matchlike);
export function* likeListSaga(){
    yield takeLatest(MATCH_LIKE, whoLikesListSaga);
}

const initialState = {
    matchLike: null,
    error: null
};

const matchLike = handleActions (
    {
        [MATCH_LIKE_SUCCESS]: (state, { payload: matchLike }) => ({
            ...state,
            matchLike
        }),
        [MATCH_LIKE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_LIKE]: () => initialState,
    },
    initialState
);

export default matchLike;