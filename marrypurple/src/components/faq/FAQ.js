import React from 'react';
import '../../lib/styles/FAQ.scss';
import { Link } from 'react-router-dom';
import logo from '../../lib/images/images/MarryPurpleimg.png'
import { Helmet } from 'react-helmet';

const FAQ = () => {
    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
            </Helmet>
            <div className="faqwrap">
                <header>
                    <div className="logo">
                        <Link to="/Profile"><img src={logo} alt="메리퍼플로고"/></Link>
                    </div>
                    <div className="back_to_main"><Link to="/Profile">back to main</Link></div>
                </header>
                <div className="search">
                    <p>무엇을 도와드릴까요?</p>
                    <div className="searchBox">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="검색"/>
                    </div>
                </div>
                <div className="menu_section">
                    <div className="guide">
                        <p><Link to="/FAQ2">Marry Purple 이용자 가이드</Link></p>
                    </div>
                    <div className="solve">
                        <p><Link to="/FAQ2">문제 해결</Link></p>
                    </div>
                    <div className="secure">
                        <p><Link to="/FAQ2">안전, 보안, 개인정보</Link></p>
                    </div>
                </div>
                <footer>
                    <span>privacy</span>
                    <span> | </span>
                    <span>한국어</span>
                </footer>
                <Link className="Toggle_btn" to="/Profile_main"><i className="fas fa-bars"></i></Link>
            </div>
        </>
    )
}

export default FAQ;



















