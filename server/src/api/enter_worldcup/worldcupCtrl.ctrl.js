import mongoose from 'mongoose';
import Joi from '@hapi/joi';
import User from '../../models/user';

export const list = async ctx => {
    console.log('/worldcup list 호출');

    const my_id = ctx.state.user._id;

    try {
        let userList = await User.find().exec();
        userList = userList.map(user => user).filter(user => user._id != my_id).sort(function() {
            return Math.random() - 0.5;
        }).splice(0, 4);

        // console.log('유저리스트',userList);
        ctx.body = userList;
    }catch(e){
        ctx.throw(500, e);
    }
}

export const winner = async ctx => {
    console.log('/worldcup winner 호출');

    const { user_id } = ctx.params;
    try {
        const user = await User.findById(user_id).exec();
        // console.log('승자', user);
        ctx.body = user.toJSON();
    }catch(e){
        ctx.throw(500,e);
    }
}