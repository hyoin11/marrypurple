import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import FindOneContainer from '../containers/enter_find/FindOneContainer'

const FindOnePage = () => {

    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <FindOneContainer/>
            </ContentContainer>
        </div>
    )
}

export default FindOnePage