import FAQ from '../../models/faq';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const write = async ctx => {
    const schema = Joi.object().keys({
        question: Joi.string().required(),
        anwser: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { question, anwser } = ctx.request.body;
    const post = new FAQ({
        question,
        anwser
    });
    try{
        await post.save();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const list = async ctx => {
    try{
        const posts = await FAQ.find().sort({ _id: -1 }).exec();
        ctx.body = posts.map(post => post.toJSON());
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = async (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    try{
        const post = await FAQ.findById(id).exec();
        ctx.body = post.toJSON();
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    const { id } = ctx.params;
    console.log(id);
    try{
        await FAQ.findByIdAndRemove(id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const update = async ctx => {
    const { id } = ctx.params;
    // console.log(id);
    console.log(ctx.request.body);

    const schema = Joi.object().keys({
        question: Joi.string(),
        anwser: Joi.string()
    });

    const result = schema.validate(ctx.request.body);
    // console.log(result);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try{
        const post = await FAQ.findByIdAndUpdate(id, ctx.request.body, {
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
};