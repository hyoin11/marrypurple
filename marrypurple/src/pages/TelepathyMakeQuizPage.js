import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import TelepathyMakeQuizContainer from '../containers/telepathy/TelepathyMakeQuizContainer'

const TelepathyMakeQuizPage = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <TelepathyMakeQuizContainer/>
            </ContentContainer>
        </div>
    )
}

export default TelepathyMakeQuizPage;