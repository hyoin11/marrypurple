import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import FindOne from '../../components/enter_find/FindOne'
import { withRouter } from "react-router-dom";

const FindOneContainer = ({history}) => {
    // useSelector로 리덕스 스토어 state에 접근하는것.
    const { findOne } = useSelector(({ findOne }) => ({
        findOne: findOne.one,
    }));

    useEffect(() => {
        if (findOne) {
            history.push({
                pathname: '/find_match',
                data: findOne
            });
        }
    }, [findOne, history]);
    return(
        <>
            <FindOne/>
        </>
    )
}

export default withRouter(FindOneContainer);