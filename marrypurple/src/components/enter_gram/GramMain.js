import React from 'react';
// import styled from 'styled-components';
import '../../lib/styles/gram.scss';
import $ from 'jquery';
// import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const GramMain = ({ listGram }) => {
    // console.log(listGram);
    const script = () => {

    }

    script();

    return(
        <>
            {listGram && (
                <div className="gram_3">
                    <p>최신 스토리</p>
                    {listGram.map((gram, index) => (
                        <Link to={`/gram_post/${gram._id}`}>
                            <div className="gram_3_photo" key={index} /*style={{ background: `url(${gram.InstaImage})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}*/><img src={gram.InstaImage}/></div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default GramMain;