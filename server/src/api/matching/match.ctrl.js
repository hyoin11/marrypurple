import Matching from '../../models/matching';
import User from '../../models/user';
import mongoose from 'mongoose';

//매칭 리스트 보여주기
export const list = async ctx=>{
    console.log('접속유저: ',ctx.state.user)
    const login_id = ctx.state.user._id//로그인한아이디

    let my_id = await Matching.findOne({'user':login_id})//token에 저장된 내 정보로 matching스키마가져오기
    const user = await User.findById(login_id)//user안에 id검색하여 상수에저장
    if(!login_id){//토큰에 저장된 아이디 없으면 오류페이지.
        ctx.status = 400;
        return
    }
    if(!my_id){//만약 matching스키마가 없다면 새로 만들어준다.
        const matching = new Matching({
            user:login_id,
            nick: user.user_nick,
            match_gender: user.match_gender,
            gender: user.user_gender,
            personality: user.personality
        })
        try{
            await matching.save(); //포스트를 저장하는 문법.
            my_id = await Matching.findOne({'user':login_id})
            await User.findOneAndUpdate({'_id':login_id}, { $set: { match: my_id }})
        }catch(e){
            ctx.throw(500,e);
        }
    }

    //matching 스키마가 있다면 그대로 진행해준다.
    try{
        //선호하는 성별을 불러온다.
        let prefer_gender = my_id.match_gender
        // 내가 패스한 사람들을 불러온다.
        const pass = (await Matching.findOne({'user':login_id}).populate('pass','user')).pass
        const pass_arr = pass.map(user => user._id.toJSON())

        // 그사람들 제외하고 카운트
        const userCount = await User.countDocuments({match:{$nin: pass_arr}, _id:{$ne: login_id},  user_gender: prefer_gender=='both'? {$in: [ 'male', 'female' ]} : prefer_gender}).exec();
        const page = Math.random() * userCount + 1//랜덤으로 보여주기 위해 랜덤으로 페이지 정하기

        // 나와 패스 누른사람을 제외하고 원하는 성별만 보여주기
        const list = await User.
        find({match:{$nin: pass_arr}, _id:{$ne: login_id},  user_gender: prefer_gender=='both'? {$in: [ 'male', 'female' ]} : prefer_gender})
        .limit(1)
        .skip(page-1).exec()
        //슈퍼라이크를 받은경우
        const got_super = await Matching.findOne({'user':login_id}).populate('superLike')
        // console.log('나를 슈퍼라이크 한 사람: ',got_super.superLike)
        if(got_super.superLike[0] == null){
            ctx.body = list.map(user => user.toJSON()) 
        }else{
            await Matching.findOneAndUpdate({'user':login_id},{$pull:{superLike:got_super.superLike[0]._id}})
            ctx.body = await User.findOne({'match':got_super.superLike[0]._id})
        }
    }catch(e){
        ctx.throw(500,e);
    }
}

//좋아요 눌렀을때
export const like = async ctx=>{
    const login_id = ctx.state.user._id//로그인한아이디

    let my_id = await Matching.findOne({'user':login_id})
    const { id } = ctx.request.body//상대방 id정보
    const query = { '_id': my_id._id }
    const query2 = { '_id': id }
    
    try{
        // 내 정보 안에 있는 like와 pass에 상대방의 정보를 추가한다.
        await Matching.findOneAndUpdate(query, { $push: { like: id } }, {
            new: true
        }).exec() // like에 넣음
        await Matching.findOneAndUpdate(query, { $push: { pass: id } }, {
            new: true
        }).exec() // pass에도 넣음

        //상대방의 like를 살펴보기
        const another_like_check = (await Matching.findOne(query2).populate('like')).like
        const another_like_check_arr = another_like_check.map(user => user._id.toJSON())

        if(another_like_check_arr.includes(my_id._id)){//상대방도 나를 like하고있다면
            await Matching.findOneAndUpdate(query, { $push: { matched: id } }, {
                new: true
            }).exec()//내 매치에다가 상대방 id넣기
            await Matching.findOneAndUpdate(query2, { $push: { matched: my_id._id } }, {
                new: true
            }).exec()//상대방의 매치에다가 내 id 넣기
        }
        ctx.status= 202 // 이거 나오면 매치로 연결해준다고 생각
        ctx.body = '성공'
    }catch(e){
        ctx.throw(500,e)
    }
}

//넘기기 눌렀을때
export const pass = async ctx=>{
    const login_id = ctx.state.user._id//로그인한아이디

    const my_id = await Matching.findOne({'user':login_id})
    const { id } = ctx.request.body//내 id, 상대방 id정보
    const query = { 'user': login_id }
    
    try{
        // 내 정보 안에 있는 pass에 상대방의 정보를 추가한다.
        await Matching.findOneAndUpdate(query, { $push: { pass: id } }, {
            new: true
        }).exec()
        // 내정보 안에 있는 back에 상대방 정보를 갱신한다. 뒤로가기할때 불러올 정보다
        await Matching.findOneAndUpdate(query, { $set: { back: id } }, {
            new: true
        }).exec()

        ctx.status= 202 // 이거 나오면 매치로 연결해준다고 생각
        ctx.body = '성공'
    }catch(e){
        ctx.throw(500,e)
    }
}

//슈퍼라이크
export const sendSuper = async ctx=>{
    const login_id = ctx.state.user._id//로그인한아이디

    const my_id = await Matching.findOne({'user':login_id})
    const { id } = ctx.request.body//상대방id
    const query = { '_id': my_id._id }
    const query2 = { '_id': id }
    
    try{
        // 내 정보 안에 있는 like와 pass에 상대방의 정보를 추가한다.
        await Matching.findOneAndUpdate(query, { $push: { like: id } }, {
            new: true
        }).exec() // like에 넣음
        await Matching.findOneAndUpdate(query, { $push: { pass: id } }, {
            new: true
        }).exec() // pass에도 넣음

        //상대방의 like를 살펴보기
        const another_like_check = (await Matching.findOne(query2).populate('like')).like
        const another_like_check_arr = another_like_check.map(user => user._id.toJSON())

        //상대방의 superlike에 내 id를 넣는다(들어간 id는 이벤트 실행 후 id는 삭제된다)
        await Matching.findOneAndUpdate(query2, { $push: { superLike: my_id._id } }, {
            new: true
        }).exec()

        if(another_like_check_arr.includes(my_id._id)){//상대방도 나를 like하고있다면
            await Matching.findOneAndUpdate(query, { $push: { matched: id } }, {
                new: true
            }).exec()//내 매치에다가 상대방 id넣기
            await Matching.findOneAndUpdate(query2, { $push: { matched: my_id._id } }, {
                new: true
            }).exec()//상대방의 매치에다가 내 id 넣기
        }

        ctx.status= 202 // 이거 나오면 매치로 연결해준다고 생각
        ctx.body = '성공'

    }catch(e){
        ctx.throw(500,e)
    }
}

//되돌리기

export const back = async ctx=>{
    const login_id = ctx.state.user._id//로그인한아이디

    const user = await User.findById(login_id)//user안에 id검색하여 상수에저장
    try{
        const back_user = await Matching.findOne({'user':login_id}).populate('back')
        if(user.premium == 'no_sub'){
            ctx.status = 402
            ctx.body="결제를하세요"
        }else{//했으면 볼 수 있다.
            if(back_user.back){
                ctx.body = await User.findOne({'match' : back_user.back.id})  //이전 유저 정보
                await Matching.findOneAndUpdate({'user':login_id}, { $set: { back: null} })
            }else{
            }
        }
    }catch(e){
        ctx.throw(500,e)
    }
}

//나를 좋아요 한 사람 보기
export const checkLikeMe = async ctx=>{
    const login_id = ctx.state.user._id//로그인한아이디
    // const login_id = '5fb7748188c18c0e34a0e4a5';
    const my_id = await Matching.findOne({'user':login_id})
    let likeMeList = []
    try{
        const list = await Matching.find({ like: my_id._id })//내 id포함하고있는것 검색
        list.map(user => likeMeList.push(user._id))
        const show_list = await User.find({match:{$in:likeMeList}})
        ctx.body = show_list.map(list => list.toJSON())
    }catch(e){
        ctx.throw(500,e)
    }
}

// 신고하기
export const report = async ctx=>{
    const {reason} = ctx.request.body; //신고한 이유
    const { id } = ctx.request.body//상대방id(user스키마의 _id)

    try{
        await User.findOneAndUpdate({'_id':id},{$push:{reported: reason}},{new:true}).exec()
        ctx.body = '성공'
    }catch(e){
        ctx.throw(500,e)
    }
}
