import React from 'react';
import JoinChatRoomContainer from '../containers/chat/JoinChatRoomContainer'
import ContentContainer from '../containers/common/ContentContainer';
import SideMenuContainer from '../containers/common/SideMenuContainer';
import { withRouter } from 'react-router-dom';

const ChatPage = ({location}) => {
    let profile_pic = [];
    let user_id = ''
    let user_nick = '';
    let user_email = '';
    let my_email =''
    if(location.data && location.myInfo){
        user_id = location.data._id
        profile_pic = location.data.profile_pic
        user_nick = location.data.user_nick
        user_email = location.data.user_email
        my_email = location.myInfo
    }
    // console.log(user_id);
    // console.log(user_nick);
    // console.log(user_email);
    // console.log(my_email);
    return(
        <div id="wrap10">
            <SideMenuContainer/>
            <ContentContainer>
                <JoinChatRoomContainer
                    profile_pic={profile_pic}
                    user_id={user_id}
                    user_nick={user_nick}
                    user_email={user_email}
                    my_email={my_email}
                />
            </ContentContainer>
        </div>
    )
}

export default withRouter(ChatPage)