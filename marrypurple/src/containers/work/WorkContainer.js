import React from 'react';
import Work from '../../components/work/Work';
import { withRouter } from 'react-router-dom';

const WorkContainer = () => {
    return (
        <Work/>
    )
}

export default withRouter(WorkContainer);