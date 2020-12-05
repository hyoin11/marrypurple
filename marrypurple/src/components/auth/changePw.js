import React from 'react';
import { Link } from 'react-router-dom';
import '../../lib/styles/regist.scss';
import rLogo from '../../lib/img/rLogo.png';

const changePw = ({changepwSubmit,user,form,onChange}) => {
    return(
        <div id="wrapM">
        <div id="container">
            <div id="Rheader">
                    <a><Link to ="/" class="rLogo"><img src={rLogo} alt="회원가입로고"/></Link></a>
            </div>
            <div class="rContainer">
                <div class="regiT findPw">
                    <h1>비밀번호 변경</h1>
                </div>
            <form method="patch" onSubmit={changepwSubmit}>
                <div class="regiPw reInputPw">
                    <div class="changePw">
                        <input type="password" name="user_pw"  onChange={onChange} placeholder="변경할 비밀번호"/>
                    </div>
                </div>
                <div class="reBtn">
                    <input class="rePw" type="submit" name="rePw2" value="변경하기"/>
                </div>
            </form>
            </div>
        </div>
    </div>
    )
}

export default changePw;