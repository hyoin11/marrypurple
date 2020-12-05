import React from 'react';
import '../../lib/styles/matchList.scss';
import { Link } from 'react-router-dom';

function Chatt({list, user}){
    return(
        <>
            <Link to={{ pathname:`/chat`, data: list, myInfo: user }} ><li className="message_listP">
            <div className="message_listP_wrap">
                <img src={(list.profile_pic)[0]} style={{width:"80px", height:"80px", marginLeft:"20px", borderRadius:"50%"}}/>
                <span className="message_listP_id"
                    style={{position: 'relative', bottom:'30px', fontSize:'20px', fontWeight:'bold', color:'#777', paddingLeft:'20px'}}
                >
                    {list.user_nick}
                </span>
            </div>
            </li></Link>
        </>
    )
}

const MatchList = ({chat,user}) => {
    return (
        <div className="matchList_2">
            <div className="matchList_2_title">
                <h2>메시지</h2><span class="matchList_count">{chat&&(chat.length)}</span>
            </div>
            <div className="matchList_2_content">
                <Link to="/match_like" className="likeMeLink"><div>나를 좋아요</div></Link>
                {chat &&(
                    chat.map(list=> <Chatt list={list} user={user} />)
                )}
            </div>
        </div>
    )
}

export default MatchList;