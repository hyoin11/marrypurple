import React, { useEffect } from 'react';
import AdminContent from '../../../components/admin/common/AdminContent';
import { withRouter } from 'react-router-dom';

const AdminContentContainer = ({ children }) => {
    return (
        <AdminContent>{children}</AdminContent>
    )
}

export default withRouter(AdminContentContainer);
