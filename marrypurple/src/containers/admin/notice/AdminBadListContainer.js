import React, { useEffect } from 'react';
import AdminBadList from '../../../components/admin/notice/AdminBadList';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { badListPosts, reportBadList } from '../../../modules/badList';
import qs from 'qs';

const AdminBadListContainer = ({ location, history }) => {
    const dispatch = useDispatch();
    const { badList, error, loading, reportList } = useSelector(
        ({ badList, loading }) => ({
            badList: badList.badList,
            reportList: badList.reportList,
            error: badList.error,
            loading: loading['badBoard/BADLIST_POSTS']
        })
    );

    useEffect(() => {
        const { user_nick, reason } = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(badListPosts({ user_nick, reason }));
        dispatch(reportBadList());
    }, [dispatch, location.search]);
    
    return (
            <AdminBadList badList={badList} history={history} loading={loading} reportList={reportList}/>
    )
}

export default withRouter(AdminBadListContainer);