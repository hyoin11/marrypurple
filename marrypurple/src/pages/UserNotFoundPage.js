import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';

const UserNotFoundPage = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <div>해당하는 유저가 없습니다^^;</div>
            </ContentContainer>
        </div>
    )
}

export default UserNotFoundPage;