import React from 'react';
import '../../lib/styles/tele_wait.scss'
import photo from '../../lib/images/images/lavender.png'

const TeleMunWaitContainer = () => {
    return(
        <div id="tele_fin_wait_container">
            <div id="tele_text_container">
                <div className="tele_wait_text">문제가 제출되었습니다.<br/> 잠시만 기다려주세요.</div>
                <img src={photo} id="lavenderImg" />
            </div>
        </div>
    )
}

export default TeleMunWaitContainer;