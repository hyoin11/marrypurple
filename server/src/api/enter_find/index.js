import Router from 'koa-router';
import * as findCtrl from './find.ctrl';

const find = new Router();

find.post('/', findCtrl.select);    // 선택하고 

export default find;