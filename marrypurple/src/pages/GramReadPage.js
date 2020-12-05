import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import GramReadContainer from '../containers/enter_gram/GramReadContainer';

const GramMainPage = () => {
    return (
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <ContentContainer >
                    <GramReadContainer/>
                </ContentContainer>
            </div>
        </>
    )
}

export default GramMainPage;