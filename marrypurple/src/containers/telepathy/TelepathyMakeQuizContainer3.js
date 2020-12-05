import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import TelepathyMakeQuiz3 from '../../components/telepathy/TelepathyMakeQuiz3'
import '../../lib/styles/Telepathy_make_quiz_fin.scss'

const TelepathyMakeQuizContainer3 = ({location}) => {
    const[div, setDiv] = useState({
        unfold:''
    })

    const UnfoldToggle = (num) => {
        if (div.unfold !== num){
            setDiv({unfold: num})
        }else {
            setDiv({unfold: ''})
        }
    }
    
    const collectmun = location.mun;
    const collectans = location.ans;

    const tel_QnA_situation = [
        {
            open:'mun1open',
            name:'answer1',
            mun:'연인과의 연락 빈도',
            ans1:'내 할일이 먼저다. 할일 끝나고 연락하는 스타일',
            ans2:'연락이 오면 칼답. 그러나 자주 연락하는 스타일은 아니다.',
            ans3:'연인과의 연락은 필수. 연락이 잘 되었으면 좋겠다.'
        },
        {
            open:'mun2open',
            name:'answer2',
            mun:'연인이 클럽에 갔던 것을 들켰을 때',
            ans1:'클럽이 뭐가 대수냐. 상관없다.',
            ans2:'바로 추궁한다.',
            ans3:'맞불작전. 나도 클럽에 간다.'
        },
        {
            open:'mun3open',
            name:'answer3',
            mun:'연인의 이성친구',
            ans1:'이성간에 친구가 어디있어? 연락 끊으라고 한다.',
            ans2:'상관 없다. 나도 이성친구 있다.',
            ans3:'티는 안내지만 속으로 열불내고 있음'
        },
        {
            open:'mun4open',
            name:'answer4',
            mun:'연인의 통금시간',
            ans1:'존중해준다.',
            ans2:'요즘세상에 무슨 통금이냐 더 놀자고 조른다.',
            ans3:'통금시간 있는 사람과 사귀지 않는다.'
        },
        {
            open:'mun5open',
            name:'answer5',
            mun:'연인이 밤새 연락이 되지 않을 때',
            ans1:'큰일 났을까봐 걱정한다.',
            ans2:'어디서 바람피는 거 아냐? 헤어질 각 잰다.',
            ans3:'연락 100통 보낸다.'
        },
        {
            open:'mun6open',
            name:'answer6',
            mun:'연인이 아플 때',
            ans1:'걱정되지만 푹 쉬게 혼자 둔다.',
            ans2:'당장 약과 죽을 사들고 찾아간다.',
            ans3:'연인의 의사를 존중해 행동한다.'
        },
        {
            open:'mun7open',
            name:'answer7',
            mun:'이제 모르겠다 그냥 안할래.',
            ans1:'가까이 사는 친구에게 전화해 부탁한다',
            ans2:'그냥 나온다',
            ans3:'다른 소품으로 어떻게 해결해본다.'
        },
        {
            open:'mun8open',
            name:'answer8',
            mun:'갑자기 1000만원이 생겼을 때 내가 할 일',
            ans1:'바로 저금한다.',
            ans2:'어차피 없었을 돈이 생겼으니 그냥 쓴다.',
            ans3:'부모님께 드린다.'
        },
        {
            open:'mun9open',
            name:'answer9',
            mun:'외나무 다리를 건널 때, 나는?',
            ans1:'조심조심 천천히',
            ans2:'빠지면 뭐 어때 성큼성큼 간다',
            ans3:'기어(?)간다'
        },
        {
            open:'mun10open',
            name:'answer10',
            mun:'회사 동료가 큰 일을 당해 업무가 몰릴 때',
            ans1:'아무리 그래도 공과 사는 구분해야지',
            ans2:'동료는 일을 할 수 없는 상황이니 이해한다.',
            ans3:'큰 일을 당한 동료가 마음아파 기꺼이 업무를 본다.'
        }
    ]
    return(
        <>
            <TelepathyMakeQuiz3 OnToggle={UnfoldToggle} unfoldDiv={div} Qna={tel_QnA_situation} sort={'연애'} handMun={collectmun} handAns={collectans} />
        </>
    )
}

export default withRouter(TelepathyMakeQuizContainer3);