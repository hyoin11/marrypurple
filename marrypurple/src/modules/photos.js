import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as photoAPI from '../lib/api/photo';
import { takeLatest } from 'redux-saga/effects';

const [
    PHOTO,
    PHOTO_SUCCESS,
    PHOTO_FAILURE
] = createRequestActionTypes('photo/FIND_BACK_USER'); //MATCH리스트의 액션타입만들어주기.
const UNLOAD_PHOTO = 'photo/UNLOAD_PHOTO';

export const getPhoto = createAction(PHOTO);
export const unloadPhoto = createAction(UNLOAD_PHOTO);

const getPhotoSaga = createRequestSaga(PHOTO, photoAPI.photo);
export function* photoSaga(){
    yield takeLatest(PHOTO, getPhotoSaga);
}

const initialState = {
    photo: null,
    error: null
};

const photo = handleActions (
    {
        [PHOTO_SUCCESS]: (state, { payload: photo }) => ({
            ...state,
            photo
        }),
        [PHOTO_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_PHOTO]: () => initialState,
    },
    initialState
);


export default photo;