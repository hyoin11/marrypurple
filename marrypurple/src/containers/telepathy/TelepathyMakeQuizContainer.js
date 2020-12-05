import React, {useState} from 'react';
import TelepathyMakeQuiz from '../../components/telepathy/TelepathyMakeQuiz'

const TelepathyMakeQuizContainer = () => {
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
    const tel_QnA_situation = [
        {
            open:'mun1open',
            name:'answer1',
            mun:'선호하는 음식 종류는?',
            ans1:'입맛은 흥선대원군, 한식!',
            ans2:'단짠의 조화, 일식!',
            ans3:'고기 썰 줄 아는 나는 양식'
        },
        {
            open:'mun2open',
            name:'answer2',
            mun:'카페에서 즐기는 음료?',
            ans1:'얼어 죽어도 아이스 프라페',
            ans2:'커피종류만 마시는 커피매니아',
            ans3:'입맛은 어르신, 차가 최고'
        },
        {
            open:'mun3open',
            name:'answer3',
            mun:'놀이공원 가서 내가 처음으로 탈 것?',
            ans1:'시작부터 세게 간다. 롤러코스터',
            ans2:'놀이기구 no! 귀신의 집부터 간다',
            ans3:'회전목마로 워밍업'
        },
        {
            open:'mun4open',
            name:'answer4',
            mun:'좋아하는 영화취향은?',
            ans1:'긴장감 있는 반전 스릴러',
            ans2:'볼거리 많은 액션 판타지',
            ans3:'달달한 로맨틱 코메디'
        },
        {
            open:'mun5open',
            name:'answer5',
            mun:'좋아하는 음악 스타일?',
            ans1:'한국인의 자부심, k-pop',
            ans2:'요즘 대세 랩',
            ans3:'팝송'
        },
        {
            open:'mun6open',
            name:'answer6',
            mun:'내가 선택할 라면은?',
            ans1:'신라면',
            ans2:'불닭볶음면',
            ans3:'튀김우동'
        },
        {
            open:'mun7open',
            name:'answer7',
            mun:'내가 샤워하는 시간은?',
            ans1:'아침',
            ans2:'점심',
            ans3:'저녁'
        },
        {
            open:'mun8open',
            name:'answer8',
            mun:'내가 휴일을 즐기는 방법은?',
            ans1:'일단 친구들에게 전화해 나오라고 한다.',
            ans2:'영화 목록을 잔뜩 뽑아서 집에서 힐링타임 갖기',
            ans3:'휴일도 알차게! 봉사활동을 떠난다.'
        },
        {
            open:'mun9open',
            name:'answer9',
            mun:'나는 강아지파? 고양이파?',
            ans1:'강아지파',
            ans2:'고양이파',
            ans3:'동물을 싫어한다'
        },
        {
            open:'mun10open',
            name:'answer10',
            mun:'내가 선택할 시리얼은?',
            ans1:'콘 후레이크',
            ans2:'후르츠링',
            ans3:'초코첵스'
        }
    ]
    return(
        <>
            <TelepathyMakeQuiz OnToggle={UnfoldToggle} unfoldDiv={div} Qna={tel_QnA_situation} sort={'취향'}/>
        </>
    )
}

export default TelepathyMakeQuizContainer;