import React from 'react';

const Haa = ({list}) => {
    console.log('asdfasdf', list)
    return<>
        <div>{list.nick}</div>
    </>
}

const Side = ({chat}) => {
    return (
        <>
        {chat && (
                <>
                    {chat.map(list => (
                        <Haa 
                        list={list} 
                        />
                    ))}
                </>
        )}
        </>
    );
    };

export default Side;