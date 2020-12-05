import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import WhoLikesMeContainer from '../containers/matching/WhoLikesMeContainer';

const WhoLikesMePage = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <WhoLikesMeContainer/>
            </ContentContainer>
        </div>
    )
}

export default WhoLikesMePage;