import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as gramPostsAPI from '../lib/api/gramPosts';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

const INITIALIZE_FORM = 'gram/INITIALIZE_FORM';  // 모든 내용 초기화
const CHANGE_FIELD = 'gram/CHANGE_FIELD';  // 특정 key값 바꾸기
const [
    WRITE_GRAM,
    WRITE_GRAM_SUCCESS,
    WRITE_GRAM_FAILURE
] = createRequestActionTypes('gram/WRITE_GRAM');   // 그램 작성

export const initializeForm = createAction(INITIALIZE_FORM);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value
}));
export const writeGram = createAction(WRITE_GRAM, ({ InstaImage, content }) => ({
    InstaImage,
    content
}));

const writeGramSaga = createRequestSaga(WRITE_GRAM, gramPostsAPI.gramWrite);
export function* writeSaga(){
    yield takeLatest(WRITE_GRAM, writeGramSaga);
}

const initialState = {
    InstaImage: '',
    content: '',
    gram: null,
    gramError: null
};

const gramWrite = handleActions(
    {
        [INITIALIZE_FORM]: (state) => ({
            ...state,
            form: initialState,
            gramError: null
        }),
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => produce(state, draft => {
            draft[form][key] = value;
        }),
        [WRITE_GRAM]: state => ({
            ...state,
            gram: null,
            gramError: null
        }),
        [WRITE_GRAM_SUCCESS]: (state, { payload: gram }) => ({
            ...state,
            gramError: null,
            gram,
        }),
        [WRITE_GRAM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            gramError: error,
        }),
    },
    initialState
)

export default gramWrite;