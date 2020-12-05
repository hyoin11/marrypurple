import React from 'react';
import '../../lib/styles/FAQ3.scss';
import { Link } from 'react-router-dom';
import logo from '../../lib/images/images/MarryPurpleimg.png'
import { Helmet } from 'react-helmet';

const FAQ3 = () => {
    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
            </Helmet>
            <header>
                <div className="logo">
                    <Link to="/Profile"><img src={logo} alt="메리퍼플로고"/></Link>
                </div>
                <div className="back_to_main"><a to="/Profile.html">back to main</a></div>
            </header>
            <div className="underline"></div>
            <div className="menu_trace">
                <p className="menu_trace_leftside">
                    <Link to="/FAQ">Marry Purple</Link>
                    <i className="fas fa-chevron-right"/>
                    <Link to="/FAQ2">Marry Purple 이용자 가이드</Link>
                </p>
                <p className="menu_trace_leftside_m">
                    <Link to="/FAQ">Marry Purple</Link>
                    <i className="fas fa-chevron-right"/>
                    <br/>
                    <Link to="/FAQ2">Marry Purple 이용자 가이드</Link>
                </p>
                <div className="menu_tract_search">
                    <i className="fas fa-search"/>
                    <input type="text" placeholder="검색"/>
                </div>
            </div>
            <div className="menu_trace">
                <div className="content-next3">
                    <h1>Tinder 소개</h1>
                    <br/>
                    <p>지금까지 200억 건의 매치를 탄생시킨 Tinder 는 전 세계에서 가장 인기 있는 소셜디스커버리앱입니다. 언제 어디에 계시든 틴더만 있다면 새로운 친구를 발견할 수 있습니다. 서울이나 부산, 제주, 전국 어디든 방문하거나 여행하실 때, 현지에서 새 친구를 사귀고 싶다면 Tinder를 열어주세요. 동네친구가 필요할 때도, 나와 취향이 같은 사람과 이야기하고 싶을 때도 틴더가 든든한 친구가 되어 드릴겁니다. 매일 2,600만건, 지금까지 200억건의 친구가 매치되는 이런 소셜앱을 보신 적 있나요? 이런 데이트 앱을 보신 적이 있나요?

                    스와이프. 매치. 채팅. 쉽고 재미있게 이용 — 맘에 들면 오른쪽으로, 맘에 안 들면 왼쪽으로 스와이프하세요. 동시에 서로를 찜하면 매칭입니다! 두 사람이 동시에 관심을 보일 때만 매칭되는 시스템입니다. 서로를 알아갈 수 있도록 지금 바로 틴더에서 이야기를 나눠보세요. 지금 스와이프를 시작하세요! 누군가를 알아간다는 건 언제나 놀라운 발견이니까요.
                    
                    전 세계에서 가장 쿨한 사람들이 가득한 곳, Tinder가 여러분을 환영합니다. 망설이지 마시고 지금 스와이프하세요.
                    
                    iOS 및 Android용 Tinder 앱을 다운로드 받거나, Tinder.com 홈페이지에서 Tinder 웹을 이용하시면 됩니다.</p>
                </div>
            </div>
            <div id="back_btn"><Link to="/FAQ2">뒤로가기</Link></div>
            <Link className="Toggle_btn" to="/Profile_main"><i className="fas fa-bars"/></Link>
        </>
    )
}

export default FAQ3;
