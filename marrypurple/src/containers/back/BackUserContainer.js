import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Matching from '../../components/matching/Matching';
import { backList, unloadBackList } from '../../modules/back'
import { withRouter } from 'react-router-dom';

const MatchingContainer = ({match}) => {
    const urlAddress = match.url // url경로

    const [showProfile, setShowProfile] = useState({//div껐다켰다 하는 용도로 만든 state
        profileActive: false,
        reportActive: false
    })
    const onToggle = () => {//프로필보기 버튼 눌렀을 때 실행
        setShowProfile({
            ...showProfile,
            profileActive : !showProfile.profileActive
        })
    };
    const onToggle_report = () => { //신고하기버튼 눌렀을 때 실행
        setShowProfile({
            ...showProfile,
            reportActive : !showProfile.reportActive
        })
    };
    const dispatch = useDispatch();//디스패치 만들기
    const { back, error, loading } = useSelector(({ back, loading }) => ({ 
        //selector에서 module에서 저장해둔 값 불러온다.
        back: back.back,
        error: back.error,
        loading: loading['match/FIND_BACK_USER']
    }));
    useEffect(() => {
        dispatch(backList());//module에서 저장해둔 액션 디스패치
        return () => {
            dispatch(unloadBackList());//module에서 저장해둔 사가 디스패치
        };
    }, [dispatch]);
    return (
                <Matching 
                    back={back} 
                    error={error} 
                    loading={loading} 
                    onToggle={onToggle} 
                    showProfile={showProfile} 
                    onToggle_report={onToggle_report}
                    urlAddress = {urlAddress}
                />
    )
}

export default withRouter(MatchingContainer);
