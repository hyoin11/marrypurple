import Telepathy from '../../models/telepathy'
import User from '../../models/user'
import Matching from '../../models/matching'

export const mun = async ctx=>{
    console.log('접속유저: ',ctx.state.user);
    const {_id} = ctx.state.user//로그인한아이디
    const { mun, ans} = ctx.request.body; //문제와 답 받아옴(둘다 배열)
    let my_id = await Telepathy.findOne({'user':_id})// 로그인한 아이디로 텔레파시 스키마 정보 불러오기
    const user = await User.findById(_id)

    if(!my_id){//만약 telepathy스키마가 없다면 새로 만들어준다.
        const telepathy = new Telepathy({
            user:_id,
            user_nick: user.user_nick,
            profile_pic: (user.profile_pic)[0],
            questions: mun,
            answers: ans
        })
        try{
            await telepathy.save(); //만든 스키마를 저장.
            my_id = await Telepathy.findOne({'user':_id})
        }catch(e){
            ctx.throw(500,e);
        }
    }

    try{
        const query = {_id: my_id._id}
        await Telepathy.findOneAndUpdate(query, { $set: { questions: mun , answers: ans, user_nick: user.user_nick, profile_pic: (user.profile_pic)[0]} }, {
            new: true
        }).exec()//문제와 답을 스키마에 갱신시켜줌
        ctx.status = 200
        ctx.body = "성공"
    }catch(e){
        ctx.throw(500,e)
    }
}

export const ans = async ctx=>{
    const { _id } = ctx.state.user
    let matched = [_id]
    const query = { 'user': _id }

    try{
        const my_match_list = (await Matching.findOne(query).populate('matched')).matched
        my_match_list.map(list => matched.push(list.user))
        // 카운트 해서 랜덤으로 보여주기
        const userCount = await Telepathy.countDocuments({user:{$nin: matched}}).exec();
        const page = Math.floor(Math.random() * userCount)//랜덤으로 보여주기 위해 랜덤수 만들기

        const question = await Telepathy. //텔레파시의 문제 꺼내오기
        find({user:{$nin: matched}})
        // const ans_user = (list[0].answers)[0] //1번문제의 답 꺼내온거
        if(question){
            ctx.body = question[page] // 랜덤으로 보여주기
        }else{
            ctx.body = ''
        }
    }catch(e){
        ctx.throw(500,e)
    }
}


// export const ans1 = async ctx=>{
//     const { _id } = ctx.state.user
//     const {ans_user, ans_mine} = ctx.request.body;
//     try{
//         if(ans_user == ans_mine){
//         ctx.status = 200
//         ctx.body = '성공';
//         }else{
//         ctx.status = 300//틀렷을땐이거
//         ctx.body = '틀렸습니다.'
//         }
//     }catch(e){
//         ctx.throw(500,e)
//     }
// }

// export const ans2 = async ctx=>{
//     const { _id } = ctx.state.user
//     const {ans_user, ans_mine} = ctx.request.body;
//     try{
//         if(ans_user == ans_mine){
//             ctx.status = 200
//             ctx.body = '성공';
//             }else{
//             ctx.status = 300//틀렷을땐이거
//             ctx.body = '틀렸습니다.'
//             }
//     }catch(e){
//         ctx.throw(500,e)
//     }
// }

export const ans3 = async ctx=>{
    const { _id } = ctx.state.user
    const {user_id} = ctx.request.body; //상대방 id가져올땐 telepathy안의 user에서 가져와야함
    const query = { 'user': _id }
    const query2 = { 'user': user_id }
    try{
        const matching_user_id = (await Matching.findOne(query2))._id // 상대방의 matching의 _id
        const matching_my_id = (await Matching.findOne(query))._id // 내 matching의 _id

        await Matching.findOneAndUpdate(query, { $push: { matched: matching_user_id, like: matching_user_id, pass: matching_user_id } }, {
            new: true
        }).exec()//내 매치 pass like 에다가 상대방 id넣기
        await Matching.findOneAndUpdate(query2, { $push: { matched: matching_my_id, like: matching_my_id, pass: matching_my_id } }, {
            new: true
        }).exec()//상대방의 매치 pass like 에다가 내 id 넣기
        ctx.status = 200
        ctx.body = '성공';
        
    }catch(e){
        ctx.throw(500,e)
    }
}
export const test = async ctx=>{
    const _id = '5fb7748188c18c0e34a0e4a5';
    let matched = [_id]
    const query = { 'user': _id }

    try{
        const my_match_list = (await Matching.findOne(query).populate('matched')).matched
        my_match_list.map(list => matched.push(list.user))
        // 카운트 해서 랜덤으로 보여주기
        const userCount = await Telepathy.countDocuments({user:{$nin: matched}}).exec();
        const page = Math.floor(Math.random() * userCount)//랜덤으로 보여주기 위해 랜덤수 만들기

        const question = await Telepathy. //텔레파시의 문제 꺼내오기
        find({user:{$nin: matched}})
        // const ans_user = (list[0].answers)[0] //1번문제의 답 꺼내온거
        if(question){
            ctx.body = question[page] // 랜덤으로 보여주기
        }else{
            ctx.body = ''
        }
    }catch(e){
        ctx.throw(500,e)
    }
}