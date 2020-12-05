import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {createRequestActionTypes,} from "../lib/createRequestSaga";
import * as chatAPI from "../lib/api/chat";

// 메세지를 받아오는 액션입니다.
const [
    Get_MSG,
    Get_MSG_SUCCESS,
    Get_MSG_FAILURE
] = createRequestActionTypes('chat/Get_MSG'); 
const UNLOAD_MSG = 'chat/UNLOAD_MSG';

export const getMsgFrom = createAction(Get_MSG, ({ sender, recepient }) => ({
    sender,
    recepient
}));
export const unloadMsg = createAction(UNLOAD_MSG);

const getMsgSaga = createRequestSaga(Get_MSG, chatAPI.getMsg);
export function* MsgSaga(){
    yield takeLatest(Get_MSG, getMsgSaga);
}

const initialState = {
    getMsg: null,
    error:null
};

const getMsg = handleActions(
    {
        [Get_MSG]: state => ({
            ...state,
            getMsg: null,
            error: null
        }),
        [Get_MSG_SUCCESS]: (state, { payload: getMsg }) => ({
            ...state,
            error: null,
            getMsg,
        }),
        [Get_MSG_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error: error,
        }),
        [UNLOAD_MSG]: () => initialState,
    },
    initialState
)

export default getMsg;