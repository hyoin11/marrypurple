import Router from 'koa-router';
import * as worldcupCtrl from './worldcupCtrl.ctrl';

const worldcup = new Router();
worldcup.get('/', worldcupCtrl.list);
worldcup.get('/winner/:user_id', worldcupCtrl.winner);

export default worldcup;