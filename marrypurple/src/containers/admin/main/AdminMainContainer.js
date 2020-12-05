import React, { useEffect } from 'react';
import AdminMain from '../../../components/admin/main/AdminMain';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reportBadList } from '../../../modules/badList';
import { adminUserList } from '../../../modules/admin'

const AdminMainContainer = () => {
    const dispatch = useDispatch();
    const { user, reportList } = useSelector(
        ({ admin, badList }) => ({
            user: admin.user,
            reportList: badList.reportList,
        })
    );

    useEffect(() => {
        dispatch(adminUserList());
        dispatch(reportBadList());
    }, [dispatch]);

    return (
        <AdminMain user={user} reportList={reportList}/>
    )
}

export default withRouter(AdminMainContainer);
