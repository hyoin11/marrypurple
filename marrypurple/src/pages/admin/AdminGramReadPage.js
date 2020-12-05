import React from 'react';
import AdminHeaderContainer from '../../containers/admin/common/AdminHeaderContainer';
import AdminAsideContainer from '../../containers/admin/common/AdminAsideContainer';
import AdminContentContainer from '../../containers/admin/common/AdminContentContainer';
import AdminGramReadContainer from '../../containers/admin/gram/AdminGramReadContainer';

const AdminMainPage = () => {
    return(
        <>
            <div className="adminContainer">
                <AdminHeaderContainer/>
                <AdminAsideContainer/>
                <AdminContentContainer>
                    <AdminGramReadContainer/>
                </AdminContentContainer>
            </div>
            
        </>
    )
}

export default AdminMainPage;