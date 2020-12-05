import React, { useEffect } from 'react';

import ChangePw from '../../components/auth/changePw';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {changeField,readProfile,unloadProfile,changepw} from '../../modules/auth';
import { logout } from '../../modules/user';
const ChangePwForm = ({match,history})=>{
    // const {user_id} = match.params;
    const dispatch = useDispatch();

    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.changepw,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));
    const onChange = (event) => {
        const {  value,name } = event.target;
        dispatch(
        changeField({
            form: "changepw",
            key: name,
            value,
        }),
        );
    };
    const changepwSubmit = e => {
        let user_pw = e.target.user_pw.value;

        e.preventDefault();

        dispatch(changepw({
            user_pw:user_pw
        }));
    }
        useEffect(() => {
            return () => {
                dispatch(logout());
                history.push('/');
            }
        }, [dispatch]);
       
    return(
        <ChangePw type="changepw" user={user} form={form} onChange={onChange}
        changepwSubmit={changepwSubmit} error={authError}/>
        )
}
export default withRouter(ChangePwForm);