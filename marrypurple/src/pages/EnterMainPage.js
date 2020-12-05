import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import EnterMainContainer from '../containers/enter/EnterMainContainer';

const EnterMainPage = () => {
    return (
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <ContentContainer>
                    <EnterMainContainer/>
                </ContentContainer>
            </div>
        </>
    )
}

export default EnterMainPage;