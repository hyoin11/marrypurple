import React from 'react';
import '../../../lib/styles/admin/adminstyle.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export function script() {
    let media = window.matchMedia('( max-width: 768px )');
    if(media.matches == true) {
        // 모바일
        
        if ($('#sidebar > ul').is(":visible") === true) {
            $('#sidebar > ul').hide();
        } else {
            $('#sidebar > ul').show();
        }
    }else{
        // 웹

        if ($('#sidebar > ul').is(":visible") === true) {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                'margin-left': '-210px'
            });
            $('#sidebar > ul').hide();
        } else {
            $('#main-content').css({
                'margin-left': '210px'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left': '0'
            });
        }
    }
}

const AdminAside = () => {

    return (
        <>
            <adminaside>
                <div id="sidebar" className="nav-collapse ">
                    <ul className="sidebar-menu" id="nav-accordion">
                        <h5 className="centered">admin</h5>
                        <li className="mt">
                            <Link /*className="active"*/ to="/Admin_main">
                            <i class="fas fa-home"></i>
                            <span>main</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/Admin_users">
                            <i class="fas fa-users"></i>
                            <span>회원</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/Admin_gram">
                            <i class="fab fa-instagram"></i>
                            <span>메리퍼플그램</span>
                            </Link>
                        </li>
                        <li className="sub-menu">
                            <Link to="/Admin_badList">
                            <i class="fas fa-user-alt-slash"></i>
                            <span>불량회원</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </adminaside>
        </>
    )
}

export default AdminAside;