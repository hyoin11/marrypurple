import Router from 'koa-router';
import * as matchCtrl from './match.ctrl';

const match = new Router();

match.post('/', matchCtrl.list);                 // 매칭되는 회원 보여주기
match.patch('/like', matchCtrl.like);           // 라이크 눌렀을 때
match.patch('/super', matchCtrl.sendSuper)      // 슈퍼라이크 눌렀을 때
match.patch('/pass', matchCtrl.pass);           // 넘기기 눌렀을 때
match.get('/back', matchCtrl.back);             // (유료) 되돌리기 눌렀을 때
match.get('/who', matchCtrl.checkLikeMe)        // 나를 라이크 한 사람 보기
match.post('/report', matchCtrl.report)        // 신고하기

export default match;
