import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TelepathyGetQuiz3 from '../../components/telepathy/TelepathyGetQuiz3';
import { teleAns } from '../../modules/telepathy';
import { withRouter } from 'react-router-dom';

const TelepathyGetQuizContainer3 = ({history}) => {
    const dispatch = useDispatch();
    const { telepathy, error, user } = useSelector(({ telepathy, user }) => ({
        telepathy: telepathy.ans,
        error: telepathy.error,
        user: user.user
    }));

    useEffect(() => {
        dispatch(teleAns());
        if(telepathy===''){
            history.push('/user_not_found')
        }
    }, [dispatch,history]);

    let mun = [];
    let ans = [];
    let user_nick = '';
    let pic = '';
    let my_pic = '';
    let my_nick='';
    let user_id = ''

    if(telepathy){
        mun = telepathy.questions;
        ans = telepathy.answers;
        pic = telepathy.profile_pic;
        user_nick = telepathy.user_nick;
        user_id = telepathy.user
    }
    if(user){
        my_pic = (user.profile_pic)[0];
        my_nick = user.user_nick
    }

    const tel_QnA_situation = [
        {
            open:'mun1open',
            name:'answer1',
            mun:'연인과의 연락 빈도',
            dap1:'내 할일이 먼저다. 할일 끝나고 연락하는 스타일',
            dap2:'연락이 오면 칼답. 그러나 자주 연락하는 스타일은 아니다.',
            dap3:'연인과의 연락은 필수. 연락이 잘 되었으면 좋겠다.'
        },
        {
            open:'mun2open',
            name:'answer2',
            mun:'연인이 클럽에 갔던 것을 들켰을 때',
            dap1:'클럽이 뭐가 대수냐. 상관없다.',
            dap2:'바로 추궁한다.',
            dap3:'맞불작전. 나도 클럽에 간다.'
        },
        {
            open:'mun3open',
            name:'answer3',
            mun:'연인의 이성친구',
            dap1:'이성간에 친구가 어디있어? 연락 끊으라고 한다.',
            dap2:'상관 없다. 나도 이성친구 있다.',
            dap3:'티는 안내지만 속으로 열불내고 있음'
        },
        {
            open:'mun4open',
            name:'answer4',
            mun:'연인의 통금시간',
            dap1:'존중해준다.',
            dap2:'요즘세상에 무슨 통금이냐 더 놀자고 조른다.',
            dap3:'통금시간 있는 사람과 사귀지 않는다.'
        },
        {
            open:'mun5open',
            name:'answer5',
            mun:'연인이 밤새 연락이 되지 않을 때',
            dap1:'큰일 났을까봐 걱정한다.',
            dap2:'어디서 바람피는 거 아냐? 헤어질 각 잰다.',
            dap3:'연락 100통 보낸다.'
        },
        {
            open:'mun6open',
            name:'answer6',
            mun:'연인이 아플 때',
            dap1:'걱정되지만 푹 쉬게 혼자 둔다.',
            dap2:'당장 약과 죽을 사들고 찾아간다.',
            dap3:'연인의 의사를 존중해 행동한다.'
        },
        {
            open:'mun7open',
            name:'answer7',
            mun:'이제 모르겠다 그냥 안할래.',
            dap1:'가까이 사는 친구에게 전화해 부탁한다',
            dap2:'그냥 나온다',
            dap3:'다른 소품으로 어떻게 해결해본다.'
        },
        {
            open:'mun8open',
            name:'answer8',
            mun:'갑자기 1000만원이 생겼을 때 내가 할 일',
            dap1:'바로 저금한다.',
            dap2:'어차피 없었을 돈이 생겼으니 그냥 쓴다.',
            dap3:'부모님께 드린다.'
        },
        {
            open:'mun9open',
            name:'answer9',
            mun:'외나무 다리를 건널 때, 나는?',
            dap1:'조심조심 천천히',
            dap2:'빠지면 뭐 어때 성큼성큼 간다',
            dap3:'기어(?)간다'
        },
        {
            open:'mun10open',
            name:'answer10',
            mun:'회사 동료가 큰 일을 당해 업무가 몰릴 때',
            dap1:'아무리 그래도 공과 사는 구분해야지',
            dap2:'동료는 일을 할 수 없는 상황이니 이해한다.',
            dap3:'큰 일을 당한 동료가 마음아파 기꺼이 업무를 본다.'
        }
    ]
    const pick = (tel_QnA_situation.filter(list => list.mun === mun[2]))[0]
    console.log(ans[2])
    
    return(
        <>
            <TelepathyGetQuiz3 mun={mun} ans={ans[2]} pic={pic} user_nick={user_nick} my_pic={my_pic} my_nick={my_nick} tot_mun={pick} user_id={user_id} />
        </>
    )
}

export default withRouter(TelepathyGetQuizContainer3);