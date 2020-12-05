import React, { useState } from 'react';
import '../../../lib/styles/admin/adminLogin.scss';
import $ from 'jquery';

const AdminLogin = ({ history }) => {

    const loginClick = () => {
        const id = $('form input[name=id]').val();
        const password = $('form input[name=password]').val();

        if(id === 'admin' && password === '1111'){
            alert('관리자님 환영합니다.');
            history.push('/admin_main');
        }else{
            alert('아이디 또는 비밀번호가 틀립니다.');
            history.push('/admin');
        }
    }

    return (
        <>
            <div className="authBody">
                <div id="login-page">
                    <div className="container">
                        <form className="form-login">
                            <h2 className="form-login-heading">sign in now</h2>
                            <div className="login-wrap">
                                <input type="text" className="form-control" placeholder="User ID" autofocus name="id"/>
                                <br/>
                                <input type="password" className="form-control" placeholder="Password" name="password"/>
                                <br/>
                                <button className="btn btn-theme btn-block" type="submit" onClick={loginClick}><i class="fa fa-lock"></i> SIGN IN</button>
                                {/* <hr/>
                                <div className="registration">
                                    Don't have an account yet?<br/>
                                    <Link className="" to="/Admin_regist">Create an account</Link>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;