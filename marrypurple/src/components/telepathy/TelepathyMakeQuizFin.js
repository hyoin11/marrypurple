import React from 'react';
import wifi from '../../lib/images/images/wifi.png'
import { useDispatch} from "react-redux";
import {teleMun} from '../../modules/telepathy'
import { Link } from 'react-router-dom';

const TelepathyMakeQuizFin = ({mun, ans}) => {
    const dispatch = useDispatch();
    return(
        <>
        {mun.length > 0 && ans.length > 0 &&(
            <div id="tele_fin_container">
                <p class="guideline">
                <i class="fas fa-chevron-left"></i>
                텔레파시 통통통
                </p>
                <div class="collect_quiz">
                    <img src={wifi} alt="와이파이"/>
                    <div class="quiz_name" id="quiz_ans1">
                        <div id="mun1">첫 번째 문제</div>
                        {mun[0]}
                    </div>
                    <div class="quiz_ans">{ans[0]}</div>

                    <div class="quiz_name" id="quiz_ans2">
                        <div id="mun2">두 번째 문제</div>
                        {mun[1]}
                    </div>
                    <div class="quiz_ans">{ans[1]}</div>

                    <div class="quiz_name" id="quiz_ans3">
                        <div id="mun3">세 번째 문제</div>
                        {mun[2]} 
                    </div>
                    <div class="quiz_ans">{ans[2]}</div>
                    <div class="continue_explain">이대로 진행하려면 시작버튼을 눌러주세요</div>
                    <div class="start_btn"><Link to="/tele_mun_done" onClick={()=>dispatch(teleMun({mun,ans}))} id="start_tele">시작하기</Link></div>
                </div>
            </div>
        )}
        </>
    )
}

export default TelepathyMakeQuizFin;