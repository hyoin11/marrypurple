import React,{useState} from 'react';
import { withRouter } from "react-router-dom";
import '../../../lib/styles/admin/adminUser.scss';

const UserRow = ({user}) => {
    return(
        <tr>
            <td>{user.user_nick}</td>
            <td><img src={user.profile_pic[0]} width={"80"} height={"80"}/></td>
            <td>{user.user_email}</td>
            <td>
                {user.user_gender === 'male' &&('남자')}
                {user.user_gender === 'female' &&('여자')}
            </td>
        </tr>
    )
}

const UserTable = ({list,input}) => {
    let row = []
    let gen = ''

    list.forEach(user => {
        if(user.user_email.indexOf(input) === -1 && user.user_nick.indexOf(input) === -1){
            return
        }
        row.push(<UserRow user={user}/>)
    });
    // console.log(row)
    return(
        <table id="admin_user_table">
            <thead>
                <tr>
                    <th>닉네임</th>
                    <th>프로필 사진</th>
                    <th>이메일</th>
                    <th>성별</th>
                </tr>
                {row}
            </thead>
        </table>
    )
}

const SearchBar = ({input, handleUserInput}) => {
    return(
        <table className={"table"}>
            <tr>
                <td>
                    <input type={"text"} size={"25"} className={"input-sm"} placeholder={"Search"} value={input} onChange={(e)=>handleUserInput(e.target.value)}/>
                </td>
            </tr>
        </table>
    )
}

const AdminUser = ({ userList, input, handleUserInput }) => {

    return(
        <>
            <SearchBar input={input} handleUserInput={handleUserInput}  />
            <UserTable list={userList} input={input} handleUserInput={handleUserInput} />
        </>
    )
}

export default withRouter(AdminUser);