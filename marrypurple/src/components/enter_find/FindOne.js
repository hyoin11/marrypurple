import React,{useState} from 'react';
import '../../lib/styles/findOne.scss'
import { useDispatch, useSelector } from "react-redux";
import { find } from '../../modules/findOne'

const FindOne = () => {
    const dispatch = useDispatch();
    const [styles, setStyles]=useState([])
    const onToggle = (e) => {
        if(e.target.checked === true){
            e.target.removeAttribute('checked',false)
        }else if(e.target.checked === false){
            e. target.setAttribute('checked', true);
        }
        if(e.target.checked){
            setStyles(styles.concat(e.target.value))
        }else{
            setStyles(styles.filter(style => style != e.target.value))
        }
    }

    const test = (e) => {
        if(styles.length <3){
            e.preventDefault();
            alert('3개 이상 골라주세요!')
        }else{
            e.preventDefault();
            console.log(styles)
            dispatch(find({ styles }));
        }
    }

    return(
        <>
        <div class="findF_1">
                    <div id="findF_1_icon"></div>
                    <p>이상형을 선택하세요.<br/>3개 이상 선택해 주세요.</p>
                </div>
                <div class="findF_2">
                    <form onSubmit={test}>
                        <input type="checkbox" className="styles" value="귀여운" id="cute" onClick={(e)=>onToggle(e)}/><label for="cute">귀여운</label>
                        <input type="checkbox" className="styles" value="어른스러운" id="mature" onClick={(e)=>onToggle(e)}/><label for="mature">어른스러운</label>
                        <input type="checkbox" className="styles" value="섹시한" id="sexy" onClick={(e)=>onToggle(e)} /><label for="sexy">섹시한</label>
                        <input type="checkbox" className="styles" value="남자다운" id="manly" onClick={(e)=>onToggle(e)} /><label for="manly">남자다운</label>
                        <input type="checkbox" className="styles" value="청순한" id="natural" onClick={(e)=>onToggle(e)} /><label for="natural">청순한</label>
                        <input type="checkbox" className="styles" value="호기심많은" id="curious" onClick={(e)=>onToggle(e)} /><label for="curious">호기심많은</label>
                        <input type="checkbox" className="styles" value="진중한" id="serious" onClick={(e)=>onToggle(e)} /><label for="serious">진중한</label>
                        <input type="checkbox" className="styles" value="과감한" id="agressive" onClick={(e)=>onToggle(e)} /><label for="agressive">과감한</label>
                        <input type="checkbox" className="styles" value="지적인" id="intelli" onClick={(e)=>onToggle(e)} /><label for="intelli">지적인</label>
                        <input type="checkbox" className="styles" value="츤데레" id="tsndere" onClick={(e)=>onToggle(e)} /><label for="tsndere">츤데레</label>
                        <input type="checkbox" className="styles" value="솔직한" id="honesty" onClick={(e)=>onToggle(e)} /><label for="honesty">솔직한</label>
                        <input type="checkbox" className="styles" value="성숙한" id="growth" onClick={(e)=>onToggle(e)} /><label for="growth">성숙한</label>
                        <input type="checkbox" className="styles" value="쿨한" id="cool" onClick={(e)=>onToggle(e)} /><label for="cool">쿨한</label>
                        <input type="checkbox" className="styles" value="유머있는" id="humorous" onClick={(e)=>onToggle(e)} /><label for="humorous">유머있는</label>
                        <input type="checkbox" className="styles" value="배려심많은" id="careful" onClick={(e)=>onToggle(e)} /><label for="careful">배려심많은</label>
                        <input type="checkbox" className="styles" value="소심한" id="timid" onClick={(e)=>onToggle(e)} /><label for="timid">소심한</label>
                        <input type="checkbox" className="styles" value="시니컬한" id="cynical" onClick={(e)=>onToggle(e)} /><label for="cynical">시니컬한</label>
                        <input type="checkbox" className="styles" value="키가큰" id="tall" onClick={(e)=>onToggle(e)} /><label for="tall">키가큰</label>
                        <input type="checkbox" className="styles" value="아담한" id="small" onClick={(e)=>onToggle(e)} /><label for="small">아담한</label>
                        <input type="checkbox" className="styles" value="쾌활한" id="outgoing" onClick={(e)=>onToggle(e)} /><label for="outgoing">쾌활한</label>
                        <input type="checkbox" className="styles" value="어리버리" id="clumsy" onClick={(e)=>onToggle(e)} /><label for="clumsy">어리버리</label>
                        <input type="checkbox" className="styles" value="감성적" id="emotional" onClick={(e)=>onToggle(e)} /><label for="emotional">감성적</label>
                        <input type="checkbox" className="styles" value="책임감있는" id="leadership" onClick={(e)=>onToggle(e)} /><label for="leadership">책임감있는</label>
                        <input type="checkbox" className="styles" value="통통튀는" id="bubbly" onClick={(e)=>onToggle(e)} /><label for="bubbly">통통튀는</label>
                        <input type="checkbox" className="styles" value="드립장인" id="funny" onClick={(e)=>onToggle(e)} /><label for="funny">드립장인</label>
                        <input type="checkbox" className="styles" value="깔끔한" id="tidy" onClick={(e)=>onToggle(e)} /><label for="tidy">깔끔한</label>
                        <input type="checkbox" className="styles" value="힘이센" id="strong" onClick={(e)=>onToggle(e)} /><label for="strong">힘이센</label>
                        <input type="checkbox" className="styles" value="인정많은" id="empathy" onClick={(e)=>onToggle(e)} /><label for="empathy">인정많은</label>
                        <input type="checkbox" className="styles" value="뚝딱이" id="ddukddak" onClick={(e)=>onToggle(e)} /><label for="ddukddak">뚝딱이</label>
                        <input type="checkbox" className="styles" value="사회성좋은" id="social" onClick={(e)=>onToggle(e)} /><label for="social">사회성좋은</label>
                        <input type="checkbox" className="styles" value="믿음직한" id="trustworthy" onClick={(e)=>onToggle(e)} /><label for="trustworthy">믿음직한</label>
                        <input type="checkbox" className="styles" value="미식가" id="foodlover" onClick={(e)=>onToggle(e)} /><label for="foodlover">미식가</label>
                        <input type="checkbox" className="styles" value="활동적인" id="active" onClick={(e)=>onToggle(e)} /><label for="active">활동적인</label>
                        <input type="checkbox" className="styles" value="고양이파" id="catperson" onClick={(e)=>onToggle(e)} /><label for="catperson">고양이파</label>
                        <input type="checkbox" className="styles" value="강아지파" id="dogperson" onClick={(e)=>onToggle(e)} /><label for="dogperson">강아지파</label>
                        <input type="checkbox" className="styles" value="부먹" id="pour" onClick={(e)=>onToggle(e)} /><label for="pour">부먹</label>
                        <input type="checkbox" className="styles" value="찍먹" id="dip" onClick={(e)=>onToggle(e)} /><label for="dip">찍먹</label>
                        <input type="checkbox" className="styles" value="바깥순이" id="outgirl" onClick={(e)=>onToggle(e)} /><label for="outgirl">바깥순이</label>
                        <input type="checkbox" className="styles" value="바깥돌이" id="outboy" onClick={(e)=>onToggle(e)} /><label for="outboy">바깥돌이</label>
                        <input type="checkbox" className="styles" value="집순이" id="homebodygirl" onClick={(e)=>onToggle(e)} /><label for="homebodygirl">집순이</label>
                        <input type="checkbox" className="styles" value="집돌이" id="hombodyboy" onClick={(e)=>onToggle(e)} /><label for="hombodyboy">집돌이</label>
                        <input type="checkbox" className="styles" value="친근한" id="friendly" onClick={(e)=>onToggle(e)} /><label for="friendly">친근한</label>
                        <input type="checkbox" className="styles" value="독립적인" id="independency" onClick={(e)=>onToggle(e)} /><label for="independency">독립적인</label>
                        <input type="checkbox" className="styles" value="무던한" id="dull" onClick={(e)=>onToggle(e)} /><label for="dull">무던한</label>
                        <input type="checkbox" className="styles" value="멘탈왕" id="mentalking" onClick={(e)=>onToggle(e)} /><label for="mentalking">멘탈왕</label>
                        <input type="checkbox" className="styles" value="양심적인" id="conscience" onClick={(e)=>onToggle(e)} /><label for="conscience">양심적인</label>
                        <input type="checkbox" className="styles" value="계획적인" id="organized" onClick={(e)=>onToggle(e)} /><label for="organized">계획적인</label>
                        <div class="findF_3">
                        <button >완료</button>
                        </div>
                    </form>
                </div>

        </>
    )
}

export default FindOne;