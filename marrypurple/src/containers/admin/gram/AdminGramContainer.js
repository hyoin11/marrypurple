import React, { useEffect } from 'react';
import AdminGram from '../../../components/admin/gram/AdminGram';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { gramListAllPosts } from '../../../modules/listGram';

const AdminGramContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { listAll, error, loading } = useSelector(
        ({ listGram, loading }) => ({
            listAll: listGram.listAll,
            error: listGram.error,
            loading: loading['gram/GRAMLISTALL_POSTS']
        })
    );
    
        console.log('listGram', listAll);

    useEffect(() => {
        dispatch(gramListAllPosts());
    }, [dispatch]);
    
    return (
        <AdminGram history={history} listAll={listAll}/>
    )
}

export default withRouter(AdminGramContainer);
