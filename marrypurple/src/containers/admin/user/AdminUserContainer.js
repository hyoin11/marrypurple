import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminUserList, adminUserUnloadList } from '../../../modules/admin'
import AdminUser from '../../../components/admin/user/AdminUser'

const AdminUserContainer = () => {
    const dispatch = useDispatch();
    const { user, error, loading } = useSelector(({ admin, loading }) => ({
        user: admin.user,
        error: admin.error,
        loading: loading['admin/USER_LIST']
    }));
    useEffect(() => {
        dispatch(adminUserList());
        return () => {
            dispatch(adminUserUnloadList());
        };
    }, [dispatch]);
    // console.log(user)
    let userList = []
    if(user){
        userList = user
    }
    // console.log('nick은 무엇', nick)


    const [input, setInput] = useState('')
    const handleUserInput = (input) => {
        setInput(input)
        // console.log(input)
    }

    return(
        <AdminUser 
            userList={userList} 
            input={input}
            handleUserInput={handleUserInput}
        />
    )
}

export default AdminUserContainer;