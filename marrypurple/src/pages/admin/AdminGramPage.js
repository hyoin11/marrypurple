import React from 'react';
import AdminHeaderContainer from '../../containers/admin/common/AdminHeaderContainer';
import AdminAsideContainer from '../../containers/admin/common/AdminAsideContainer';
import AdminContentContainer from '../../containers/admin/common/AdminContentContainer';
import AdminGramContainer from '../../containers/admin/gram/AdminGramContainer';

const AdminMainPage = () => {
    return(
        <>
            <div className="adminContainer">
                <AdminHeaderContainer/>
                <AdminAsideContainer/>
                <AdminContentContainer>
                    <AdminGramContainer/>
                </AdminContentContainer>
            </div>
            
        </>
    )
}

export default AdminMainPage;