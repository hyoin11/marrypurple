import React from 'react';
import FoundOne from '../../components/enter_find/FoundOne'

const FoundOneContainer = ({data}) => {
    let styles = ''
    if(data){
        styles = data
    }

    console.log(data);
    return(
        <>
        {data !== 'none' &&(
            <FoundOne who={styles}/>
        )}
        {data === 'none' &&(
            <div>하이</div>
        )}
        </>
    )
}

export default FoundOneContainer;