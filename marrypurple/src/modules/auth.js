import { createAction, handleActions } from "redux-actions";
//immer = state의 불변성 관리 해주는 모듈
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "auth/REGISTER",
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN",
);
const [FINDPW,FINDPW_SUCCESS,FINDPW_FAILURE] = createRequestActionTypes("auth/FINDPW");

const [
  READ_PROFILE,
  READ_PROFILE_SUCCESS,
  READ_PROFILE_FAILURE
] =createRequestActionTypes('profile/READ_PROFILE');

const UNLOAD_PROFILE = 'profile/UNLOAD_PROFILE'; 

const [
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE
] =createRequestActionTypes('profile/UPDATE_PROFILE'); //프로필 수정

const [CHANGE_PW,CHANGE_PW_SUCCESS,CHANGE_PW_FAILURE] =createRequestActionTypes('profile/CHANGE_PW');
//메일보내기
const [SENDMAIL,SENDMAIL_SUCCESS,SENDMAIL_FAILURE]= createRequestActionTypes('auth/SENDMAIL')

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
//메일보내기 
export const sendmail = createAction(SENDMAIL,({user_email,number})=>({user_email,number}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const findpw = createAction(FINDPW,({user_email})=>({
  user_email,
}));
export const changepw = createAction(CHANGE_PW,({user_pw})=>({user_pw}));
export const register = createAction(REGISTER, ({ user_email, user_pw,user_age,user_gender,user_nick,profile_pic }) => ({
    user_email,
    user_pw,
    user_age,
    user_gender,
    user_nick,
    profile_pic

}));
export const login = createAction(LOGIN, ({ user_email, user_pw }) => ({
    user_email,
    user_pw,
}));
export const readProfile = createAction(READ_PROFILE, _id=>_id);
export const updateProfile = createAction(UPDATE_PROFILE,({_id,brief_intro,address,school,personality,fav_song,fav_movie,fav_food,profile_pic})=>({_id,brief_intro,address,school,personality,fav_song,fav_movie,fav_food,profile_pic}));
export const unloadProfile = createAction(UNLOAD_PROFILE);

const changepwSaga = createRequestSaga(CHANGE_PW,authAPI.changepw);
const findpwSaga = createRequestSaga(FINDPW, authAPI.findpw);
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const readProfileSaga = createRequestSaga(READ_PROFILE,authAPI.readProfile);
const updateProfileSaga = createRequestSaga(UPDATE_PROFILE,authAPI.updateProfile);
const sendmailSaga = createRequestSaga(SENDMAIL,authAPI.sendmail);
export function* authSaga() {
  yield takeLatest(FINDPW,findpwSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(READ_PROFILE,readProfileSaga);
  yield takeLatest(UPDATE_PROFILE,updateProfileSaga);
  yield takeLatest(CHANGE_PW,changepwSaga);
  yield sendmailSaga(SENDMAIL,sendmailSaga);
}

const initialState = {
  register: {
    user_email: "",
    user_pw: "",
    user_gender: "",
    user_age:"",
    user_nick:"",
    profile_pic: [],
  },
  findpw:{
    user_email:""
  },
  login: {
    user_email: "",
    user_pw: "",
  },
  readProfileSaga:{
    brief_intro:'',
    address:'',
    school:'',
    personality:[],
    fav_song:'',
    fav_movie:'',
    fav_food:'',
    profile_pic:[],
  },
  updateProfile:{
    brief_intro:'',
    address:'',
    school:'',
    personality:[],
    fav_song:'',
    fav_movie:'',
    fav_food:'',
    profile_pic:[],
},
sendmail:{
  user_email:'',
  number:'',
},
changepw:{
  user_pw:'',
},
  user:null,
  error:null
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    //첫번째 파라미터에는 수정하고 싶은 상태
    //두번째 파라미터에는 어떻게 업데이트 할 지 정의하는 함수
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [FINDPW_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
  }),
  [FINDPW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
  }),
  [CHANGE_PW]:state =>({
    ...state,
    auth:null,
    authError: null
  }),
  [CHANGE_PW_SUCCESS]:(state,{payload:auth})=>({
    ...state,
    authError:null,
    auth
  }),
  [CHANGE_PW_FAILURE]:(state,{payload:error})=>({
    ...state,
    authError:error
  }),
  [UNLOAD_PROFILE]:()=>initialState,
  [SENDMAIL_SUCCESS]:(state,{payload:auth})=>({
    ...state,
    authError: null,
    auth,
  }),
  [SENDMAIL_FAILURE]:(state,{payload:error})=>({
    ...state,
    authError: error,
  }),

  [READ_PROFILE_SUCCESS]:(state,{payload:readProfileSaga})=>({
    ...state,
    readProfileSaga
  }),
  [READ_PROFILE_FAILURE]:(state,{payload:error})=>({
    ...state,
    authError:error
  }),
  [UPDATE_PROFILE]:state =>({
    ...state,
    auth:null,
    authError:null
  }),
  [UPDATE_PROFILE_SUCCESS]:(state,{payload:auth})=>({
    ...state,
    authError: null,
    auth,
  }),
  [UPDATE_PROFILE_FAILURE]:(state,{payload:error})=>({
    ...state,
    authError:error
  }),
},
  initialState,
  );
  
export default auth;
