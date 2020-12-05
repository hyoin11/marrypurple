import Router from 'koa-router';
import * as adminCtrl from './admin.ctrl';

const admin = new Router();

admin.get('/user', adminCtrl.user); // 유저리스트
admin.post('/search/nick', adminCtrl.searchByNick);     // 닉네임으로 검색
admin.post('/search/email', adminCtrl.searchByEmail);   // 이메일로 검색
admin.post('/search/gender', adminCtrl.searchByGender); // 성별로 검색

export default admin;