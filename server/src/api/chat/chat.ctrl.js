import User from '../../models/user';
import Matching from '../../models/matching';
import Chat from '../../models/chat'

export const chatUser = async ctx=>{
        console.log('접속유저: ',ctx.state.user)
        const login_id = ctx.state.user._id//로그인한아이디

        let my_id = (await Matching.findOne({'user':login_id}).populate('matched')).matched
        if(!my_id){ my_id=[]}
        let arr = my_id.map(user=>user._id.toJSON())

    try{
        ctx.body = await User.find({match: { $in: arr }})
    }catch(e){
        ctx.throw(500,e);
    }
}

export const getUserById = async ctx => {
    const { id } = ctx.params;
    try {
      const user = await User.findOne({match:id}).exec();
      if(!user){
        ctx.status = 404;
        return;
      }
      ctx.body = user.toJSON();
    }catch(e){
      ctx.throw(500, e);
    }
  };

export const getChatInfo = async ctx => {
  const {sender, recepient} = ctx.request.body;
  try{
    const user = await Chat.find({users: { $in: [[sender,recepient],[recepient,sender]]}}).exec();
    if(!user){
      ctx.status = 404;
      return
    }
    ctx.body = user.map(msg => msg.toJSON());
  }catch(e){
    ctx.throw(500, e);
  }
}