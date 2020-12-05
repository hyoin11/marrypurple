import React, { useEffect } from 'react';
import GramMain from '../../components/enter_gram/GramMain';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { gramListPosts } from '../../modules/listGram';

const GramMainContainer = ({ location }) => {
    const dispatch = useDispatch();
    const { listGram, error, loading } = useSelector(
        ({ listGram, loading }) => ({
            listGram: listGram.list,
            error: listGram.error,
            loading: loading['gram/GRAMLIST_POSTS']
        })
    );

    // console.log('인스타', listGram);

    useEffect(() => {
        const { InstaImage, content, comment } = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(gramListPosts({ InstaImage, content, comment }));
    }, [dispatch, location.search]);

    return (
        <GramMain loading={loading} error={error} listGram={listGram}/>
    )
}

export default withRouter(GramMainContainer);