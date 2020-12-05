import Matching from '../../models/matching';
import User from '../../models/user';

export const user = async ctx=>{ //유저리스트
    try{
        const list = await User.find();
        ctx.body = list.map(l => l.toJSON());
    }catch(e){
        ctx.throw(500,e)
    }
}

export const searchByEmail = async ctx => { //이메일로 검색
    const { text } = ctx.request.body //검색하는 문자
    try{
        const list = await User.find({user_email:{$regex: text }});  //문자열에 포함되면 리스트로 가져옴
        ctx.body = list.map(user => user.toJSON())
    }catch(e){
        ctx.throw(500,e)
    }
}

export const searchByGender = async ctx => { //성별로 검색
    const { text } = ctx.request.body //검색하는 문자
    try{
        const list = await User.find({user_gender:{$regex: text }});  //문자열에 포함되면 리스트로 가져옴
        ctx.body = list.map(user => user.toJSON())
    }catch(e){
        ctx.throw(500,e)
    }
}

export const searchByNick = async ctx => { //닉네임으로 검색
    const { text } = ctx.request.body //검색하는 문자
    try{
        const list = await User.find({user_nick:{$regex: text }});  //문자열에 포함되면 리스트로 가져옴
        ctx.body = list.map(user => user.toJSON())
    }catch(e){
        ctx.throw(500,e)
    }
}