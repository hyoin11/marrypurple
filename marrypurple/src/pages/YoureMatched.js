import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import YoureMatchedContainer from '../containers/telepathy/YoureMatchedContainer.js'

const YoureMatched = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <YoureMatchedContainer/>
            </ContentContainer>
        </div>
    )
}

export default YoureMatched;