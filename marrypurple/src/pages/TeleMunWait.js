import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import TeleMunWaitContainer from '../containers/telepathy/TeleMunWaitContainer';

const TeleMunWait = () => {
    return(
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <ContentContainer>
                    <TeleMunWaitContainer/>
                </ContentContainer>
            </div>
        </>
    )
}

export default TeleMunWait;