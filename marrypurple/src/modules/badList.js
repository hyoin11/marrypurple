import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as badListAPI from '../lib/api/badList';
import { takeLatest } from 'redux-saga/effects';

const [
    BADLIST_POSTS,
    BADLIST_POSTS_SUCCESS,
    BADLIST_POSTS_FAILURE
] = createRequestActionTypes('badBoard/BADLIST_POSTS'); // 리스트 가져오기
const [
    WRITE_BAD,
    WRITE_BAD_SUCCESS,
    WRITE_BAD_FAILURE
] = createRequestActionTypes('badBoard/WRITE_BAD');   // 불량회원 등록
const [
    READ_BAD,
    READ_BAD_SUCCESS,
    READ_BAD_FAILURE
] = createRequestActionTypes('badBoard/READ_BAD');  // 불량회원 정보 읽어오기
const [
    DELETE_BAD,
    DELETE_BAD_SUCCESS,
    DELETE_BAD_FAILURE
] = createRequestActionTypes('badBoard/DELETE_BAD');   // 리스트에서 불량회원 지우기
const [
    UPDATE_BAD,
    UPDATE_BAD_SUCCESS,
    UPDATE_BAD_FAILURE
] = createRequestActionTypes('badBoard/UPDATE_BAD');  // 불량회원 업데이트
const [
    REPORT_LIST,
    REPORT_LIST_SUCCESS,
    REPORT_LIST_FAILURE
] = createRequestActionTypes('badBoard/REPORT_LIST'); // 신고 리스트 가져오기

export const badListPosts = createAction(
    BADLIST_POSTS,
    ({ user_nick, reason }) => ({ user_nick, reason })
);
export const writeBad = createAction(WRITE_BAD, ({ _id, reason }) => ({
    _id,
    reason
}));
export const readBad = createAction(READ_BAD, _id => _id);
export const deleteBad = createAction(DELETE_BAD, bad_id => bad_id);
export const updateBad = createAction(UPDATE_BAD, ({ bad_id, reason }) => ({ bad_id, reason }));
export const reportBadList = createAction(REPORT_LIST);

const badListPostsSaga = createRequestSaga(BADLIST_POSTS, badListAPI.badList);
const writeBadSaga = createRequestSaga(WRITE_BAD, badListAPI.badWrite);
const readBadSaga = createRequestSaga(READ_BAD, badListAPI.badRead);
const deleteBadSaga = createRequestSaga(DELETE_BAD, badListAPI.badRemove);
const updateBadSaga = createRequestSaga(UPDATE_BAD, badListAPI.badUpdate);
const reportListSaga = createRequestSaga(REPORT_LIST, badListAPI.reportList);
export function* badListsSaga(){
    yield takeLatest(BADLIST_POSTS, badListPostsSaga);
    yield takeLatest(WRITE_BAD, writeBadSaga);
    yield takeLatest(READ_BAD, readBadSaga);
    yield takeLatest(DELETE_BAD, deleteBadSaga);
    yield takeLatest(UPDATE_BAD, updateBadSaga);
    yield takeLatest(REPORT_LIST, reportListSaga);
}

const initialState = {
    _id: '',
    reason: '',
    badPost: null,
    badList: null,
    reportList: null,
    error: null
}

const badList = handleActions(
    {
        [BADLIST_POSTS_SUCCESS]: (state, { payload: badList }) => ({
            ...state,
            badList
        }),
        [BADLIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [WRITE_BAD]: state => ({
            ...state,
            badList: null,
            error: null
        }),
        [WRITE_BAD_SUCCESS]: (state, { payload: badList }) => ({
            ...state,
            error: null,
            badList,
        }),
        [WRITE_BAD_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [READ_BAD]: state => ({
            ...state,
            badPost: null,
            badList: null,
            error: null
        }),
        [READ_BAD_SUCCESS]: (state, { payload: badPost }) => ({
            ...state,
            error: null,
            badPost,
        }),
        [READ_BAD_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [DELETE_BAD]: state => ({
            ...state,
            badPost: null,
            badList: null,
            error: null
        }),
        [DELETE_BAD_SUCCESS]: (state, { payload: badPost }) => ({
            ...state,
            error: null,
            badPost,
        }),
        [DELETE_BAD_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [UPDATE_BAD]: state => ({
            ...state,
            badPost: null,
            badList: null,
            error: null
        }),
        [UPDATE_BAD_SUCCESS]: (state, { payload: badPost }) => ({
            ...state,
            error: null,
            badPost,
        }),
        [UPDATE_BAD_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [REPORT_LIST]: state => ({
            ...state,
            badPost: null,
            badList: null,
            reportList: null,
            error: null
        }),
        [REPORT_LIST_SUCCESS]: (state, { payload: reportList }) => ({
            ...state,
            error: null,
            reportList,
        }),
        [REPORT_LIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default badList;