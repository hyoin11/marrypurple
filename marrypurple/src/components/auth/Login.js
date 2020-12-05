import React from 'react';
import { Link } from 'react-router-dom';
import '../../lib/styles/login.scss'
import LoginH from '../../lib/img/LoginH.png';


const Login = () => {
    return(
        <div id="loginWrap">
            <div id="Lcontainer">
                <div id="Lheader">
                    <div class="Llogo">
                        <p><a><Link to="/"><img src={LoginH}/></Link></a></p>
                    </div>
                </div>
                <div class="HeadT">
                    <h1>지금 시작</h1>
                </div>
                <div class="loginContent">
                    <p>'로그인'(을)를 클릭함으로써 MarryPurple 이용약관에 동의합니다. 당사에서 개인정보를 처리하는 방식은 개인정보 취급방침과 쿠키정책에서 확인하시기 바랍니다.</p>
                </div>
                <a href="#"><div class="snsLogin">
                    <p><div id="snsLogo"><div id="google"></div></div><span class="loginFont">구글 계정으로 로그인</span></p>
                </div></a>
                <a href="#"><div class="snsLogin">
                    <div id="snsLogo"><div id="facebook"></div></div><span class="loginFont">FACEBOOK으로 로그인</span>
                </div></a>
                <a href="#"><div class="snsLogin">
                    <div id="snsLogo"><div id="kakao"></div></div><span class="loginFont">카카오톡으로 로그인</span>
                </div></a>
                <Link to="/marrylogin"><div class="snsLogin">
                    <div id="snsLogo"><div id="marry"></div></div><span class="loginFont">메리퍼플로 로그인</span>
                </div></Link>
                <div class="noRegi">
                    <p><a><Link to="/regist">계정이 없으신가요??</Link></a></p>
                </div>
            </div>
        </div>
    )
};

export default Login;