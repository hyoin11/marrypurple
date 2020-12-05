import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import '../../lib/styles/styles.scss';
import $ from 'jquery';
import { Helmet } from 'react-helmet';

function Haa({list, user}){
    const profilePic = (list.profile_pic)[0]
    return(
    <>
        <Link to={{ pathname:'/match_profile', data: list, myInfo: user.user_email }} >
            <div style={{ background: `url(${profilePic})`, backgroundSize: '100%', textShadow: '1px 1px 1px gray', backgroundPosition:"center",color:'#fff'}} >{list.user_nick}</div>
        </Link>
    </>
    )
}

function Chatt({list, user}){
    return(
        <>
            <Link to={{ pathname:`/chat`, data: list, myInfo: user.user_email }} ><li className="message_listP">
            <div className="message_listP_wrap">
                <div className="message_listP_photo" >
                    <div
                    style={{background:`url(${(list.profile_pic)[0]})`,backgroundSize:'100%'}}
                    ></div>
                </div>
            <div><span className="message_listP_id">{list.user_nick}</span></div></div>
            </li></Link>
        </>
    )
}

const SideMenu = ({ currentPage, user, chat, userPic, boyClick, allClick, girlClick, onLogout }) => {
    // console.log('~~~',currentPage);

    let userPicImg = [];
    if(userPic){
        userPicImg = userPic;
    }
    console.log(userPicImg);

    let userProfile = {};
    if(user){
        userProfile = user;
        if(userProfile.match_gender === 'both'){
            $('.input_type_radio2 #all2').attr('checked', true);
        }else if(userProfile.match_gender === 'male'){
            $('.input_type_radio2 #boy2').attr('checked', true);
        }else if(userProfile.match_gender === 'female'){
            $('.input_type_radio2 #girl2').attr('checked', true);
        }
    }

    function script(){
        switch(currentPage){
            case '/profile':
            case '/Payment':
                $('#sub_menu_myprofile').addClass('on').removeClass('off');
                $('#sub_menu_myprofile').siblings().addClass('off');
                break;
            case '/match':
            case '/match_like':
            case '/match_profile':
            case '/back':
                $('#m1').addClass('on');
                $('#slide_box div').removeClass('on').removeClass('off');
                $('#sub_menu_match').addClass('on');
                $('#sub_menu_match').siblings().addClass('off');
                break;
            case '/message':
            case '/message_profile':
            case '/chat':
                $('#m2').addClass('on');
                $('#slide_box div').removeClass('on').removeClass('off');
                $('#sub_menu_message').addClass('on');
                $('#sub_menu_message').siblings().addClass('off');
                break;
            case '/worldcup1':
            case '/worldcup2':
            case '/worldcup3/:user_id':
            case '/Telepathy':
            case '/Telepathy_make_quiz':
            case '/Telepathy_make_quiz2':
            case '/Telepathy_make_quiz3':
            case '/Telepathy_make_quiz_fin':
            case '/tele_mun_done':
            case '/Telepathy_get_quiz':
            case '/Telepathy_get_quiz2':
            case '/Telepathy_get_quiz3':
            case '/talktothem':
            case '/find_main':
            case '/find_select':
            case '/find_match':
            case '/gram_main':
            case '/gram_write':
            case '/gram_post/:gram_id':
            case '/board_bad':
                $('#m3').addClass('on');
                $('#slide_box div').removeClass('on').removeClass('off');
                $('#sub_menu_enter').addClass('on');
                $('#sub_menu_enter').siblings().addClass('off');
                switch(currentPage){
                    case '/worldcup1':
                    case '/worldcup2':
                    case '/worldcup3/:user_id':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(1)').addClass('on');
                        break;
                    case '/Telepathy':
                    case '/Telepathy_make_quiz':
                    case '/Telepathy_make_quiz2':
                    case '/Telepathy_make_quiz3':
                    case '/Telepathy_make_quiz_fin':
                    case '/tele_mun_done':
                    case '/Telepathy_get_quiz':
                    case '/Telepathy_get_quiz2':
                    case '/Telepathy_get_quiz3':
                    case '/talktothem':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(2)').addClass('on');
                        break;
                    case '/find_main':
                    case '/find_select':
                    case '/find_match':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(3)').addClass('on');
                        break;
                    case '/gram_main':
                    case '/gram_write':
                    case '/gram_post/:gram_id':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(4)').addClass('on');
                        break;
                    case '/board_bad':
                        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').addClass('on');
                        break;
                }
            
        }

        // 서브 메뉴 클릭시
        $('#m1').on('click', function() { 
            $('#slide_box div').removeClass('on').removeClass('off');
            $('#sub_menu_match').addClass('on');
            $('#sub_menu_match').siblings().addClass('off');
    
            $('#sub_menu a').removeClass('on');
            $(this).addClass('on');
        });
        $('#m2').on('click', function() {
            $('#slide_box div').removeClass('on').removeClass('off');
            $('#sub_menu_message').addClass('on');
            $('#sub_menu_message').siblings().addClass('off');
    
            $('#sub_menu a').removeClass('on');
            $(this).addClass('on');
        });
        $('#m3').on('click', function() {
            $('#slide_box div').removeClass('on').removeClass('off');
            $('#sub_menu_enter').addClass('on');
            $('#sub_menu_enter').siblings().addClass('off');
    
            $('#sub_menu a').removeClass('on');
            $(this).addClass('on');
        });
        $('#myprofile_btn').on('click', function() {
            $('#slide_box div').removeClass('on').removeClass('off');
            $('#sub_menu_myprofile').addClass('on');
            $('#sub_menu_myprofile').siblings().addClass('off');
    
            $('#sub_menu a').removeClass('on');
            $(this).addClass('on');
        });

        // 공지사항 누르면
        // 웹 버전
        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(5)').on('click', function(){
            $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').toggleClass('on2');
            $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').toggleClass('on2');
        });

        if($('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').hasClass('on') || $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').hasClass('on')){
            $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').addClass('on2');
            $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').addClass('on2');
        }

        // 모바일 버전
        $('.enterM_1 a:nth-child(5)').on('click', function(){
            $('.enterM_1 a:nth-child(6)').toggleClass('on2');
            $('.enterM_1 a:nth-child(7)').toggleClass('on2');
        });
    }

    script();

    return(
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
                
            </Helmet>
            {/* 모바일 메뉴 */}
            <div id="m_menu">
                <ul>
                    <li><Link to="/profile_main"><div><i className="fas fa-address-card"></i></div></Link></li>
                    <li><Link to="/match"><div><i className="fas fa-heartbeat"></i></div></Link></li>
                    <li><Link to="/match_list"><div><i className="fas fa-comments"></i></div></Link></li>
                    <li><Link to="/enter_main"><div><i className="fas fa-plane"></i></div></Link></li>
                </ul>
            </div>
            {/* 웹 메뉴 */}
            <div id="left_menu">
                <ul>
                    <li>
                        <ul id="myprofile">
                            <Link to="/profile" id="myprofile_btn"><li><div id="myPho">
                                <img src={userPicImg[0]}/>
                            <div></div></div><span>나의 프로필</span></li></Link>
                            <Link to="work"><li></li></Link>
                        </ul>
                    </li>
                    <li>
                        <ul id="sub_menu">
                            <a href="/match" id="m1"><li>매치</li></a>
                            <a id="m2"><li>메시지</li></a>
                            <a id="m3"><li>엔터테인먼트</li></a>
                        </ul>
                    </li>
                    <li>
                        <div id="slide_box">
                            <div id="sub_menu_match" className="off">
                                <ul>
                                    <Link to="match_like"><div><li>나를 좋아요</li></div></Link>
                                    <>
                                        {chat && (
                                            <>
                                                {chat.map(list => (
                                                    <Haa 
                                                    user={user}
                                                    list={list} 
                                                    key={list._id}
                                                    />
                                                ))}
                                            </>
                                        )}
                                    </>
                                </ul>
                            </div>
                            <div id="sub_menu_message" className="off">
                                <ul id="message_list">
                                    <>
                                        {chat && (
                                            <>
                                                {chat.map(list => (
                                                    <Chatt
                                                    user={user}
                                                    list={list} 
                                                    key={list._id}
                                                    />
                                                ))}
                                            </>
                                        )}
                                    </>
                                </ul>
                            </div>
                            <div id="sub_menu_enter" className="off">
                                <ul>
                                    <Link to="/worldcup1"><div><li>이상형 월드컵</li></div></Link>
                                    <Link to="/Telepathy"><div><li>텔레파시</li></div></Link>
                                    <Link to="/find_main"><div><li>이상형 찾기</li></div></Link>
                                    <Link to="/gram_main"><div><li>메리퍼플그램</li></div></Link>
                                    <a><div><li>공지사항</li></div></a>
                                    <Link to="/board_bad"><div><li>불량회원</li></div></Link>
                                </ul>
                            </div>
                            <div id="sub_menu_myprofile" className="off">
                                <dl>
                                    <Link to="Payment"><div><dd>결제하기 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <h2>DISCOVERY 설정</h2>
                                    <a>
                                        <div>
                                            <dd>원하는 상대 
                                                <p className="input_type_radio2">
                                                    <input type="radio" name="gender2" id="boy2" onClick={boyClick}/>
                                                    <label for="boy2">남</label>
                                                    <input type="radio" name="gender2" id="all2" onClick={allClick}/>
                                                    <label id="md2" for="all2">모두</label>
                                                    <input type="radio" name="gender2" id="girl2" onClick={girlClick}/>
                                                    <label for="girl2">여</label>
                                                </p>
                                            </dd>
                                        </div>
                                    </a>
                                    <h2 style={{display: 'none'}}>알림</h2>
                                    <Link to="#" style={{display: 'none'}}><div><dd>푸시알림 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <h2>도움말·고객 지원</h2>
                                    <Link to="/FAQ2"><div><dd>도움말·고객 지원 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <h2>커뮤니티</h2>
                                    <Link to="/FAQ2"><div><dd>커뮤니티 가이드라인 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <Link to="/FAQ"><div><dd>안전 및 정책 센터 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <Link to="/FAQ"><div><dd>안전을 위한 도움말 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <h2>법적 고지</h2>
                                    <Link to="/FAQ"><div><dd>개인정보 취급방침 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                                    <Link href="#"><div onClick={onLogout}><dd>로그아웃</dd></div></Link>
                                    <Link href="#"><div><dd>계정삭제</dd></div></Link>
                                </dl>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default SideMenu;
