import React from 'react';
import '../../lib/styles/findMain.scss'
import { Link } from 'react-router-dom';

const FindOneMain = () => {
    return(
        <div class="findMain_1">
            <div id="findMain_1_icon"></div>
            <p>이상형<br/>찾기</p>
            <div id="findMain_1_btn"><Link to='/find_select' id="find_main_btn">시작하기</Link></div>
        </div>
    )
}

export default FindOneMain;