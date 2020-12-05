import React, { useEffect } from 'react';
import AdminBadRead from '../../../components/admin/notice/AdminBadRead';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readBad, deleteBad, updateBad } from '../../../modules/badList';
import qs from 'qs';

const AdminBadReadContainer = ({ match, location, history }) => {
    const { _id } = match.params;
    const bad_id = _id;

    const dispatch = useDispatch();
    const { badPost, error, loading } = useSelector(
        ({ badList, loading }) => ({
            badPost: badList.badPost,
            error: badList.error,
            loading: loading['badBoard/READ_BAD']
        })
    );

    useEffect(() => {
        dispatch(readBad(bad_id));
    }, [dispatch]);
    
    const onSubmit = e => {
        alert('1234');

        console.log('onSubmit');
        console.log(e.target.reason.value);
        let reason = e.target.reason.value;

        e.preventDefault();

        dispatch(updateBad({
            bad_id,
            reason
        }));

        window.setTimeout(function(){
            dispatch(readBad(bad_id));
        }, 500);
        
        
    }

    const onClickDel = () => {
        const result = window.confirm('지우시겠습니까?');
        if(result){
            dispatch(deleteBad(bad_id));

            history.push('/Admin_badList');
        }
    }

    const onClick = () => {
        // history.goBack();
        window.history.back();
    }

    return (
            <AdminBadRead badPost={badPost} loading={loading} onSubmit={onSubmit} onClickDel={onClickDel} onClick={onClick}/>
    )
}

export default withRouter(AdminBadReadContainer);