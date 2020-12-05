import React, { useEffect } from 'react';
import Worldcup3 from '../../components/enter_worldcup/Worldcup3';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { winnerProfile, unloadWinner } from '../../modules/worldcup';
import { like } from '../../modules/ctrl'

const Worldcup3Container = ({ match }) => {
    const { user_id } = match.params;
    const dispatch = useDispatch();
    const { winner, error, loading } = useSelector(({ worldcup, loading }) => ({
        winner: worldcup.winner,
        error: worldcup.error,
        loading: loading['worldcup/WINNER']
    }));

    useEffect(() => {
        dispatch(winnerProfile(user_id));
        return () => {
            dispatch(unloadWinner());
        }
    }, [dispatch, user_id]);

    const likeBtn = () => {
        dispatch(like({ id: user_id }))
    }

    return (
        <Worldcup3 winner={winner} error={error} loading={loading} likeBtn={likeBtn}/>
    )
}

export default withRouter(Worldcup3Container);