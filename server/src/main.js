require('dotenv').config();
//dsjhdiasjdaskldjaskld
const fs = require('fs')
const serve   = require('koa-static');

// const path = require('path');

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
// import createFakeData from './createFakeData';
import jwtMiddleware from './lib/jwtMiddleware';

//소켓
import SocketIo from 'socket.io';
import socketEvents from './socket.js';
//패스포트
let passport = require('passport');
let flash = require('flash');
const logger = require('morgan');

const { PORT, MONGO_URL } = process.env;

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useFindAndModify: false }).then(() => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.log(e);
});

const app = new Koa();
const router = new Router();
app.use((serve(__dirname + '/uploads')))

router.use('/api', api.routes());
app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());


// router.use('/uploads',serve(path.resolve(__dirname, './api/enter_gram/uploads')));


var readFileThunk = function(src) {
    return new Promise(function (resolve, reject) {
        fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
        if(err) return reject(err);
        resolve(data);
    });
    });
}
app.use(serve(__dirname + '/'));
router.get('/contacts', async ctx => {
    ctx.body = await readFileThunk(__dirname + '/message.html');
})

// Passport 사용 설정
// Passport의 세션을 사용하려면 그 전에 Express의 세션을 사용하는 코드가 있어야 합니다.
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(logger('dev'));

const port = PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})

const io = SocketIo(server); // socket.io와 서버 연결하는 부분
socketEvents(io); // 아까 만든 이벤트 연결