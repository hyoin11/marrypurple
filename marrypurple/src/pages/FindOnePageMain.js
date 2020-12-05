import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import FindOneMainContainer from '../containers/enter_find/FindOneMainContainer'

const FindOnePage = () => {

    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <FindOneMainContainer/>
            </ContentContainer>
        </div>
    )
}

export default FindOnePage