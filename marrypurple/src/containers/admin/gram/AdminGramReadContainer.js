import React, { useEffect } from 'react';
import AdminGramRead from '../../../components/admin/gram/AdminGramRead';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readGram, unloadGram, updateHideGram, updateShowGram } from '../../../modules/gramPost';

const AdminGramContainer = ({ match }) => {
    const { _id } = match.params;
    const gram_id = _id

    const dispatch = useDispatch();
    const { gram, error, loading } = useSelector(
        ({ gramPost, loading }) => ({
            gram: gramPost.gram,
            error: gramPost.error,
            loading: loading['gram/READ_GRAM']
        })
    );

    console.log(gram);

    useEffect(() => {
        dispatch(readGram(gram_id));
        return () => {
            dispatch(unloadGram());
        }
    }, [dispatch, gram_id]);

    const onClickHide = () => {
        let result = window.confirm('게시물을 안보이게 하시겠습니까?');
        if(result){
            alert('게시물을 안보이게 하였습니다.');
            dispatch(updateHideGram(gram_id));
            dispatch(readGram(gram_id));
            return () => {
                dispatch(unloadGram());
            }
        }
    }
    const onClickShow = () => {
        let result = window.confirm('게시물을 보이게 하시겠습니까?');
        if(result){
            alert('게시물을 보이게 하였습니다.')
            dispatch(updateShowGram(gram_id));
            dispatch(readGram(gram_id));
            return () => {
                dispatch(unloadGram());
            }
        }
    }

    const clickBack = () => {
        window.history.back();
    }

    return (
        <AdminGramRead gram={gram} onClickHide={onClickHide} onClickShow={onClickShow} clickBack={clickBack}/>
    )
}

export default withRouter(AdminGramContainer);
