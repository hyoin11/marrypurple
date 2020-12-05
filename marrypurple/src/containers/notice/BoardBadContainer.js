import React, { useEffect } from 'react';
import BoardBad from '../../components/notice/BoardBad';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { badListPosts } from '../../modules/badList';

const BoardBadContainer = ({ location }) => {
    const dispatch = useDispatch();
    const { badList, error, loading } = useSelector(
        ({ badList, loading }) => ({
            badList: badList.badList,
            error: badList.error,
            loading: loading['badBoard/BADLIST_POSTS']
        })
    );

    useEffect(() => {
        const { user_nick, reason } = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(badListPosts({ user_nick, reason }));
    }, [dispatch, location.search]);

    return (
        <BoardBad loading={loading} error={error} badList={badList}/>
    )
}

export default withRouter(BoardBadContainer);