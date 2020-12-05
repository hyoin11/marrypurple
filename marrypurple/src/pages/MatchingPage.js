import React from 'react';
import MatchingContainers from '../containers/matching/MatchingContainer'
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';


const MatchingPage = () => {

    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <MatchingContainers/>
            </ContentContainer>
        </div>
    )
}

export default MatchingPage