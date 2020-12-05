import React, { useEffect, useState } from 'react';
import GramWrite from '../../components/enter_gram/GramWrite';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, writeGram } from '../../modules/gramWrite';

const GramWriteContainer = ({ history }) => {
    const [error, serError] = useState(null);
    const dispatch = useDispatch();
    // const { gram, gramError } = useSelector(({ gramWrite }) => ({
    //     gram: gramWrite.gram,
    //     gramError: gramWrite.gramError
    // }));
    
    const onSubmit = e => {
        console.log('onSubmit');
        console.log(e.target.content.value);
        console.log(e.target.file.className);
        let InstaImage = e.target.file.className;
        let content = e.target.content.value;

        e.preventDefault();

        dispatch(writeGram({
            InstaImage,
            content
        }));

        history.push('/gram_main');
    }

    const backClick = () => {
        history.goBack();
    }

    return (
        <GramWrite onSubmit={onSubmit} backClick={backClick}/>
    )
}

export default withRouter(GramWriteContainer);