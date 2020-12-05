import React, { useEffect } from 'react';
import GramLikeMain from '../../components/enter_gram/GramLikeMain';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likeGramListPosts } from '../../modules/listLikeGram';

const GramLikeMainContainer = ({ location }) => {
    const dispatch = useDispatch();
    const { listLikeGram, error, loading } = useSelector(
        ({ listLikeGram, loading }) => ({
            listLikeGram: listLikeGram.listLikeGram,
            error: listLikeGram.error,
            loading: loading['gram/LIKEGRAMLIST_POSTS']
        })
    );
    // console.log('list',listLikeGram);

    useEffect(() => {
        const { InstaImage, content, comment, likeCount } = qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
        dispatch(likeGramListPosts({ InstaImage, content, comment, likeCount }));
    }, [dispatch, location.search]);

    return (
        <GramLikeMain loading={loading} error={error} listLikeGram={listLikeGram}/>
    )
}

export default withRouter(GramLikeMainContainer);