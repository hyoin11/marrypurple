import React from 'react';
import '../../lib/styles/FAQ2.scss';
import { Link } from 'react-router-dom';
import logo from '../../lib/images/images/MarryPurpleimg.png'
import { Helmet } from 'react-helmet';

const FAQ2 = () => {
    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
            </Helmet>
            <div className="faqwrap">
                <header>
                    <div className="logo">
                        <Link to="/Profile"><img src={logo} alt="메리퍼플로고"/></Link>
                    </div>
                    <div className="back_to_main"><Link to="/Profile">back to main</Link></div>
                </header>
                <div className="underline"></div>
                <div className="menu_trace">
                    <p className="menu_trace_leftside">
                        <Link to="/FAQ.html">Marry Purple</Link>
                        <i className="fas fa-chevron-right"></i>
                        <Link to="#">Marry Purple 이용자 가이드</Link>
                    </p>
                    <p className="menu_trace_leftside_m">
                        <Link to="/FAQ.html">Marry Purple</Link>
                        <i className="fas fa-chevron-right"></i>
                        <br/>
                        <Link to="#">Marry Purple 이용자 가이드</Link>
                    </p>
                    <div className="menu_tract_search">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="검색"/>
                    </div>
                </div>
                <div className="content-next2">
                    <p className="title">Marry Purple 이용자 가이드</p>
                    <p className="title_m">Marry Purple<br/>이용자 가이드</p>
                    <p>
                        <div className="part1">
                            <ul className="content_ul">
                                <li>Marry Purple 한눈에 보기</li>
                                <li><Link to="/FAQ3">쿠키 정책</Link></li>
                                <li><Link to="/FAQ3">Marry Purple 소개</Link></li>
                                <li><Link to="/FAQ3">지원되는 플랫폼과 기기</Link></li>
                                <li><Link to="/FAQ3">MP는 무료인가요?</Link></li>
                                <li><Link to="/FAQ3">MP를 전 세계 어디에서나 이용할 수 있나요?</Link></li>
                                <li><Link to="/FAQ3">최소 이용 연령은 어떻게 되나요?</Link></li>
                            </ul>
                            <ul className="content_ul">
                                <li>회원가입 및 시작 안내</li>
                                <li><Link to="/FAQ3">계정은 어떻게 만드나요?</Link></li>
                                <li><Link to="/FAQ3">Face Book 없이도 회원가입 할 수 있나요?</Link></li>
                                <li><Link to="/FAQ3">프로필 편집은 어떻게 하나요?</Link></li>
                                <li><Link to="/FAQ3">검색 환경설정은 어떻게 하나요?</Link></li>
                                <li><Link to="/FAQ3">광고 차단기 해제하는 방법</Link></li>
                            </ul>   
                        </div>
                        <div className="part2">
                            <ul className="content_ul">
                                <li>검색</li>
                                <li><Link to="/FAQ3">검색은 무엇인가요?</Link></li>
                                <li><Link to="/FAQ3">메세지를 보내려면 어떻게 하나요?</Link></li>
                                <li><Link to="/FAQ3">MP에서 특정인을 검색할 수 있나요?</Link></li>
                                <li><Link to="/FAQ3">좋아요 또는 패스를 취소할 수 있나요?</Link></li>
                                <li><Link to="/FAQ3">MP 소셜</Link></li>
                            </ul>            
                            <ul className="content_ul">
                                <li>매치 및 메세지</li>
                                <li><Link to="/FAQ3">어떻게 매치를 취소하고 신고할 수 있나요?</Link></li>
                                <li><Link to="/FAQ3">메세지를 삭제할 수 있나요?</Link></li>
                                <li><Link to="/FAQ3">매치 회원에게 어떻게 메시지를 보낼 수 있나요?</Link></li>
                                <li><Link to="/FAQ3">회원을 어떻게 신고하나요?</Link></li>
                                <li><Link to="/FAQ3">실수로 어떤 회원과의 매치를 취소했어요</Link></li>
                            </ul>
                        </div>
                    </p>
                </div>
                <Link className="Toggle_btn" to="/Profile_main"><i className="fas fa-bars"></i></Link>
            </div>
        </>
    )
}

export default FAQ2;
