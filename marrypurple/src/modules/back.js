import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as matchAPI from '../lib/api/matching';
import { takeLatest } from 'redux-saga/effects';

const [
    FIND_BACK_USER,
    FIND_BACK_USER_SUCCESS,
    FIND_BACK_USER_FAILURE
] = createRequestActionTypes('match/FIND_BACK_USER'); //MATCH리스트의 액션타입만들어주기.
const UNLOAD_USER = 'match/UNLOAD_USER';

export const backList = createAction(FIND_BACK_USER);
export const unloadBackList = createAction(UNLOAD_USER);

const backUserSaga = createRequestSaga(FIND_BACK_USER, matchAPI.findPassedUser);
export function* backSaga(){
    yield takeLatest(FIND_BACK_USER, backUserSaga);
}

const initialState = {
    back: null,
    error: null
};

const back = handleActions (
    {
        [FIND_BACK_USER_SUCCESS]: (state, { payload: back }) => ({
            ...state,
            back
        }),
        [FIND_BACK_USER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_USER]: () => initialState,
    },
    initialState
);

export default back;