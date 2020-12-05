import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {createRequestActionTypes,} from "../lib/createRequestSaga";
import * as sideAPI from "../lib/api/side";

const [
    WANTGENDER,
    WANTGENDER_SUCCESS,
    WANTGENDER_FAILURE
] = createRequestActionTypes("side/WANTGENDER");

export const updateGender = createAction(WANTGENDER,({match_gender})=>({match_gender}));

const updateGenderSaga = createRequestSaga(WANTGENDER, sideAPI.updateGender); 
export function* sideSaga() {
    yield takeLatest(WANTGENDER, updateGenderSaga);
}

const initialState = {
    match_gender: ''
};

const side = handleActions(
    {
        [WANTGENDER_SUCCESS]: (state, { payload: side }) => ({
            ...state,
            sideError: null,
            side,
        }),
        [WANTGENDER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            sideError: error,
        }),
    },
    initialState,
);

export default side;
