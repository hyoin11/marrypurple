import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import Worldcup2Container from '../containers/enter_worldcup/Worldcup2Container';

const Worldcup1Page = () => {
    return (
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <ContentContainer >
                    <Worldcup2Container/>
                </ContentContainer>
            </div>
        </>
    )
}

export default Worldcup1Page;
