import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import ProfileMainContainer from '../containers/profile/ProfileMainContainer';

const ProfileMainPage = () => {
    return (
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <ContentContainer>
                    <ProfileMainContainer/>
                </ContentContainer>
            </div>
        </>
    )
}

export default ProfileMainPage;