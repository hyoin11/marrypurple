import Joi from "@hapi/joi";
import User from "../../models/user";
import nodemailer from 'nodemailer';
import Matching from '../../models/matching';

export const register = async (ctx) => {
  console.log('회원가입중')

  const user_email = ctx.request.body.user_email;
  const user_pw = ctx.request.body.user_pw;
  const user_gender= ctx.request.body.user_gender;
  const user_age = ctx.request.body.user_age;
  const user_nick = ctx.request.body.user_nick;
  const profile_pic = ctx.request.body.profile_pic;
  

  try {
    const exists = await User.findByUser_email(user_email);
    if (exists) {
      ctx.status = 409;
      return;
    }else{
      const user = new User({
        user_email: user_email,
        user_gender: user_gender,
        user_age: user_age,
        user_nick: user_nick,
        profile_pic: profile_pic,
      });
      await user.setUser_pw(user_pw);
      await user.save();
  
      ctx.body = user.serialize();
  
      const token = user.generateToken();
      ctx.cookies.set("access_token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async (ctx) => {
  console.log("읽기!!")
  const user_id = ctx.state.user._id;
  console.log(user_id);
  try{
      const post = await User.findById(user_id).exec();
      ctx.body = post;
  }catch(e){
      ctx.throw(500, e);
  }
};


export const login = async (ctx) => {
  // 로그인
  const { user_email, user_pw} = ctx.request.body;

  if (!user_email || !user_pw) {
    ctx.status = 401;
    return;
  }
  try {
    const user = await User.findByUser_email(user_email);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkUser_pw(user_pw);
    if (!valid) {
      ctx.status = 401; //401 인증되지 않음
      return;
    }

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};


export const findpw = async (ctx) => {
  // 비밀번호찾기
  const { user_email } = ctx.request.body;
  if (!user_email) {
    ctx.status = 401;
    return;
  }
  try {
    const user = await User.findByUser_email(user_email);
    if (!user) {
      ctx.status = 401;
      return;
    };
    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set("access_token",token,{
      maxAge: 60*60,
      httpOnly:true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

//비밀번호 수정
export const changePw = async (ctx) => { //특정필드만 수정
  console.log('비밀번호 수정');
  
  

  const schema = Joi.object().keys({
    user_pw: Joi.string(),
  });
  const result = schema.validate(ctx.request.body);

  if(result.error){
      ctx.status = 400;
      ctx.body = result.error;
      return;
  }
  const user_pw = ctx.request.body.user_pw;
  try{
    const user = await User.updateOne({$push:{user_pw:user_pw}}).exec();
    // await user.setUser_pw(user_pw);
      // if(!user){
      //     ctx.status = 404;
      //     return;
      // }
      ctx.body = user;
  }catch(e){
      ctx.throw(500, e);
  }
}



export const check = async (ctx) => {
  console.log('로그인유저123', ctx.state);
  // 로그인 상태 확인
  // const { user } = ctx.state;
  const user = await User.findById(ctx.state.user._id);
  console.log(user)
  if (!user) {
    ctx.status = 401;
    return;
  }

  ctx.body = user.toJSON();
  user.login_time = Date.now();
};

export const logout = async (ctx) => {
  // 로그아웃
  ctx.cookies.set("access_token");
  ctx.status = 204;
};

//회원 탈퇴
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await user.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

//프로필수정
export const profileUpdate = async (ctx) => {
  
  console.log("프로필수정중")

  const user_id = ctx.state.user._id;
  

  // const schema = Joi.object().keys({
  //   brief_intro: Joi.string(),
  //   address: Joi.string(),
  //   school: Joi.string(),
  //   personality: Joi.array().items(Joi.string()),
  //   fav_song: Joi.string(),
  //   fav_movie: Joi.string(),
  //   fav_food: Joi.string(),
  //   profile_pic: Joi.array().items(Joi.string()),
  // });

  // const result = schema.validate(ctx.request.body);

  // if (result.error) {
  //   ctx.status = 400;
  //   ctx.body = result.error;
  //   return;
  // }
  // const {brief_intro,address,school,personality,fav_song,fav_movie,fav_food,profile_pic} = ctx.request.body;
  // console.log("Dfasdfsdafaf" +address)
  const nextData = { ...ctx.request.body };

  try{
    const user = await User.findByIdAndUpdate(user_id, nextData, {new: true}).exec();

    const post = await Matching.findOneAndUpdate({user: user_id}, {personality: ctx.request.body.personality}, {new: true}).exec();
      
    // post.updateOne({ $push:{brief_intro:brief_intro,address:address,school:school,personality:personality,fav_song:fav_song,fav_movie:fav_movie,fav_food:fav_food,profile_pic:profile_pic}}).exec();
    if(!user){
        ctx.status = 404;
        return;
    }

    if(!post){
      ctx.status = 404;
      return;
  }

    // const profile_pic = [{
    //   key:ctx.state.user._id,
    //     name:ctx.state.user._id
    // }]
    //   const user2 = await User.update({"_id" :user_id ,"items":{ $not:{$elemMatch:profile_pic[1]}}},{$addToSet:{"items":{$each:profile_pic}}});
      
    //   if(!user2){
    //     ctx.status = 404;
    //     return;
    //   }
      await user.save();
      // ctx.body = user2;
    
    ctx.body = user;
}catch(e){
    ctx.throw(500, e);
}
}
//사진 추가
export const addPic = async ctx =>{
  console.log("사진추가가가가가")
  try{
    for(i=0; i<9; i++){

      const user = await User.update({"profile_pic":{ $not:{$elemMatch:categories[i]}}},{$addToSet:{"profile_pic":{$each:categories}}});
      
      if(!user){
        ctx.status = 404;
        return;
      }
      await user.save();
      ctx.body = user;
    }
    }catch(e){
      ctx.throw(500,e)
    }
}
//sns 회원가입
export const snsRegister = async (ctx) => {
  const { id } = ctx.params;
  

  const schema = Joi.object().keys({
    user_gender: Joi.string(),
    user_age:Joi.number(),
    user_nick: Joi.string(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  // const profile_pic = ctx.req.files[0].filename;
  const nextData = { ...ctx.request.body };
  try{
    const user = await User.findByIdAndUpdate(id,nextData,{new: true}).exec(); //new : true 업데이트된값을 리턴 false는 바뀌기전내용을 리턴
    // const user2 = await User.findByIdAndUpdate(id,profile_pic,{new: true}).exec();
    if(!user){
        ctx.status = 404;
        return;
    }
    
    ctx.body = user;

}catch(e){
    ctx.throw(500, e);
}

}




