import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as gramPostsAPI from '../lib/api/gramPosts';
import { takeLatest } from 'redux-saga/effects';

const [
    READ_GRAM,
    READ_GRAM_SUCCESS,
    READ_GRAM_FAILURE
] = createRequestActionTypes('gram/READ_GRAM');
const UNLOAD_GRAM = 'gram/UNLOAD_GRAM';
const [
    DELETE_GRAM,
    DELETE_GRAM_SUCCESS,
    DELETE_GRAM_FAILURE
] = createRequestActionTypes('gram/DELETE_GRAM');   // 그램 지우기
const [
    COMMENT_UPDATE_GRAM,
    COMMENT_UPDATE_GRAM_SUCCESS,
    COMMENT_UPDATE_GRAM_FAILURE
] = createRequestActionTypes('gram/COMMENT_UPDATE_GRAM');   // 댓글 추가
const [
    LIKE_UPDATE_GRAM,
    LIKE_UPDATE_GRAM_SUCCESS,
    LIKE_UPDATE_GRAM_FAILURE
] = createRequestActionTypes('gram/LIKE_UPDATE_GRAM');  // 좋아요 업데이트
const [
    HIDE_UPDATE_GRAM,
    HIDE_UPDATE_GRAM_SUCCESS,
    HIDE_UPDATE_GRAM_FAILURE
] = createRequestActionTypes('gram/HIDE_UPDATE_GRAM');  // 게시글 숨기는 업데이트
const [
    SHOW_UPDATE_GRAM,
    SHOW_UPDATE_GRAM_SUCCESS,
    SHOW_UPDATE_GRAM_FAILURE
] = createRequestActionTypes('gram/SHOW_UPDATE_GRAM');  // 게시글 보이는 업데이트

export const readGram = createAction(READ_GRAM, _id => _id);
export const unloadGram = createAction(UNLOAD_GRAM);
export const deleteGram = createAction(DELETE_GRAM, _id => _id);
export const updateCommentGram = createAction(COMMENT_UPDATE_GRAM, ({ _id, nickName, text }) => ({ _id, nickName, text }));
export const updateLikeGram = createAction(LIKE_UPDATE_GRAM, ({ gram_id, heart }) => ({ gram_id, heart }));
export const updateHideGram = createAction(HIDE_UPDATE_GRAM, gram_id =>  gram_id);
export const updateShowGram = createAction(SHOW_UPDATE_GRAM, gram_id =>  gram_id);

const readGramSaga = createRequestSaga(READ_GRAM, gramPostsAPI.gramRead);
const deleteGramSaga = createRequestSaga(DELETE_GRAM, gramPostsAPI.gramDelete);
const updateCommentGramSaga = createRequestSaga(COMMENT_UPDATE_GRAM, gramPostsAPI.gramCommentUpdate);
const updateLikeGramSaga = createRequestSaga(LIKE_UPDATE_GRAM, gramPostsAPI.gramLikeUpdate);
const updateHideGramSaga = createRequestSaga(HIDE_UPDATE_GRAM, gramPostsAPI.gramHideUpdate);
const updateShowGramSaga = createRequestSaga(SHOW_UPDATE_GRAM, gramPostsAPI.gramShowUpdate);
export function* postSaga(){
    yield takeLatest(READ_GRAM, readGramSaga);
    yield takeLatest(DELETE_GRAM, deleteGramSaga);
    yield takeLatest(COMMENT_UPDATE_GRAM, updateCommentGramSaga);
    yield takeLatest(LIKE_UPDATE_GRAM, updateLikeGramSaga);
    yield takeLatest(HIDE_UPDATE_GRAM, updateHideGramSaga);
    yield takeLatest(SHOW_UPDATE_GRAM, updateShowGramSaga);
}

const initialState = {
    gram_id: '',
    comment: [{
        nickName:'',
        text: ''
    }],
    heart: '',
    gram: null,
    error: null
};

const gramPost = handleActions (
    {
        [READ_GRAM_SUCCESS]: (state, { payload: gram }) => ({
            ...state,
            gram
        }),
        [READ_GRAM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_GRAM]: () => initialState,
        [DELETE_GRAM]: state => ({
            ...state,
            gram: null,
            gramError: null
        }),
        [DELETE_GRAM_SUCCESS]: (state, { payload: gram }) => ({
            ...state,
            gramError: null,
            gram,
        }),
        [DELETE_GRAM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            gramError: error
        }),
        [COMMENT_UPDATE_GRAM]: state => ({
            ...state,
            gram: null,
            gramError: null
        }),
        [COMMENT_UPDATE_GRAM_SUCCESS]: (state, { payload: gram }) => ({
            ...state,
            gramError: null,
            gram,
        }),
        [COMMENT_UPDATE_GRAM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            gramError: error
        }),
        [LIKE_UPDATE_GRAM]: state => ({
            ...state,
            gram: null,
            gramError: null
        }),
        [LIKE_UPDATE_GRAM_SUCCESS]: (state, { payload: gram }) => ({
            ...state,
            gramError: null,
            gram,
        }),
        [LIKE_UPDATE_GRAM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            gramError: error
        }),
        [HIDE_UPDATE_GRAM]: state => ({
            ...state,
            gram: null,
            gramError: null
        }),
        [HIDE_UPDATE_GRAM_SUCCESS]: (state, { payload: gram }) => ({
            ...state,
            gramError: null,
            gram,
        }),
        [HIDE_UPDATE_GRAM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            gramError: error
        }),
        [SHOW_UPDATE_GRAM]: state => ({
            ...state,
            gram: null,
            gramError: null
        }),
        [SHOW_UPDATE_GRAM_SUCCESS]: (state, { payload: gram }) => ({
            ...state,
            gramError: null,
            gram,
        }),
        [SHOW_UPDATE_GRAM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            gramError: error
        }),
    },
    initialState
);

export default gramPost;