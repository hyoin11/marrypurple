import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as chatAPI from '../lib/api/chat';
import { takeLatest } from 'redux-saga/effects';

const [
    CHAT_USER,
    CHAT_USER_SUCCESS,
    CHAT_USER_FAILURE
] = createRequestActionTypes('chat/CHAT_USER'); //MATCH리스트의 액션타입만들어주기.
const UNLOAD_CHAT_USER = 'chat/UNLOAD_CHAT_USER';

export const getChatUser = createAction(CHAT_USER, id => id);
export const unloadCUser = createAction(UNLOAD_CHAT_USER);

const getChatUserSaga = createRequestSaga(CHAT_USER, chatAPI.getChatUser);
export function* chatUserSaga(){
    yield takeLatest(CHAT_USER, getChatUserSaga);
}

const initialState = {
    getChat: null,
    error: null
};

const getChat = handleActions (
    {   
        [CHAT_USER]: (state)=>({
            ...state,
            getChat:null,
            error: null
        }),
        [CHAT_USER_SUCCESS]: (state, { payload: getChat }) => ({
            ...state,
            getChat
        }),
        [CHAT_USER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_CHAT_USER]: () => initialState,
    },
    initialState
);

export default getChat;