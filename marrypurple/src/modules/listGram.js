import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as gramPostsAPI from '../lib/api/gramPosts';
import { takeLatest } from 'redux-saga/effects';

const [
    GRAMLIST_POSTS,
    GRAMLIST_POSTS_SUCCESS,
    GRAMLIST_POSTS_FAILURE
] = createRequestActionTypes('gram/GRAMLIST_POSTS');    // 페이지에 보여줄 list
const [
    GRAMLISTALL_POSTS,
    GRAMLISTALL_POSTS_SUCCESS,
    GRAMLISTALL_POSTS_FAILURE
] = createRequestActionTypes('gram/GRAMLISTALL_POSTS');    // admin에 보여줄 list

export const gramListPosts = createAction(GRAMLIST_POSTS);
export const gramListAllPosts = createAction(GRAMLISTALL_POSTS);

const gramListPostsSaga = createRequestSaga(GRAMLIST_POSTS, gramPostsAPI.gramList);
const gramListAllPostsSaga = createRequestSaga(GRAMLISTALL_POSTS, gramPostsAPI.gramListAll);

export function* gramListsSaga(){
    yield takeLatest(GRAMLIST_POSTS, gramListPostsSaga);
    yield takeLatest(GRAMLISTALL_POSTS, gramListAllPostsSaga);
}

const initialState = {
    list: null,
    listAll: null,
    error: null
}

const listGram = handleActions(
    {
        [GRAMLIST_POSTS_SUCCESS]: (state, { payload: list }) => ({
            ...state,
            listAll: null,
            list
        }),
        [GRAMLIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [GRAMLISTALL_POSTS]: (state) => ({
            ...state,
            list: null,
            listAll: null
        }),
        [GRAMLISTALL_POSTS_SUCCESS]: (state, { payload: listAll }) => ({
            ...state,
            list: null,
            listAll
        }),
        [GRAMLISTALL_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default listGram;