import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../lib/images/images/500.png'

const Error = () => {
    return (
        <>
            <div class="col-lg-6 col-lg-offset-3 p404 centered">
                <img src={errorImg} alt=""/>
                <h1>ERROR 500</h1>
                <h3>Ouch!! Something Went Wrong!</h3>
                <h5 class="mt">Hey, maybe you will be interested in these pages:</h5>
                <p><Link to="/match">Match</Link> | <Link to="/FAQ2">FAQ</Link></p>
            </div>
        </>
    )
}

export default Error;