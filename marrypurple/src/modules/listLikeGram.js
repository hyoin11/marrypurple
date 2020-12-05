import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as gramPostsAPI from '../lib/api/gramPosts';
import { takeLatest } from 'redux-saga/effects';

const [
    LIKEGRAMLIST_POSTS,
    LIKEGRAMLIST_POSTS_SUCCESS,
    LIKEGRAMLIST_POSTS_FAILURE
] = createRequestActionTypes('gram/LIKEGRAMLIST_POSTS');

export const likeGramListPosts = createAction(LIKEGRAMLIST_POSTS);

const likeGramListPostsSaga = createRequestSaga(LIKEGRAMLIST_POSTS, gramPostsAPI.gramLiktList);
export function* likeGramListsSaga(){
    yield takeLatest(LIKEGRAMLIST_POSTS, likeGramListPostsSaga);
}

const initialState = {
    listLikeGram: null,
    error: null
}

const listLikeGram = handleActions(
    {
        [LIKEGRAMLIST_POSTS_SUCCESS]: (state, { payload: listLikeGram }) => ({
            ...state,
            listLikeGram
        }),
        [LIKEGRAMLIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default listLikeGram;