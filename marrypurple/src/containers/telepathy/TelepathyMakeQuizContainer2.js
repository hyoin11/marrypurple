import React, {useState} from 'react';
import TelepathyMakeQuiz2 from '../../components/telepathy/TelepathyMakeQuiz2'
import { withRouter } from "react-router-dom";

const TelepathyMakeQuizContainer2 = ({location}) => {
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
            mun:'친구가 무리한 부탁을 했을 때',
            ans1:'내코가 석자. 바로 거절한다.',
            ans2:'거절하는게 무리. 그냥 들어준다.',
            ans3:'다른화제로 이야기를 돌린다'
        },
        {
            open:'mun2open',
            name:'answer2',
            mun:'지하철 열차가 멈췄을 때',
            ans1:'문자로 항의한다.',
            ans2:'그냥 핸드폰하며 기다린다.',
            ans3:'버스타고 간다'
        },
        {
            open:'mun3open',
            name:'answer3',
            mun:'계획이 틀어졌을 때',
            ans1:'계획은 원래 틀어지라고 있는 것',
            ans2:'당황해 사고가 정지한다.',
            ans3:'이럴까봐 애초에 계획을 안세운다'
        },
        {
            open:'mun4open',
            name:'answer4',
            mun:'방이 지저분할 때',
            ans1:'방이 지저분한 걸 눈치채지 못한다.',
            ans2:'바로 방을 정리하고 다른일을 시작한다.',
            ans3:'어차피 지저분해질거 일단 눕는다'
        },
        {
            open:'mun5open',
            name:'answer5',
            mun:'상사가 급 회식을 제안할 때',
            ans1:'약속이 있었다고 거짓말하고 뺀다.',
            ans2:'난 회식이 좋다. 기꺼이 따라간다.',
            ans3:'회식을 할거면 미리 말해달라고 상사에게 전한다.'
        },
        {
            open:'mun6open',
            name:'answer6',
            mun:'피로도 최고인데 지하철에 할머니가 보일 때',
            ans1:'자는척 한다.',
            ans2:'할머니가 더 피곤하시겠지. 자리를 양보한다.',
            ans3:'눈치 보다 다른사람이 안 비켜주면 양보한다.'
        },
        {
            open:'mun7open',
            name:'answer7',
            mun:'화장실에 휴지가 없는 상황',
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
            <TelepathyMakeQuiz2 OnToggle={UnfoldToggle} unfoldDiv={div} Qna={tel_QnA_situation} sort={'상황'} handMun={collectmun} handAns={collectans} />
        </>
    )
}

export default withRouter(TelepathyMakeQuizContainer2);