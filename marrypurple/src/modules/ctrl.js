import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {createRequestActionTypes,} from "../lib/createRequestSaga";
import * as matchAPI from "../lib/api/matching";

// like, pass, superlike 리듀서들을 모아두었습니다.

const [PASS, PASS_SUCCESS, PASS_FAILURE] = createRequestActionTypes("auth/PASS");
const [LIKE, LIKE_SUCCESS, LIKE_FAILURE] = createRequestActionTypes("auth/LIKE");
const [SUPERLIKE, SUPERLIKE_SUCCESS, SUPERLIKE_FAILURE] = createRequestActionTypes("auth/SUPERLIKE");

export const pass = createAction(PASS,({id})=>({id}));
export const like = createAction(LIKE, ({ id }) => ({id}));
export const superlike = createAction(SUPERLIKE, ({ id }) => ({id}));

const passSaga = createRequestSaga(PASS, matchAPI.pass); 
const likeSaga = createRequestSaga(LIKE, matchAPI.like); 
const superlikeSaga = createRequestSaga(SUPERLIKE, matchAPI.superlike); 

export function* ctrlSaga() {// pass 누르면 passSaga, like누르면 likeSaga, superlike누르면 superSaga
    yield takeLatest(PASS, passSaga);
    yield takeLatest(LIKE, likeSaga);
    yield takeLatest(SUPERLIKE, superlikeSaga);
}

const initialState = {
    pass: {
        id:""
    },
    like: {
        id:""
    },
    superlike: {
        id:""
    },
};

const ctrl = handleActions(
    {
        //첫번째 파라미터에는 수정하고 싶은 상태값
        //두번째 파라미터에는 어떻게 업데이트 할 지 정의하는 함수
        [PASS_SUCCESS]: (state, { payload: ctrl }) => ({ // 회원가입 성공
            ...state,
            ctrlError: null,
            ctrl,
        }),
        [PASS_FAILURE]: (state, { payload: error }) => ({ // 회원가입 실패
            ...state,
            ctrlError: error,
        }),
        [LIKE_SUCCESS]: (state, { payload: ctrl }) => ({ // 로그인 성공
            ...state,
            ctrlError: null,
            ctrl,
        }),
        [LIKE_FAILURE]: (state, { payload: error }) => ({  // 로그인 실패
            ...state,
            ctrlError: error,
        }),
        [SUPERLIKE_SUCCESS]: (state, { payload: ctrl }) => ({ // 로그인 성공
            ...state,
            ctrlError: null,
            ctrl,
        }),
        [SUPERLIKE_FAILURE]: (state, { payload: error }) => ({  // 로그인 실패
            ...state,
            ctrlError: error,
        }),
    },
    initialState,
);

export default ctrl;
