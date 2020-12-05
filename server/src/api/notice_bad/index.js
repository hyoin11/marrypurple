import Router from 'koa-router';
import * as badBoardCtrl from './badBoard.ctrl';

const badBoard = new Router();

badBoard.get('/report', badBoardCtrl.reportList);

badBoard.get('/', badBoardCtrl.list);
badBoard.post('/', badBoardCtrl.write);

badBoard.get('/:bad_id', badBoardCtrl.read);
badBoard.delete('/:bad_id', badBoardCtrl.remove);
badBoard.patch('/', badBoardCtrl.update);

export default badBoard;