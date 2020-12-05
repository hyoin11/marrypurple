import User from '../../models/user';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const list = async ctx => {
    ctx.body = '결제목록'
};

export const update = async ctx => {
    console.log('/payment update 호출');

    const _id = ctx.state.user._id;

    const schema = Joi.object().keys({
        premium: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try{
        const post = await User.findByIdAndUpdate(_id, ctx.request.body, {
            new: true
        }).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
}