import React from 'react';
import AdminHeaderContainer from '../../containers/admin/common/AdminHeaderContainer';
import AdminAsideContainer from '../../containers/admin/common/AdminAsideContainer';
import AdminContentContainer from '../../containers/admin/common/AdminContentContainer';
import AdminBadListContainer from '../../containers/admin/notice/AdminBadListContainer';

const AdminMainPage = () => {
    return(
        <>
            <div className="adminContainer">
                <AdminHeaderContainer/>
                <AdminAsideContainer/>
                <AdminContentContainer>
                    <AdminBadListContainer/>
                </AdminContentContainer>
            </div>
            
        </>
    )
}

export default AdminMainPage;