import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as matchAPI from '../lib/api/matching';
import { takeLatest } from 'redux-saga/effects';

const [
    MATCH_LIST,
    MATCH_LIST_SUCCESS,
    MATCH_LIST_FAILURE
] = createRequestActionTypes('match/MATCH_LIST'); //MATCH리스트의 액션타입만들어주기.
const UNLOAD_LIST = 'match/UNLOAD_LIST';

export const matchingList = createAction(MATCH_LIST);
export const unloadList = createAction(UNLOAD_LIST);

const matchListSaga = createRequestSaga(MATCH_LIST, matchAPI.matchingList);
export function* matchSaga(){
    yield takeLatest(MATCH_LIST, matchListSaga);
}

const initialState = {
    matching: null,
    error: null
};

const matching = handleActions (
    {
        [MATCH_LIST_SUCCESS]: (state, { payload: matching }) => ({
            ...state,
            matching
        }),
        [MATCH_LIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_LIST]: () => initialState,
    },
    initialState
);

export default matching;