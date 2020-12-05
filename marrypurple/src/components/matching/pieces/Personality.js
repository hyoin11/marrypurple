import React from 'react';
import '../../../lib/styles/matching.scss'

const Personality = ({personality}) => {
    return(
        <div>
            {personality.map(item => (
                <div className="hobby" key={item}>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Personality
