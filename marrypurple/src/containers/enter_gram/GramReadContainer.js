import React, { useEffect } from 'react';
import GramRead from '../../components/enter_gram/GramRead';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readGram, unloadGram } from '../../modules/gramPost';
import { deleteGram, updateCommentGram, updateLikeGram } from '../../modules/gramPost';
import $ from 'jquery';

const GramReadContainer = ({ match, history }) => {
    const { gram_id } = match.params;
    const dispatch = useDispatch();
    const { gram, error, loading, user, listLikeGram } = useSelector(
        ({ gramPost, loading, user, listLikeGram }) => ({
            listLikeGram: listLikeGram.listLikeGram,
            user: user.user,
            gram: gramPost.gram,
            error: gramPost.error,
            loading: loading['gram/READ_GRAM']
        })
    );
    // console.log('유저어어',user);
    // console.log('리스트',listLikeGram);
    // console.log('gram', gram);

    const deleteClick = () => {
        let result = window.confirm('삭제하시겠습니까?');
        
        if(result){
            dispatch(deleteGram(gram_id));
            history.push('/gram_main');
        }
    }

    const heartClick = e => {
        $(e.target).toggleClass('on');
        e.preventDefault();
        if($(e.target).hasClass('on')){
            let heart = 'plus';
            dispatch(updateLikeGram({
                gram_id,
                heart
            }));
            dispatch(readGram(gram_id));
            return () => {
                dispatch(unloadGram());
            }
        }else{
            let heart = 'minus';
            dispatch(updateLikeGram({
                gram_id,
                heart
            }));
            dispatch(readGram(gram_id));
            return () => {
                dispatch(unloadGram());
            }
        }
    }

    const commentSubmit = e => {
        let nickName = e.target.nickName.value;
        let text = e.target.comment.value;

        e.preventDefault();

        dispatch(updateCommentGram({
            _id: gram_id,
            nickName,
            text
        }));
        dispatch(readGram(gram_id));
        return () => {
            dispatch(unloadGram());
        }
    }

    useEffect(() => {
        dispatch(readGram(gram_id));
        return () => {
            dispatch(unloadGram());
        }
    }, [dispatch, gram_id]);

    return (
        <GramRead listLikeGram={listLikeGram} user={user} gram={gram} commentSubmit={commentSubmit} deleteClick={deleteClick} heartClick={heartClick} error={error} loading={loading}/>
    )
}

export default withRouter(GramReadContainer);