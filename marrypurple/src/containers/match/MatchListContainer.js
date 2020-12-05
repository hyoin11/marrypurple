import React,{useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MatchList from '../../components/match/MatchList';
import { withRouter } from 'react-router-dom';
import { chatUser, unloadChatUser } from '../../modules/chat'

const MatchListContainer = () => {
    const dispatch = useDispatch();
    const { chat, error, loading, user } = useSelector(({ chat, loading, user }) => ({
        chat: chat.chat,
        user: user.user,
        error: chat.error,
        loading: loading['chat/CHAT_LIST']
    }));

    useEffect(() => {
        dispatch(chatUser());
        return () => {
            dispatch(unloadChatUser());
        };
    }, [dispatch]);
    // console.log('매칭된 chatUser 불러오는 중.... ', chat)
    
    return (
        <MatchList chat={chat} user={user.user_email} />
    )
}

export default withRouter(MatchListContainer);