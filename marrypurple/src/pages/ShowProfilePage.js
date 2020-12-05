import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import ShowProfileContainer from '../containers/matching/ShowProfileContainer'
import { withRouter } from 'react-router-dom';

const ShowProfilePage = ({location}) => {
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <ShowProfileContainer user_data={location.data} my_email={location.myInfo}/>
            </ContentContainer>
        </div>
    )
}

export default withRouter(ShowProfilePage);