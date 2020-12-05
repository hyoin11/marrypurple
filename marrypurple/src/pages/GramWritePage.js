import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import GramWriteContainer from '../containers/enter_gram/GramWriteContainer';

const GramMainPage = () => {
    return (
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <ContentContainer >
                    <GramWriteContainer/>
                </ContentContainer>
            </div>
        </>
    )
}

export default GramMainPage;