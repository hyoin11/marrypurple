import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import matching, { matchSaga } from "./matching";
import back, {backSaga} from './back';
import ctrl, {ctrlSaga} from './ctrl';
import badList, { badListsSaga } from './badList';
import listGram, { gramListsSaga } from './listGram';
import listLikeGram, { likeGramListsSaga } from './listLikeGram'
import gramWrite, { writeSaga } from './gramWrite';
import gramPost, { postSaga } from './gramPost';
import user, { userSaga } from "./user";
import auth, {authSaga} from "./auth";
import chat, {chatSaga} from "./chat";
import getChat, {chatUserSaga} from './getChtUser';
import getMsg, {MsgSaga} from './getMsg';
import findOne, {findSaga} from './findOne';
import worldcup, { worldcupSaga } from './worldcup'
import telepathy, {telepathySaga} from './telepathy';
import matchLike, { likeListSaga } from './matchLike';
import admin, { adminUserSaga } from './admin';
import report, {reportCombineSaga} from './report';
import payment, { paymentSaga } from './payment';
import side, { sideSaga } from './side';

const rootReducer = combineReducers({ 
    user,
    auth,
    matching,
    loading,
    back,
    ctrl,
    badList,
    listGram,
    listLikeGram,
    gramWrite,
    gramPost,
    chat,
    getChat,
    getMsg,
    findOne,
    worldcup,
    telepathy,
    matchLike,
    admin,
    report,
    payment,
    side
});

export function* rootSaga() {

    yield all([matchSaga(), backSaga(), ctrlSaga(), postSaga(), authSaga(),userSaga(), badListsSaga(), gramListsSaga(), likeGramListsSaga(), writeSaga(), chatSaga(), chatUserSaga(), MsgSaga(), findSaga(), worldcupSaga(), telepathySaga(),likeListSaga(),adminUserSaga(), reportCombineSaga(), paymentSaga(), sideSaga() ]);

}

export default rootReducer;
