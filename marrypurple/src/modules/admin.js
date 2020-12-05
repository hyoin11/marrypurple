import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as adminAPI from '../lib/api/admin';
import { takeLatest } from 'redux-saga/effects';

const [
    USER_LIST,
    USER_LIST_SUCCESS,
    USER_LIST_FAILURE
] = createRequestActionTypes('admin/USER_LIST'); //MATCH리스트의 액션타입만들어주기.
const UNLOAD_LIST = 'admin/UNLOAD_LIST';

const [NICK, NICK_SUCCESS, NICK_FAILURE] = createRequestActionTypes("auth/PASS");
const [EMAIL, EMAIL_SUCCESS, EMAIL_FAILURE] = createRequestActionTypes("auth/PASS");
const [GENDER, GENDER_SUCCESS, GENDER_FAILURE] = createRequestActionTypes("auth/PASS");

export const nickList = createAction(NICK,({text})=>({text}));
export const emailList = createAction(EMAIL,({text})=>({text}));
export const genderList = createAction(GENDER,({text})=>({text}));
export const adminUserList = createAction(USER_LIST);
export const adminUserUnloadList = createAction(UNLOAD_LIST);

const nickSaga = createRequestSaga(NICK, adminAPI.userNick); 
const emailSaga = createRequestSaga(EMAIL, adminAPI.userEmail); 
const genderSaga = createRequestSaga(GENDER, adminAPI.userGender); 
const adminUserListSaga = createRequestSaga(USER_LIST, adminAPI.user);
export function* adminUserSaga(){
    yield takeLatest(NICK, nickSaga);
    yield takeLatest(EMAIL, emailSaga);
    yield takeLatest(GENDER, genderSaga);
    yield takeLatest(USER_LIST, adminUserListSaga);
}

const initialState = {
    user: null,
    error: null,
    nick: null,
    email: null,
    gender: null
};

const admin = handleActions (
    {
        [USER_LIST_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user
        }),
        [USER_LIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [NICK_SUCCESS]: (state, { payload: nick }) => ({
            ...state,
            nick
        }),
        [NICK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [EMAIL_SUCCESS]: (state, { payload: email }) => ({
            ...state,
            email
        }),
        [EMAIL_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [GENDER_SUCCESS]: (state, { payload: gender }) => ({
            ...state,
            gender
        }),
        [GENDER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_LIST]: () => initialState,
    },
    initialState
);

export default admin;