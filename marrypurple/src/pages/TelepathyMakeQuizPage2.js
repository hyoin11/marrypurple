import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import TelepathyMakeQuizContainer2 from '../containers/telepathy/TelepathyMakeQuizContainer2.js'

const TelepathyMakeQuizPage2 = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <TelepathyMakeQuizContainer2/>
            </ContentContainer>
        </div>
    )
}

export default TelepathyMakeQuizPage2;