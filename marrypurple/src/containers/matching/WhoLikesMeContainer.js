import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WhoLikesMe from '../../components/matching/WhoLikesMe';
import {likeList,unloadLikeList} from '../../modules/matchLike';

const WhoLikesMeContainer = () => {
    const dispatch = useDispatch();
    const { matchLike, error, loading, user } = useSelector(({ matchLike, loading, user }) => ({
        matchLike: matchLike.matchLike,
        error: matchLike.error,
        loading: loading['match/MATCH_LIKE'],
        user: user.user
    }));
    useEffect(() => {
        dispatch(likeList());
        return () => {
            dispatch(unloadLikeList());
        };
    }, [dispatch]);
    console.log(user.premium)
    return (
        <WhoLikesMe matchLike={matchLike} didPay={user.premium}/>
    )
}

export default withRouter(WhoLikesMeContainer);