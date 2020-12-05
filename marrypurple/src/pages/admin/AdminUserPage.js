import React from 'react';
import AdminHeaderContainer from '../../containers/admin/common/AdminHeaderContainer';
import AdminAsideContainer from '../../containers/admin/common/AdminAsideContainer';
import AdminContentContainer from '../../containers/admin/common/AdminContentContainer';
import AdminUserContainer from '../../containers/admin/user/AdminUserContainer';

const AdminUserPage = () => {
    return(
        <>
            <div className="adminContainer">
                <AdminHeaderContainer/>
                <AdminAsideContainer/>
                <AdminContentContainer>
                    <AdminUserContainer/>
                </AdminContentContainer>
            </div>
            
        </>
    )
}

export default AdminUserPage;