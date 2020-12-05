import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {createRequestActionTypes,} from "../lib/createRequestSaga";
import * as findAPI from "../lib/api/enterFind";

// 이상형찾기
const [
    FIND_ONE,
    FIND_ONE_SUCCESS,
    FIND_ONE_FAILURE
] = createRequestActionTypes('find/FIND_ONE'); 

export const find = createAction(FIND_ONE, ({ styles }) => ({ styles }));

const findOneSaga = createRequestSaga(FIND_ONE, findAPI.findOne);
export function* findSaga(){
    yield takeLatest(FIND_ONE, findOneSaga);
}

const initialState = {
    one: null,
    error:null
};

const findOne = handleActions(
    {
        [FIND_ONE_SUCCESS]: (state, { payload: one }) => ({
            ...state,
            error: null,
            one
        }),
        [FIND_ONE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error: error,
        }),
    },
    initialState
)

export default findOne;