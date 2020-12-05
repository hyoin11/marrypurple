import Router from 'koa-router';
import * as sideCtrl from './side.ctrl';

const side = new Router();
side.patch('/wantGender', sideCtrl.updateGender);

export default side;