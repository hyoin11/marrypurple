import React, { useEffect } from 'react';
import AdminLogin from '../../../components/admin/auth/AdminLogin';
import { withRouter } from 'react-router-dom';

const AdminLoginContainer = ({ history }) => {
    return (
        <AdminLogin history={history}/>
    )
}

export default withRouter(AdminLoginContainer);
