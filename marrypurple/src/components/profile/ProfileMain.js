import React from 'react';
import '../../lib/styles/profileMain.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const ProfileMain = ({ user, boyClick, allClick, girlClick, onLogout }) => {
    let userProfile = {};
    if(user){
        userProfile = user;
        if(userProfile.match_gender === 'both'){
            $('.input_type_radio3 #all3').attr('checked', true);
        }else if(userProfile.match_gender === 'male'){
            $('.input_type_radio3 #boy3').attr('checked', true);
        }else if(userProfile.match_gender === 'female'){
            $('.input_type_radio3 #girl3').attr('checked', true);
        }
    }

    return (
        <>
            <dl id="profileM">
                <Link to="Profile"><div><dd>프로필 수정 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <Link to="Payment"><div><dd>결제하기 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <h2>DISCOVERY 설정</h2>
                <a>
                    <div>
                        <dd>원하는 상대 
                            <p className="input_type_radio3">
                                <input type="radio" name="gender3" id="boy3" onClick={boyClick}/>
                                <label for="boy3">남</label>
                                <input type="radio" name="gender3" id="all3" onClick={allClick}/>
                                <label id="md3" for="all3">모두</label>
                                <input type="radio" name="gender3" id="girl3" onClick={girlClick}/>
                                <label for="girl3">여</label>
                            </p>
                        </dd>
                    </div>
                </a>
                <h2 style={{display: 'none'}}>알림</h2>
                <Link to="#" style={{display: 'none'}}><div><dd>푸시알림 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <h2>도움말·고객 지원</h2>
                <Link to="FAQ2"><div><dd>도움말·고객 지원 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <h2>커뮤니티</h2>
                <Link to="FAQ2"><div><dd>커뮤니티 가이드라인 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <Link to="FAQ"><div><dd>안전 및 정책 센터 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <Link to="FAQ"><div><dd>안전을 위한 도움말 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <h2>법적 고지</h2>
                <Link to="FAQ"><div><dd>개인정보 취급방침 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <Link to="#" onClick={onLogout}><div><dd>로그아웃</dd></div></Link>
                <Link to="#"><div><dd>계정삭제</dd></div></Link>
            </dl>
        </>
    )
}

export default ProfileMain;