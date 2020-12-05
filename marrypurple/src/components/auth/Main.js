import React from 'react';
import { Link } from 'react-router-dom';
import '../../lib/styles/main.scss'
import mLogo from '../../lib/img/mLogo.PNG';


const Main = () => {
    return(

        <div id="wrap2">
        <div id="main">
            <a href="#" class="mLogo"><img src={mLogo} alt="메인로고"/></a>
            <ul class="mHead">
                <li class="MbtnLogin"><a><Link to="/marrylogin">login</Link></a></li>
                <li class="MbtnJoin"><a><Link to="/regist">join</Link></a></li>
            </ul>
            <div id="mText">
                <h2>Marry Purple</h2>
                <p>#나에게_대답해주세요</p>
            </div>
        </div>
        </div>
    )
}

export default Main;