import React from 'react';
import AdminHeaderContainer from '../../containers/admin/common/AdminHeaderContainer';
import AdminAsideContainer from '../../containers/admin/common/AdminAsideContainer';
import AdminContentContainer from '../../containers/admin/common/AdminContentContainer';
import AdminBadWriteContainer from '../../containers/admin/notice/AdminBadWriteContainer';

const AdminMainPage = () => {
    return(
        <>
            <div className="adminContainer">
                <AdminHeaderContainer/>
                <AdminAsideContainer/>
                <AdminContentContainer>
                    <AdminBadWriteContainer/>
                </AdminContentContainer>
            </div>
            
        </>
    )
}

export default AdminMainPage;