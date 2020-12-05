import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TelepathyGetQuiz from '../../components/telepathy/TelepathyGetQuiz';
import { teleAns } from '../../modules/telepathy';
import { withRouter } from 'react-router-dom';

const TelepathyGetQuizContainer = ({history}) => {
    const dispatch = useDispatch();
    const { telepathy, error, user } = useSelector(({ telepathy, user }) => ({
        telepathy: telepathy.ans,
        error: telepathy.error,
        user: user.user
    }));
    useEffect(() => {
        dispatch(teleAns());
    }, [dispatch,history]);

    console.log(telepathy)
    let mun = [];
    let ans = [];
    let user_nick = '';
    let pic = '';
    let my_pic = '';
    let my_nick='';

    if(telepathy){
        mun = telepathy.questions;
        ans = telepathy.answers;
        pic = telepathy.profile_pic;
        user_nick = telepathy.user_nick;
    }
    if(user){
        my_pic = (user.profile_pic)[0];
        my_nick = user.user_nick
    }

    const tel_QnA_situation = [
        {
            open:'mun1open',
            name:'answer1',
            mun:'선호하는 음식 종류는?',
            dap1:'입맛은 흥선대원군, 한식!',
            dap2:'단짠의 조화, 일식!',
            dap3:'고기 썰 줄 아는 나는 양식'
        },
        {
            open:'mun2open',
            name:'answer2',
            mun:'카페에서 즐기는 음료?',
            dap1:'얼어 죽어도 아이스 프라페',
            dap2:'커피종류만 마시는 커피매니아',
            dap3:'입맛은 어르신, 차가 최고'
        },
        {
            open:'mun3open',
            name:'answer3',
            mun:'놀이공원 가서 내가 처음으로 탈 것?',
            dap1:'시작부터 세게 간다. 롤러코스터',
            dap2:'놀이기구 no! 귀신의 집부터 간다',
            dap3:'회전목마로 워밍업'
        },
        {
            open:'mun4open',
            name:'answer4',
            mun:'좋아하는 영화취향은?',
            dap1:'긴장감 있는 반전 스릴러',
            dap2:'볼거리 많은 액션 판타지',
            dap3:'달달한 로맨틱 코메디'
        },
        {
            open:'mun5open',
            name:'answer5',
            mun:'좋아하는 음악 스타일?',
            dap1:'한국인의 자부심, k-pop',
            dap2:'요즘 대세 랩',
            dap3:'팝송'
        },
        {
            open:'mun6open',
            name:'answer6',
            mun:'내가 선택할 라면은?',
            dap1:'신라면',
            dap2:'불닭볶음면',
            dap3:'튀김우동'
        },
        {
            open:'mun7open',
            name:'answer7',
            mun:'내가 샤워하는 시간은?',
            dap1:'아침',
            dap2:'점심',
            dap3:'저녁'
        },
        {
            open:'mun8open',
            name:'answer8',
            mun:'내가 휴일을 즐기는 방법은?',
            dap1:'일단 친구들에게 전화해 나오라고 한다.',
            dap2:'영화 목록을 잔뜩 뽑아서 집에서 힐링타임 갖기',
            dap3:'휴일도 알차게! 봉사활동을 떠난다.'
        },
        {
            open:'mun9open',
            name:'answer9',
            mun:'나는 강아지파? 고양이파?',
            dap1:'강아지파',
            dap2:'고양이파',
            dap3:'동물을 싫어한다'
        },
        {
            open:'mun10open',
            name:'answer10',
            mun:'내가 선택할 시리얼은?',
            dap1:'콘 후레이크',
            dap2:'후르츠링',
            dap3:'초코첵스'
        }
    ]
    const pick = (tel_QnA_situation.filter(list => list.mun === mun[0]))[0]

    
    return(
        <>
            <TelepathyGetQuiz mun={mun} ans={ans} pic={pic} user_nick={user_nick} my_pic={my_pic} my_nick={my_nick} tot_mun={pick} />
        </>
    )
}

export default withRouter(TelepathyGetQuizContainer);