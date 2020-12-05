import React, { useEffect } from 'react';
import AdminHeader from '../../../components/admin/common/AdminHeader';
import { withRouter } from 'react-router-dom';

const AdminHeaderContainer = () => {
    return (
        <AdminHeader />
    )
}

export default withRouter(AdminHeaderContainer);
