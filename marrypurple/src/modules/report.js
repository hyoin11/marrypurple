import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {createRequestActionTypes,} from "../lib/createRequestSaga";
import * as matchAPI from "../lib/api/matching";

//신고하기 기능

const [ REPORT, REPORT_SUCCESS, REPORT_FAILURE] = createRequestActionTypes("match/REPORT");

export const report_ = createAction(REPORT,({id, reason})=>({id, reason}));

const reportSaga = createRequestSaga(REPORT, matchAPI.report); 

export function* reportCombineSaga() {// pass 누르면 passSaga, like누르면 likeSaga, superlike누르면 superSaga
    yield takeLatest(REPORT, reportSaga);
}

const initialState = {
    report:'',
    error:null
};

const report = handleActions(
    {
        [REPORT_SUCCESS]: (state, { payload: report }) => ({ 
            ...state,
            report,
        }),
        [REPORT_FAILURE]: (state, { payload: error }) => ({ 
            ...state,
            error: error,
        }),
    },
    initialState,
);

export default report;
