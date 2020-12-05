import User from '../../models/user';
import Matching from '../../models/matching';

export const select = async ctx=>{
    try{
        console.log('접속유저: ',ctx.state.user);
        const login_id = ctx.state.user._id; // 로그인한아이디(User스키마)

        const me = await Matching.findOne({'user':login_id})
        const passed = me.pass//내가 pass한 사람
        const my_id = me._id//내 _id(Matching)
        const {styles} = ctx.request.body; // 사용자가 선택한 이상형들
    
        // 선호하는 성별
        const prefer_gender = (await Matching.findOne({user: login_id})).match_gender
    
        // matchedCount: 유저들의 personality에 사용자가 선택한 이상형들을 포함하는 것이 몇개인지
        // 선호하는 성별이 포함되어야한다
        // pass된 사람은 뺀다
        // 나를 검색하지 않는다
        let list = await Matching.aggregate([{ 
            $match: { personality: { $in: styles }, gender: prefer_gender=='both'? {$in: [ 'male', 'female' ]} : prefer_gender, $and:[{_id:{$ne:my_id}}, {_id:{$nin: passed }}] }
            }, {$project:{matchedCount:{
            $size: { 
            "$setIntersection": [styles, '$personality' ] 
            }
        }}}])
        console.log('list', list);
        
        //가장 많은 이상형을 가진 유저의 _id 순서로 정렬
        list = list.sort(function(a, b) {
            return parseFloat(b.matchedCount) - parseFloat(a.matchedCount);
        })
        // 리스트안에 값이 있으면 꺼내준다.
        let my_style = list[0]? list[0]: null
    
        // 내이상형 유저 정보 보냄
        const have = await User.findOne({match:my_style})
        const dontHave = {
            address: "",
            authToken: "",
            brief_intro: "",
            fav_food: "",
            fav_movie: "",
            fav_song: "",
            hashedUser_pw: "",
            login_time: "",
            match: "",
            match_gender: "both",
            personality: [],
            premium: "",
            profile_pic: ["http://localhost:4000/annonymous.png"],
            provider: "",
            regdate: "",
            school: "",
            stopAccount: "",
            user_age: 0,
            user_email: "",
            user_gender: "",
            user_nick: "사용자를 찾을 수 없습니다.",
            __v: 0,
            _id: "cantFind"
        }
        if(have){
            ctx.body = have
        }else{
            ctx.body = dontHave
        }
    }catch(e){
        ctx.throw(500,e);
    }
}
