import React from 'react';
import '../../lib/styles/Telepathy.scss'
import UFO from '../../lib/images/images/UFO.png'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Telepathy = ({history}) => {
    const onClick = () => {
        history.goBack();
    }
    return(
        <div class="telepathy_container">
            <p class="guideline">
                <i class="fas fa-chevron-left" onClick={onClick}>텔레파시 통통통</i>
            </p>
            <img src={UFO} alt="텔레파시통통이미지"/>
            <Link to="/Telepathy_make_quiz" id="make_quiz">출제하기</Link>
            <br/>
            <Link to="/Telepathy_get_quiz" id="get_quiz">참가하기 </Link>
            <p id="exp1">내 운명의 인연은 어디에?!</p>
            <p id="exp2">서로 같은 대답이 3번 일치하면<br/>상대방에게 메세지를 보낼 수 있어요</p>
        </div>
    )
}

export default withRouter(Telepathy);