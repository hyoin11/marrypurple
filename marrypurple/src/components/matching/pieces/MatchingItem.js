import React from 'react';
import '../../../lib/styles/matching.scss';
import { pass, like, superlike } from '../../../modules/ctrl'
import { useDispatch} from "react-redux";
import Personality from './Personality';
import ProfilePic from './ProfilePic';
import imgB from '../../../lib/images/icon/004980c2c35d4fa37d9635ed7f159c3c.png';
import imgC from '../../../lib/images/icon/f84abf6d0bd53bf97dbb1011aa640499.png';
import imgD from '../../../lib/images/icon/49f19f63a24305a4f1dedfd8481c01e2.png';
import imgE from '../../../lib/images/icon/8c6f9b49103dd67cf3bfd50f561b46d6.png';

const MatchingItem = ({ back, list, onToggle, showProfile, onToggle_report, urlAddress,onClickReport }) => {
  // console.log('showProfile.reportActive : ', showProfile.reportActive)
    const dispatch = useDispatch();
    const { profile_pic, user_nick, address, user_age, personality, brief_intro, match, _id} = list;
    return (
    <>
        <div className="match_1">
            {urlAddress !== '/back' && (<a href="/back"><div className="match_1_button" id="selBtn01"></div></a>)}
            
            <a href="/match" onClick={()=>dispatch(like({ id: match }))}><div className="match_1_button" id="selBtn02"></div></a>
            <a href="/match" onClick={()=>dispatch(superlike({ id: match }))}><div className="match_1_button" id="selBtn03"></div></a>
            <a href="/match" onClick={()=>dispatch(pass({ id: match }))}><div className="match_1_button" id="selBtn04"></div></a>
        </div>
        <div className="match_2">
            {profile_pic && <ProfilePic pics={profile_pic} key={_id}/>}
        </div>
        <div className="match_3">
            <div>
            <span id="userid">{user_nick}</span> <span id="userage">{user_age}</span> <a href="#aaa" onClick={() => onToggle()}><div id="more_profile">프로필 더보기</div></a>
        </div>
        </div>
        {showProfile.profileActive === true && (
        <div className="match_4">
            <div id="placeIco"></div><p>{address}</p>
            <div className="match_4_hobbys">
                {personality && <Personality personality={personality}/>}
            </div>
            <div className="match_4_text">
                {brief_intro}
            </div>
            <div className="match_4_btn"><a href="#layer2" className="declare_popup" onClick={() => onToggle_report()}>{user_nick}님 신고</a></div>
        {showProfile.reportActive === true && (
            <div className="dim-layer">
                <div className="dimBg"></div>
                    <div id="layer2" className="pop-layer">
                    <div className="pop-container">
                        <div>
                        <h2>회원 신고</h2>
                        <p><span className="messageP_id">{user_nick}</span>님께는 알리지 않습니다.</p>
                        </div>
                        <hr/>
                        <div>
                        <ul>
                            <li>
                            <a href="#aaa" onClick={()=>onClickReport('부적절한 사진', _id)}>
                                <div><img src={imgB} alt="부적절한 사진"/></div>
                                <div>부적절한 사진</div>
                            </a>
                            </li>
                            <li>
                            <a href="#aaa" onClick={()=>onClickReport("스팸으로 의심됨", _id)} >
                                <div><img src={imgC} alt="스팸으로 의심됨"/></div>
                                <div>스팸으로 의심됨</div>
                            </a>
                            </li>
                            <li>
                            <a href="#aaa" onClick={()=>onClickReport("부적절한 메시지", _id)} >
                                <div><img src={imgD} alt="부적절한 메시지"/></div>
                                <div>부적절한 메시지</div>
                            </a>
                            </li>
                            <li>
                            <a href="#aaa" onClick={()=>onClickReport("기타", _id)} >
                                <div><img src={imgE} alt="부적절한 메시지"/></div>
                                <div>기타</div>
                            </a>
                            </li>
                        </ul>
                        <button className="popup_close" onClick={() => onToggle_report()}>
                            <span>
                                {showProfile.reportFinish === true && "취소"}
                                {showProfile.reportFinish === false && "신고완료"}
                            </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )}
    </>
);
};

export default MatchingItem;