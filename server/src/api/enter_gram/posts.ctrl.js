import Gram from '../../models/gram';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';
import User from '../../models/user';

const { ObjectId } = mongoose.Types;

function getCurrentDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
}

export const write = async ctx => {
    console.log('/posts write 호출');

    const schema = Joi.object().keys({
        InstaImage: Joi.string().required(),
        content: Joi.string().required(),
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { InstaImage, content } = ctx.request.body;    
    // console.log('content', content, ' InstaImage', InstaImage);
    
    const user_id = ctx.state.user._id; // 현재 로그인된 유저 정보
    const user = await User.findById(user_id);

    const post = new Gram({
        InstaImage: InstaImage,
        content: content,
        comment: [],
        User: {
            user_nick: user.user_nick,
            _id: user._id,
            profile_pic: user.profile_pic[0]
        },
        writeDate: getCurrentDate()
    });
    try{
        await post.save();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const likeList = async ctx => {
    console.log('/posts likeList 호출');

    try{
        const posts = await Gram.find({ showInsta: true }).sort({ likeCount: -1 }).limit(4).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, 0);
    }
}

export const list = async ctx => {
    console.log('/posts list 호출');

    try{
        const posts = await Gram.find({ showInsta: true }).sort({ _id: -1 }).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, e);
    }
};

export const listAll = async ctx => {
    console.log('/posts listAll 호출');

    try{
        const posts = await Gram.find().sort({ _id: -1 }).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = async (ctx) => {
    console.log('/posts read 호출');

    const { post_id } = ctx.params;
    try{
        const post = await Gram.findById(post_id).exec();
        ctx.body = post.toJSON();
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    console.log('/posts remove 호출');

    const { post_id } = ctx.params;
    try{
        await Gram.findByIdAndRemove(post_id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(500, e);
    }
}

export const updateLike = async ctx => {
    console.log('/posts updateLike 호출');

    const { post_id, heart } = ctx.params;

    try{
        const post = await Gram.findById(post_id);
        if(heart == 'plus'){
            console.log('plus');
            post.updateOne({ likeCount: post.likeCount+1, $push: { likeUser: ctx.state.user._id }}).exec();
            ctx.body = post;
        }else{
            console.log('minus');
            post.updateOne({ likeCount: post.likeCount-1, $pull: { likeUser: ctx.state.user._id } }).exec();
            ctx.body = post;
        }
    }catch(e){
        ctx.throw(500, e);
    }
}

export const updateComment = async ctx => {
    console.log('/posts updateComment 호출');
    
    const schema = Joi.object().keys({
        _id: Joi.string(),
        nickName: Joi.string(),
        text: Joi.string()
    });

    const result = schema.validate(ctx.request.body);
    
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { _id, nickName, text } = ctx.request.body;

    try{
        const post = await Gram.findById(_id);
        post.updateOne({ $push: {comment: {nickName: nickName, text: text }}}).exec();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
}

export const updateHide = async ctx => {
    console.log('/posts updateHide 호출');

    const { post_id } = ctx.params;

    try{
        const post = await Gram.findById(post_id);
        post.updateOne({ showInsta: false }).exec();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
}

export const updateShow = async ctx => {
    console.log('/posts updateShow 호출');

    const { post_id } = ctx.params;

    try{
        const post = await Gram.findById(post_id);
        post.updateOne({ showInsta: true }).exec();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
}