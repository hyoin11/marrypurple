import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import Worldcup1Container from '../containers/enter_worldcup/Worldcup1Container';

const Worldcup1Page = () => {
    return (
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <ContentContainer >
                    <Worldcup1Container/>
                </ContentContainer>
            </div>
        </>
    )
}

export default Worldcup1Page;
