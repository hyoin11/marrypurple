// import { createAction, handleActions } from 'redux-actions';
<<<<<<< HEAD
// import produce from "immer";
=======
<<<<<<< HEAD
// import produce from "immer";
=======
>>>>>>> 2cf6053e159fdbe7f9dc9fd45da53964834f02f0
>>>>>>> ed61bf815cc78cfe92d3a2be8cd8ef64f918a0a7
// import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
// import * as authAPI from '../lib/api/auth';
// import { takeLatest } from 'redux-saga/effects';

// const CHANGE_FIELD = "auth/CHANGE_FIELD";
// const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
// const [
//     READ_PROFILE,
//     READ_PROFILE_SUCCESS,
//     READ_PROFILE_FAILURE
// ] =createRequestActionTypes('profile/READ_PROFILE');
// const UNLOAD_PROFILE = 'profile/UNLOAD_PROFILE'; 

// const [
//     UPDATE_PROFILE,
//     UPDATE_PROFILE_SUCCESS,
//     UPDATE_PROFILE_FAILURE
// ] =createRequestActionTypes('profile/UPDATE_PROFILE'); //프로필 수정


// export const changeField = createAction(
//     CHANGE_FIELD,
//     ({ form, key, value }) => ({
//         form,
//         key,
//         value,
//     }),
// );

// export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

// export const readProfile = createAction(READ_PROFILE, _id=>_id);
// export const updateProfile = createAction(UPDATE_PROFILE,({_id,brief_intro,address,school,personality,fav_song,fav_movie,fav_food,profile_pic})=>({_id,brief_intro,address,school,personality,fav_song,fav_movie,fav_food,profile_pic}));
// export const unloadProfile = createAction(UNLOAD_PROFILE);

// const readProfileSaga = createRequestSaga(READ_PROFILE,authAPI.readProfile);
// const updateProfileSaga = createRequestSaga(UPDATE_PROFILE,authAPI.update);

// export function* profileSaga(){
//     yield takeLatest(READ_PROFILE,readProfileSaga);
//     yield takeLatest(UPDATE_PROFILE,updateProfileSaga);
// }
// const initialState={
//     updateProfile:{
//         brief_intro:'',
//         address:'',
//         school:'',
//         personality:'',
//         fav_song:'',
//         fav_movie:'',
//         fav_food:'',
//         profile_pic:'',
//     },
//     user:null,
//     error:null
// }
// const auth = handleActions(
//     {
//     [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
//         produce(state, (draft) => {
//         draft[form][key] = value;
//         }),
//       //첫번째 파라미터에는 수정하고 싶은 상태
//       //두번째 파라미터에는 어떻게 업데이트 할 지 정의하는 함수
//     [INITIALIZE_FORM]: (state, { payload: form }) => ({
//         ...state,
//         [form]: initialState[form],
//         authError: null,
//     }),
//         [READ_PROFILE_SUCCESS]:(state,{payload:auth})=>({
//             ...state,
//             auth
//         }),
//         [READ_PROFILE_FAILURE]:(state,{payload:error})=>({
//             ...state,
<<<<<<< HEAD
//             authError:error
=======
<<<<<<< HEAD
//             authError:error
=======
//             error
>>>>>>> 2cf6053e159fdbe7f9dc9fd45da53964834f02f0
>>>>>>> ed61bf815cc78cfe92d3a2be8cd8ef64f918a0a7
//         }),
//         [UNLOAD_PROFILE]:()=>initialState,
//         [UPDATE_PROFILE]:state =>({
//             ...state,
//             authError:null
//         }),
//         [UPDATE_PROFILE_SUCCESS]:(state,{payload:auth})=>({
//             ...state,
//             authError: null,
//             auth,
//         }),
<<<<<<< HEAD
//         [UPDATE_PROFILE_FAILURE]:(state,{payload:error})=>({
=======
<<<<<<< HEAD
//         [UPDATE_PROFILE_FAILURE]:(state,{payload:error})=>({
=======
//         [UPDATE_PROFILE_FAILURE]:(state,{payload:auth})=>({
>>>>>>> 2cf6053e159fdbe7f9dc9fd45da53964834f02f0
>>>>>>> ed61bf815cc78cfe92d3a2be8cd8ef64f918a0a7
//             ...state,
//             authError:error
//         }),
//     },
//     initialState
// );

// export default auth;