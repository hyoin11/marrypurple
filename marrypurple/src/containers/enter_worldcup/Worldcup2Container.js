import React, { useState, useEffect } from 'react';
import Worldcup2 from '../../components/enter_worldcup/Worldcup2';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { worldcupList, unloadWorldcup } from '../../modules/worldcup';

const Worldcup2Container = ({ history, location, match }) => {
    const dispatch = useDispatch();
    const { list, error, loading } = useSelector(({ worldcup, loading }) => ({
        list: worldcup.list,
        error: worldcup.error,
        loading: loading['worldcup/WORLDCUP_LIST']
    }))

    let usersList = new Array();
    if(list){
        usersList = history.location.data;
        usersList = usersList.slice(0,2);
    }
    
    return (
        <Worldcup2 history={history} error={error} loading={loading} list={list} usersList={usersList}/>
    )
}

export default withRouter(Worldcup2Container);