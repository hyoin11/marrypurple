import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as worldcupAPI from '../lib/api/worldcup';
import { takeLatest } from 'redux-saga/effects';

const [
    WORLDCUP_LIST,
    WORLDCUP_LIST_SUCCESS,
    WORLDCUP_LIST_FAILURE,
] = createRequestActionTypes('worldcup/WORLDCUP_LIST');
const UNLOAD_WORLDCUP = 'worldcup/UNLOAD_WORLDCUP';
const [
    WINNER,
    WINNER_SUCCESS,
    WINNER_FAILURE,
] = createRequestActionTypes('worldcup/WINNER');
const UNLOAD_WINNER = 'worldcup/UNLOAD_WINNER';

export const worldcupList = createAction(WORLDCUP_LIST);
export const unloadWorldcup = createAction(UNLOAD_WORLDCUP);
export const winnerProfile = createAction(WINNER, user_id => user_id);
export const unloadWinner = createAction(UNLOAD_WINNER);

const worldcupListSaga = createRequestSaga(WORLDCUP_LIST, worldcupAPI.userList);
const winnerSaga = createRequestSaga(WINNER, worldcupAPI.winner);
export function* worldcupSaga(){
    yield takeLatest(WORLDCUP_LIST, worldcupListSaga);
    yield takeLatest(WINNER, winnerSaga);
}

const initialState = {
    list: null,
    winner: null,
    error: null
}

const worldcup = handleActions(
    {
        [WORLDCUP_LIST_SUCCESS]: (state, { payload: list }) => ({
            ...state,
            list
        }),
        [WORLDCUP_LIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_WORLDCUP]: () => initialState,
        [WINNER_SUCCESS]: (state, { payload: winner }) => ({
            ...state,
            winner
        }),
        [WINNER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_WINNER]: () => initialState,
    },
    initialState
);

export default worldcup;