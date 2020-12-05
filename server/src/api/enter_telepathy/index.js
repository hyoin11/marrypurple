import Router from 'koa-router';
import * as telepathyCtrl from './telepathy.ctrl';

const telepathy = new Router();

telepathy.patch('/', telepathyCtrl.mun);        // 문제 선택완료
telepathy.get('/ans', telepathyCtrl.ans);       // 답변
telepathy.get('/test', telepathyCtrl.test);       // 답변
// telepathy.patch('/ans1', telepathyCtrl.ans1);    // 답변선택1
// telepathy.patch('/ans2', telepathyCtrl.ans2);    // 답변선택2
telepathy.patch('/ans3', telepathyCtrl.ans3);    // 답변선택3

export default telepathy;