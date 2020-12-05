import React from 'react';
import '../../../lib/styles/admin/adminLogin.scss';
import { Link } from 'react-router-dom';

const AdminRegist = () => {
    return (
        <>
            <div className="authBody">
                <div id="login-page">
                    <div className="container">
                        <form className="form-login" action="/Admin">
                            <h2 className="form-login-heading">regist in now</h2>
                            <div className="login-wrap">
                                <input type="text" className="form-control" placeholder="User ID" autofocus/>
                                <br/>
                                <input type="password" class="form-control" placeholder="Password"/>
                                <br/>
                                <button className="btn btn-theme btn-block" href="login.html" type="submit"><i className="fa fa-lock"></i> REGIST IN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminRegist;