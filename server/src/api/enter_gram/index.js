import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
// import koaBody from 'koa-body';
import koaMulter from 'koa-multer';

const path = require('path');
// const multer = require('multer');

let storage = koaMulter.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'src/uploads');
    },
    filename: (req, file, callback) => {
        let extension = path.extname(file.originalname);
        let basename = path.basename(file.originalname, extension);
        callback(null, basename + "_" + Date.now() + extension);
    }
});

let upload = koaMulter({
    storage: storage,
    limits: {
        files: 1,
        fileSize: 1024 * 1024 * 1024
    }
});

const posts = new Router();
posts.get('/like', postsCtrl.likeList);
posts.get('/', postsCtrl.list);
posts.get('/all', postsCtrl.listAll);

posts.post('/', upload.single('file'), postsCtrl.write);

posts.get('/:post_id', postsCtrl.read);
posts.delete('/:post_id', postsCtrl.remove);
posts.patch('/like/:post_id/:heart', postsCtrl.updateLike);
posts.patch('/comment', postsCtrl.updateComment);
posts.patch('/hide/:post_id', postsCtrl.updateHide);
posts.patch('/show/:post_id', postsCtrl.updateShow);

export default posts;