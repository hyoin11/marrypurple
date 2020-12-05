import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Matching from '../../components/matching/Matching';
import { matchingList, unloadList } from '../../modules/matching'
import { withRouter } from 'react-router-dom';
import {report_} from '../../modules/report';

const MatchingContainer = ({match}) => {
    const urlAddress = match.url 

    const [showProfile, setShowProfile] = useState({
        profileActive: false,
        reportActive: false,
        reportFinish: false
    })
    const onToggle = () => {
        setShowProfile({
            ...showProfile,
            profileActive : !showProfile.profileActive
        })
    };
    const onToggle_report = () => {
        setShowProfile({
            ...showProfile,
            reportActive : !showProfile.reportActive
        })
    };

    const onClickReport = (text, id) => {
        if(window.confirm('신고하시겠습니까? (사유 : '+ text+')')){
            dispatch(report_({id: id, reason: text}))
            if(alert('신고되었습니다.')){
                setShowProfile({
                    ...showProfile,
                    reportFinish : !showProfile.reportFinish
                })
            }
            
        }else{
            alert('신고하지 않습니다')
        }
    }

    const dispatch = useDispatch();
    const { matching, error, loading } = useSelector(({ matching, loading }) => ({
        matching: matching.matching,
        error: matching.error,
        loading: loading['match/MATCH_LIST']
    }));
    useEffect(() => {
        dispatch(matchingList());
        return () => {
            dispatch(unloadList());
        };
    }, [dispatch]);
    return (
        <Matching 
            matching={matching} 
            error={error} 
            loading={loading} 
            onToggle={onToggle} 
            showProfile={showProfile} 
            onToggle_report={onToggle_report}
            urlAddress = {urlAddress}
            onClickReport={onClickReport}
        />
    )
}

export default withRouter(MatchingContainer);
