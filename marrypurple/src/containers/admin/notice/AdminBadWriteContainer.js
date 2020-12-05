import React, { useEffect } from 'react';
import AdminBadWrite from '../../../components/admin/notice/AdminBadWrite';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { writeBad } from '../../../modules/badList';
import qs from 'qs';

const AdminBadWriteContainer = ({ history }) => {
    const dispatch = useDispatch();

    const onSubmit = e => {
        console.log('onSubmit');
        console.log(e.target.user_id.value);
        console.log(e.target.reason.value);
        let _id = e.target.user_id.value;
        let reason = e.target.reason.value;

        e.preventDefault();

        dispatch(writeBad({
            _id,
            reason
        }));

        history.push('/Admin_badList');
    }

    const onClick = () => {
        window.history.back();
    }

    return (
        <AdminBadWrite onSubmit={onSubmit} onClick={onClick}/>
    )
}

export default withRouter(AdminBadWriteContainer);