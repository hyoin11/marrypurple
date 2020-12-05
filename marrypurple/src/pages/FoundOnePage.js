import React from 'react';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import ContentContainer from '../containers/common/ContentContainer';
import FoundOneContainer from '../containers/enter_find/FoundOneContainer'
import { withRouter } from 'react-router-dom';

const FoundOnePage = ({location}) => {
    let name = ''
    
    if(location.data){
        name = location.data
    }
    // console.log('어디까지 데이터가 가는지 추적.',name)
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <FoundOneContainer data={name}/>
            </ContentContainer>
        </div>
    )
}

export default withRouter(FoundOnePage)