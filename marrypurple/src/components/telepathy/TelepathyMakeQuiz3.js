import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import '../../lib/styles/Telepathy_make_quiz.scss'

const QuizPieces = ({info, OnToggle, unfoldDiv, selectAns}) => {
    return(
        <>
            <div className="mun">
                <a href="#mun" onClick={() => OnToggle(info.open)}><span>Q</span> {info.mun}</a>
            </div>
            {unfoldDiv.unfold === info.open && (//토글함수. unfoldDiv.unfold가 info.open과 같으면 답 div가 열림. 답은 3개가 있다
                <div class="answer">
                    <p class="choose_ans">
                        <input 
                        type="radio" 
                        name= {info.name}
                        id={info.name + '_1'}
                        value={info.ans1}
                        onClick={(e)=>selectAns(e,info.mun)}
                        />
                        <label for={info.name + '_1'} >{info.ans1}</label>
                    </p>
                    <p class="choose_ans">
                        <input 
                        type="radio" 
                        name={info.name} 
                        id={info.name + '_2'} 
                        value={info.ans2}
                        onClick={(e)=>selectAns(e,info.mun)}
                        />
                        <label for={info.name + '_2'} >{info.ans2}</label>
                    </p>
                    <p class="choose_ans">
                        <input 
                        type="radio" 
                        name={info.name}
                        id={info.name + '_3'}
                        value={info.ans3}
                        onClick={(e)=>selectAns(e,info.mun)}
                        />
                        <label for={info.name + '_3'} >{info.ans3}</label>
                    </p>
                </div>
            )}
        </>
    )
}


const TelepathyMakeQuiz3 = ({ OnToggle, unfoldDiv, Qna, sort, handMun, handAns }) => {
    const [mun, setMun] = useState(handMun)//내가 고른 문제
    const [ans, setAns] = useState(handAns)//내가 고른 답

    const selectAns = (e, question) => {//답 고르기
        if(mun.length === 2){
            // console.log(mun)
            setMun(mun.concat(question))
        }else{
            // console.log(mun)
            setMun(mun.slice(0,2).concat(question))
        }
        if(ans.length === 2){
            // console.log(ans)
            setAns(ans.concat(e.target.value))
        }else{
            // console.log(ans)
            setAns(ans.slice(0,2).concat(e.target.value))
        }
    }

    const ifDidnt = () => {//답변 선택 안 한 경우
        alert('답변을 선택해주세요')
    }
    return(
        <>
            <p class="guideline">
                <i class="fas fa-chevron-left"></i>
                텔레파시 통통통
            </p>
            <div class="choose_mun">문제고르기</div>
            <section id="part1">
                <div class="part1_fc">3가지 질문을 선택하고 답해주세요</div>
                <div class="process">
                    <div class="num1">1</div>
                    <div class="num2">2</div>
                    <div class="num3" style={{borderWidth:'4px', borderColor:'#ff00ca'}}>3</div>
                </div>
            </section>
            <form>
                <section id="part2">
                    <div class="choose_mun">{sort}</div>
                    {Qna.map((a,index) => (// sort값에 대한 질문들. QuizPieces는 위에 따로 빼놨음
                        <QuizPieces 
                            info={a} 
                            OnToggle={OnToggle} 
                            key={index} 
                            unfoldDiv={unfoldDiv}
                            selectAns={selectAns}
                        />
                    ))}
                    {ans.length === 3 &&(
                        <div className="telepahtyGoGoContainer"><Link to={{ pathname:'/Telepathy_make_quiz_fin', mun:mun, ans:ans }} id="telepahtyGoGo">등록</Link></div>
                    )}
                    {ans.length !== 3 &&(
                        <div className="telepahtyGoGoContainer"><a href="#next" id="telepahtyGoGo" onClick={ifDidnt}>등록</a></div>
                    )}
                </section>
            </form>
        </>
    )
}

export default withRouter(TelepathyMakeQuiz3);