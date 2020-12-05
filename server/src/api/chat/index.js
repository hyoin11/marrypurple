import Router from 'koa-router';
import * as chatCtrl from './chat.ctrl';

const chat = new Router();

chat.get('/', chatCtrl.chatUser);
chat.post("/:id", chatCtrl.getUserById);
chat.patch('/send',chatCtrl.getChatInfo);

export default chat;