import React from 'react';
import '../../../lib/styles/matching.scss';
import Personality from './Personality';
// import ProfilePic from './pieces/ProfilePic';
import imgA from '../../../lib/images/images/annonymous.png';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
    <>
        {/* <div className="match_1">
            <a href="/back"><div></div></a>
            <a href="#aaa"><div></div></a>
            <a href="#aaa"><div></div></a>
            <a href="#aaa"><div></div></a>
        </div> */}
        <div className="match_2">
            <a href="#aaa"><div className="match_2_pre"></div></a>
            <a href="#aaa"><div className="match_2_next"></div></a>
            {/* <div id="match_2_photo"><ProfilePic pics={profile_pic}/></div> */}
            <div id="match_2_photo"><img src={imgA} alt="프로필사진"/></div>
            <div id="cantFindUser">나를 좋아한 사람을 보려면<br/>골드 서비스로 업그레이드하세요.</div>
            <div id="paymentBtn"><div><Link to="/payment">되돌아가기 하기</Link></div></div>
        </div>
        <div>
        </div>
    </>
);
};

export default Error;