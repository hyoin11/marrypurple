import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import TelepathyContainer from '../containers/telepathy/TelepathyContainer';

const TelepathyPage = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <TelepathyContainer/>
            </ContentContainer>
        </div>
    )
}

export default TelepathyPage;