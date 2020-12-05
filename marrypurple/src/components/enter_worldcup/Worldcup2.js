import React, { useState, useEffect } from 'react';
import '../../lib/styles/worldcup2.scss';
import Error from '../common/Error';

const Worldcup2 = ({ history, error, loading, list, usersList }) => {
    let item = new Array();
    if(list){
        item = list;
    }

    let userList = new Array();
    if(usersList){
        userList = usersList;
    }

    const [users, setUsers] = useState(item);
    const [display, setDisplay] = useState(userList);
    const [winner, setWinner] = useState([]);

    const clickHandler = user => () => {
        if(users.length <= 2){
            if(winner.length === 0){
                setDisplay([user]);
                history.push(`/worldcup3/${user._id}`);
            }else{
                let updateUser = [...winner, user];
                setUsers(updateUser);
                setDisplay([updateUser[0], updateUser[1]]);
                setWinner([]);
            }
        }else if(users.length > 2){
            setWinner([...winner, user]);
            setDisplay([users[2], users[3]]);
            setUsers(users.slice(2));
        }
    }

    if(error){
        return (
            <Error/>
        )
    }
    
    return(
        <>  
            {!list || !usersList && (
                <>
                    <div>로딩중</div>
                </>
            )}
            {!loading && (
                <>
                    <div className="world2_1">
                        <div className="world2_1_header"><div className="Wcup"><div></div></div><span>메리퍼플배 이상형 월드컵</span><div className="Wcup"><div></div></div></div>
                    </div>
                    <div className="world2_2">
                        {display.map((user, index) => {
                            return (
                                <div key={index} onClick={clickHandler(user)} className="world2_2_picture">
                                    <img src={user.profile_pic[0]} alt="회원 프로필사진"/>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}

export default Worldcup2;