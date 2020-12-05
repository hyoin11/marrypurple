import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import MatchListContainer from '../containers/match/MatchListContainer';

const MatchListPage = () => {
    return (
        <>
            <div id="wrap10">
                <SideMenuContainer/>
                <ContentContainer>
                    <MatchListContainer/>
                </ContentContainer>
            </div>
        </>
    )
}

export default MatchListPage;