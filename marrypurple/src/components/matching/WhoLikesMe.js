import React from 'react';
import { Link } from 'react-router-dom';
import '../../lib/styles/matchLike.scss'

const PhotoList = ({list}) => {
    return(
        <>
            <Link to={{pathname:"/match_profile", data:list}}>
                <div 
                    class="matchL_1_like"
                    style={{background: `url(${(list.profile_pic)[0]})`,backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100%'}}
                >
                    <div className="match_like_user_nick">{list.user_nick}</div>
                </div>
            </Link>
        </>
    )
}

const BluredPhotoList = ({list}) => {
    return(
        <>
            <Link to="/Payment">
                <div className="IllUseHyosCss">
                    <img src={(list.profile_pic)[0]}/>
                </div>
            </Link>
        </>
    )
}

const WhoLikesMe = ({matchLike, didPay}) => {
    console.log(didPay);
    const likeList = []
    if(matchLike){
        matchLike.map(list => likeList.push(list))
    }
    return(
        <>
            <div class="matchL_1">
                <ul id="matchL_1_list">
                    {didPay === 'no_sub' &&(
                        <>
                            <p>나를 좋아한 사람을 보려면<br/>골드 서비스로 업그레이드하세요.</p>
                            {likeList.map(list => (
                                <BluredPhotoList list={list}/>
                            ))}
                        </>
                    )}
                    {didPay !== 'no_sub' &&(
                        likeList.map(list => (
                            <PhotoList list={list}/>
                        ))
                    )}
                </ul>
                
            </div>
            {didPay === 'no_sub' &&(
                <div id="matchL_1_btn">
                    <div><Link to="/Payment" id="match_like_btn_">나를 좋아한 사람 보기</Link></div>
                </div>
            )}
            
        </>
    )
}

export default WhoLikesMe