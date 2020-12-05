import React, { useEffect } from 'react';
import AdminAside from '../../../components/admin/common/AdminAside';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AdminAsideContainer = ({ match }) => {
    // const dispatch = useDispatch();
    // const { currentPage } = useSelector(() => ({
    //     currentPage: match.path,
    // }));

    // console.log(match.path);

    return (
        <AdminAside currentPage={match.path}/>
    )
}

export default withRouter(AdminAsideContainer);
