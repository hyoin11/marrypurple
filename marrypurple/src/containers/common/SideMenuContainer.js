import React,{useEffect} from 'react';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../../components/common/SideMenu';
import { chatUser, unloadChatUser } from '../../modules/chat'
import { logout} from '../../modules/user'
import { updateGender } from '../../modules/side'

const SideMenuContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { chat, error, loading, currentPage, user } = useSelector(({ chat, loading, user }) => ({
        chat: chat.chat,
        currentPage: match.path,
        user: user.user,
        error: chat.error,
        loading: loading['chat/CHAT_LIST']
    }));

    console.log('user', user);

    if(!user){
        history.push('/');
    }

    let userPic = []
    if(user){
        userPic = user.profile_pic;
    }
    // const userPic = user.profile_pic;
    console.log('userPic', userPic);

    useEffect(() => {
        dispatch(chatUser());
    }, [dispatch]);

    const onLogout = () => {
        dispatch(logout());
        history.push('/')
    };
    
    const boyClick = () => {
        dispatch(updateGender({
            match_gender: 'male'
        }))
    }
    const allClick = () => {
        dispatch(updateGender({
            match_gender: 'both'
        }))
    }
    const girlClick = () => {
        dispatch(updateGender({
            match_gender: 'female'
        }))
    }
    
    return <SideMenu currentPage={currentPage} chat={chat} loading={loading} user={user} userPic={userPic} boyClick={boyClick} allClick={allClick} girlClick={girlClick} onLogout={onLogout}/>;
}

export default withRouter(SideMenuContainer);