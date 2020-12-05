import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import TelepathyGetQuizContainer from '../containers/telepathy/TelepathyGetQuizContainer'

const TelepathyGetQuizPage = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <TelepathyGetQuizContainer/>
            </ContentContainer>
        </div>
    )
}

export default TelepathyGetQuizPage;