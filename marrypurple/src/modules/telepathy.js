import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {createRequestActionTypes,} from "../lib/createRequestSaga";
import * as telepathyAPI from "../lib/api/telepathy";

// 텔레파시 문제내기, 문제 풀기

const [TELEPATHY_MUN, TELEPATHY_MUN_SUCCESS, TELEPATHY_MUN_FAILURE] = createRequestActionTypes("tele/TELEPATHY_MUN");
const [TELEPATHY_ANS, TELEPATHY_ANS_SUCCESS, TELEPATHY_ANS_FAILURE] = createRequestActionTypes("tele/TELEPATHY_ANS");
const [TELEPATHY_FIN, TELEPATHY_FIN_SUCCESS, TELEPATHY_FIN_FAILURE] = createRequestActionTypes("tele/TELEPATHY_FIN");

export const teleMun = createAction(TELEPATHY_MUN,({mun, ans})=>({mun, ans}));
export const teleAns = createAction(TELEPATHY_ANS);
export const teleFin = createAction(TELEPATHY_FIN,({user_id})=>({user_id}));

const MunSaga = createRequestSaga(TELEPATHY_MUN, telepathyAPI.telepathyMun); 
const AnsSaga = createRequestSaga(TELEPATHY_ANS, telepathyAPI.telepathyAns); 
const FinSaga = createRequestSaga(TELEPATHY_FIN, telepathyAPI.teleFin); 

export function* telepathySaga() {// pass 누르면 passSaga, like누르면 likeSaga, superlike누르면 superSaga
    yield takeLatest(TELEPATHY_MUN, MunSaga);
    yield takeLatest(TELEPATHY_ANS, AnsSaga);
    yield takeLatest(TELEPATHY_FIN, FinSaga);
}

const initialState = {
    mun: null,
    ans: null
};

const telepathy = handleActions(
    {
        //첫번째 파라미터에는 수정하고 싶은 상태값
        //두번째 파라미터에는 어떻게 업데이트 할 지 정의하는 함수
        [TELEPATHY_MUN_SUCCESS]: (state, { payload: mun }) => ({ // 회원가입 성공
            ...state,
            ctrlError: null,
            mun,
        }),
        [TELEPATHY_MUN_FAILURE]: (state, { payload: error }) => ({ // 회원가입 실패
            ...state,
            ctrlError: error,
        }),
        [TELEPATHY_ANS_SUCCESS]: (state, { payload: ans }) => ({ // 로그인 성공
            ...state,
            ctrlError: null,
            ans,
        }),
        [TELEPATHY_ANS_FAILURE]: (state, { payload: error }) => ({  // 로그인 실패
            ...state,
            ctrlError: error,
        }),
        [TELEPATHY_FIN_SUCCESS]: (state, { payload: ans }) => ({ // 로그인 성공
            ...state,
            ctrlError: null,
            ans,
        }),
        [TELEPATHY_FIN_FAILURE]: (state, { payload: error }) => ({  // 로그인 실패
            ...state,
            ctrlError: error,
        }),
    },
    initialState,
);

export default telepathy;
