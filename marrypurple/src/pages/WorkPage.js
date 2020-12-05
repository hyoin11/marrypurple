import React from 'react';
import WorkContainer from '../containers/work/WorkContainer';

const WorkPage = () => {
    const onClick = () => {
        window.history.back();
    }

    return (
        <>
            <div id="wrap11" onClick={onClick}>
                <WorkContainer/>
            </div>
        </>
    )
}

export default WorkPage;