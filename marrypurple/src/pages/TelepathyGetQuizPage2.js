import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import TelepathyGetQuizContainer2 from '../containers/telepathy/TelepathyGetQuizContainer2'

const TelepathyGetQuizPage2 = () => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <TelepathyGetQuizContainer2/>
            </ContentContainer>
        </div>
    )
}

export default TelepathyGetQuizPage2;