import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import TelepathyMakeQuizFinContainer from '../containers/telepathy/TelepathyMakeQuizFinContainer'

const TelepathyMakeQuizFin = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <TelepathyMakeQuizFinContainer/>
            </ContentContainer>
        </div>
    )
}

export default TelepathyMakeQuizFin;