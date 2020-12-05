import React from 'react';
import AdminHeaderContainer from '../../containers/admin/common/AdminHeaderContainer';
import AdminAsideContainer from '../../containers/admin/common/AdminAsideContainer';
import AdminContentContainer from '../../containers/admin/common/AdminContentContainer';
import AdminBadReadContainer from '../../containers/admin/notice/AdminBadReadContainer';

const AdminMainPage = () => {
    return(
        <>
            <div className="adminContainer">
                <AdminHeaderContainer/>
                <AdminAsideContainer/>
                <AdminContentContainer>
                    <AdminBadReadContainer/>
                </AdminContentContainer>
            </div>
            
        </>
    )
}

export default AdminMainPage;