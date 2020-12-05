import React from 'react';
import '../../../lib/styles/admin/adminstyle.scss';
import { Helmet } from 'react-helmet';

const AdminContent = ({ children }) => {
    return (
        <>
            <section id="main-content">
                <section className="wrapper">
                    {children}
                </section>
            </section>
        </>
    )
}

export default AdminContent;