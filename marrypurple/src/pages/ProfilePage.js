import React from 'react';
import ProfileContainer from '../containers/auth/ProfileContainer';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';

const ProfilePage = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <ProfileContainer/>
            </ContentContainer>
        </div>
    )
}

export default ProfilePage;