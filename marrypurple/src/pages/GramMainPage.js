import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import GramLikeMainContainer from '../containers/enter_gram/GramLikeMainContainer';
import GramMainContainer from '../containers/enter_gram/GramMainContainer';

const GramMainPage = () => {
    return (
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <ContentContainer >
                    <GramLikeMainContainer/>
                    <GramMainContainer/>
                </ContentContainer>
            </div>
        </>
    )
}

export default GramMainPage;