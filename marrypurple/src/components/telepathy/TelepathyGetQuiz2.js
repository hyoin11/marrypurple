import React,{ useState } from 'react';
import '../../lib/styles/Telepathy_get_quiz.scss'
import { withRouter } from 'react-router-dom';

const TelepathyGetQuiz2 = ({history, mun, ans, pic, user_nick, my_pic, my_nick, tot_mun }) => {
    const [check] = useState({
        ans1:false,
        ans2:false,
        ans3:false
    })

    const [myAns, setMyAns] = useState()
    let tot = {}
    if(tot_mun){
        tot = tot_mun
    }
    const onClick = (e) => {
        setMyAns(e.target.value)
        if(check.ans1){
            check.ans1 = false
        }
        if(check.ans2){
            check.ans2 = false
        }
        if(check.ans3){
            check.ans3 = false
        }
        check[e.target.id] = !check[e.target.id]
        console.log('ans: ', ans)
    }


    const right = (prop1,prop2) => {
        if(prop1 === prop2){
            history.push('/Telepathy_get_quiz3')
        }else{
            alert('틀렸습니다. 다음에 다시 시도해 보세요.')
            history.push('/Telepathy')
        }
    }
    return(
        <div id="getQuizWrapper">
            <div class="nth_quiz">2번째 질문</div>
            <div class="situation">상황</div>
            <div id="quiz">
                <div><i class="fas fa-question-circle"></i></div>
                <div>{mun[1]}</div>
            </div>
            <div class="just_for_underline"></div>
            <div class="answer">
                <div class="answer_from">
                <div class="answer_from_who">{user_nick}님의 대답</div>
                    <div class="img_div"><div style={{ width:"60px", height:"60px", background:`url(${pic})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius:'50%'}}></div></div>
                    <div class="answer_div">
                        <i class="fas fa-question"></i>
                    </div>
                </div>
                <div class="answer_from">
                    <div class="answer_from_who">{my_nick}님의 대답</div>
                    <div class="img_div"><div style={{ width:"60px", height:"60px", background:`url(${my_pic})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius:'50%'}}></div></div>
                    <div class="my_answer_div">
                        <div>
                            <label for="ans1" id="ans1_label">{tot.dap1}</label>
                            <input type="radio" name="answer" id="ans1" value={tot.dap1} onClick={(e) => onClick(e)}/>
                            {check.ans1 === true && (
                                <i class="fas fa-check"></i>
                            )}
                        </div>
                        <div>
                            <label for="ans2" id="ans2_label">{tot.dap2}</label>
                            <input type="radio" name="answer" id="ans2" value={tot.dap2} onClick={(e) => onClick(e)}/>
                            {check.ans2 === true && (
                                <i class="fas fa-check"></i>
                            )}
                        </div>
                        <div>
                            <label for="ans3" id="ans3_label">{tot.dap3}</label>
                            <input type="radio" name="answer" id="ans3" value={tot.dap3} onClick={(e) => onClick(e)}/>
                            {check.ans3 === true && (
                                <i class="fas fa-check"></i>
                            )}
                        </div>
                    </div>
                </div>
                <div><input type="submit" value="선택" id="get_quiz_select_btn" onClick={() => right(myAns, ans)}/></div>
            </div>
        </div>
    )
}

export default withRouter(TelepathyGetQuiz2);