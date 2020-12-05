import React from 'react';
import AdminHeaderContainer from '../../containers/admin/common/AdminHeaderContainer';
import AdminAsideContainer from '../../containers/admin/common/AdminAsideContainer';
import AdminContentContainer from '../../containers/admin/common/AdminContentContainer';
import AdminMainContainer from '../../containers/admin/main/AdminMainContainer';

const AdminMainPage = () => {
    return(
        <>
            <div className="adminContainer">
                <AdminHeaderContainer/>
                <AdminAsideContainer/>
                <AdminContentContainer>
                    {/* 각 페이지마다 맞는 컨테이너 */}
                    <AdminMainContainer/>
                </AdminContentContainer>
            </div>
            
        </>
    )
}

export default AdminMainPage;