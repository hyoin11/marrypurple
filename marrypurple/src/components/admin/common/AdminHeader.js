import React from 'react';
import '../../../lib/styles/admin/adminstyle.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import aside, { script } from './AdminAside';

const AdminHeader = () => {
    const onClick = () => {
        aside.call(script());
    }

    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
            </Helmet>
            <adminheader className="header black-bg">
                <div className="sidebar-toggle-box">
                    <i className="fas fa-bars" onClick={onClick}></i>
                </div>
                <Link to="/Admin_main" className="logo"><b>MARRY<span>PRUPLE</span></b></Link>
                <div className="top-menu">
                    <ul className="nav pull-right top-menu">
                    <li><Link className="logout" to="/Admin">Logout</Link></li>
                    </ul>
                </div>
            </adminheader>
        </>
    )
}

export default AdminHeader;
