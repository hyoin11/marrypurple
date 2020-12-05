import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Worldcup1 from '../../components/enter_worldcup/Worldcup1';
import { withRouter } from 'react-router-dom';
import { worldcupList } from '../../modules/worldcup';

const Worldcup1Container = ({ history }) => {
    const dispatch = useDispatch();

    const { list } = useSelector(({ worldcup }) => ({
        list: worldcup.list,
    }));
    
    useEffect(() => {
        dispatch(worldcupList());
    }, [])

    return (
        <Worldcup1 list={list} history={history}/>
    )
}

export default withRouter(Worldcup1Container);