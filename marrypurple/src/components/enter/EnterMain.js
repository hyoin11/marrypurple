import React from 'react';
import '../../lib/styles/enterMain.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const EnterMain = () => {
    function script() {
        
    }
    $('.enterM_1 a:nth-child(5)').on('click', function(){
        $('.enterM_1 a:nth-child(6)').toggleClass('on2');
        $('.enterM_1 a:nth-child(7)').toggleClass('on2');
    });

    return (
        <>
            <ul className="enterM_1">
                <Link to="/worldcup1"><div><li>이상형 월드컵</li></div></Link>
                <Link to="/Telepathy"><div><li>텔레파시</li></div></Link>
                <Link to="/find_main"><div><li>이상형 찾기</li></div></Link>
                <Link to="/gram_main"><div><li>메리퍼플그램</li></div></Link>
                <Link><div><li>공지사항</li></div></Link>
                <Link to="/board_bad"><div><li>불량회원</li></div></Link>
            </ul>
        </>
    )
}

export default EnterMain;