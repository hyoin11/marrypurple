import React, { useEffect } from 'react';
import AdminRegist from '../../../components/admin/auth/AdminRegist';
import { withRouter } from 'react-router-dom';

const AdminRegistContainer = () => {
    return (
        <AdminRegist />
    )
}

export default withRouter(AdminRegistContainer);
