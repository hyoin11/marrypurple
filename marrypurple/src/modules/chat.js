import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as chatAPI from '../lib/api/chat';
import { takeLatest } from 'redux-saga/effects';

const [
    CHAT_LIST,
    CHAT_LIST_SUCCESS,
    CHAT_LIST_FAILURE
] = createRequestActionTypes('chat/CHAT_LIST'); //MATCH리스트의 액션타입만들어주기.
const UNLOAD_CHAT = 'chat/UNLOAD_CHAT';

export const chatUser = createAction(CHAT_LIST);
export const unloadChatUser = createAction(UNLOAD_CHAT);

const chatUserSaga = createRequestSaga(CHAT_LIST, chatAPI.chatUser);
export function* chatSaga(){
    yield takeLatest(CHAT_LIST, chatUserSaga);
}

const initialState = {
    chat: null,
    error: null
};

const chat = handleActions (
    {
        [CHAT_LIST_SUCCESS]: (state, { payload: chat }) => ({
            ...state,
            chat
        }),
        [CHAT_LIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_CHAT]: () => initialState,
    },
    initialState
);

export default chat;