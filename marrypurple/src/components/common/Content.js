import React from 'react';
// import styled from 'styled-components';
import '../../lib/styles/content.scss';
// import $ from 'jquery';
// import { Helmet } from 'react-helmet';

const Content = ({ children }) => {
    const script = () => {
        
    }

    script();

    return(
        <div id="content">
            <div id="contentBox">{children}</div>
        </div>
    )
};

export default Content;