import React from 'react';
import { Route } from 'react-router-dom';
import GramMainPage from './pages/GramMainPage';
import GramWritePage from './pages/GramWritePage';
import GramReadPage from './pages/GramReadPage';
import BadBoardPage from './pages/BadBoardPage';
import FaqPage from './pages/FaqPage';
import Faq2Page from './pages/Faq2Page';
import Faq3Page from './pages/Faq3Page';
import WorkPage from './pages/WorkPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MarryLoginPage from './pages/MarryLoginPage';
import RegistPage from './pages/RegistPage';
import FindPwPage from './pages/FindPwPage';
import ChangePwPage from './pages/ChangePwPage';
import MatchingPage from './pages/MatchingPage'
import BackUserPage from './pages/BackUserPage';
import ChatPage from './pages/ChatPage';
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';
import EnterMainPage from './pages/EnterMainPage';
import Worldcup1Page from './pages/Worldcup1Page';
import Worldcup2Page from './pages/Worldcup2Page';
import Worldcup3Page from './pages/Worldcup3Page';
import FindOnePage from './pages/FindOnePage';
import FoundOnePage from './pages/FoundOnePage';
import FindOnePageMain from './pages/FindOnePageMain';
import TelepathyPage from './pages/TelepathyPage';
import TelepathyMakeQuizPage from './pages/TelepathyMakeQuizPage';
import TelepathyMakeQuizPage2 from './pages/TelepathyMakeQuizPage2';
import TelepathyMakeQuizPage3 from './pages/TelepathyMakeQuizPage3';
import TelepathyMakeQuizFin from './pages/TelepathyMakeQuizFin';
import TelepathyGetQuizPage from './pages/TelepathyGetQuizPage';
import TelepathyGetQuizPage2 from './pages/TelepathyGetQuizPage2';
import TelepathyGetQuizPage3 from './pages/TelepathyGetQuizPage3';
import YoureMatched from './pages/YoureMatched';
import TeleMunWait from './pages/TeleMunWait';
import ProfileMainPage from './pages/ProfileMainPage';
import MatchListPage from './pages/MatchListPage';
import ShowProfilePage from './pages/ShowProfilePage'
import UserNotFoundPage from './pages/UserNotFoundPage'
import WhoLikesMePage from './pages/WhoLikesMePage';
import AdminUserPage from './pages/admin/AdminUserPage';

import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminRegistPage from './pages/admin/AdminRegistPage';
import AdminMainPage from './pages/admin/AdminMainPage';
import AdminGramPage from './pages/admin/AdminGramPage';
import AdminGramReadPage from './pages/admin/AdminGramReadPage';
import AdminBadListPage from './pages/admin/AdminBadListPage';
import AdminBadWritePage from './pages/admin/AdminBadWritePage';
import AdminBadReadPage from './pages/admin/AdminBadReadPage';

const App = () => {
  return (
    <>
      <Route component={MainPage} path="/" exact/>
      <Route component={LoginPage} path="/login"/>
      <Route component={MarryLoginPage} path="/marrylogin"/>
      <Route component={RegistPage} path="/regist"/>
      <Route component={FindPwPage} path="/findPw"/>
      <Route component={ChangePwPage} path="/changePw"/>
      <Route component={GramMainPage} path="/gram_main"/>
      <Route component={GramWritePage} path="/gram_write"/>
      <Route component={GramReadPage} path="/gram_post/:gram_id"/>
      <Route component={BadBoardPage} path="/board_bad"/>
      <Route component={FaqPage} path="/FAQ"/>
      <Route component={Faq2Page} path="/FAQ2"/>
      <Route component={Faq3Page} path="/FAQ3"/>
      <Route component={WorkPage} path="/work"/>
      <Route component={MatchingPage} path="/match"/>
      <Route component={WhoLikesMePage} path="/match_like"/>
      <Route component={ShowProfilePage} path="/match_profile"/>
      <Route component={BackUserPage} path="/back"/>
      <Route component={ChatPage} path="/chat"/>
      <Route component={PaymentPage} path="/Payment"/>
      <Route component={ProfilePage} exact path="/profile"/>
      <Route component={EnterMainPage} path="/enter_main"/>
      <Route component={Worldcup1Page} path="/worldcup1"/>
      <Route component={Worldcup2Page} path="/worldcup2"/>
      <Route component={Worldcup3Page} path="/worldcup3/:user_id"/>
      <Route component={FindOnePageMain} path="/find_main"/>
      <Route component={FindOnePage} path="/find_select"/>
      <Route component={FoundOnePage} path="/find_match"/>
      <Route component={TelepathyPage} path="/Telepathy"/>
      <Route component={TelepathyMakeQuizPage} path="/Telepathy_make_quiz"/>
      <Route component={TelepathyMakeQuizPage2} path="/Telepathy_make_quiz2"/>
      <Route component={TelepathyMakeQuizPage3} path="/Telepathy_make_quiz3"/>
      <Route component={TelepathyMakeQuizFin} path="/Telepathy_make_quiz_fin"/>
      <Route component={TelepathyGetQuizPage} path="/Telepathy_get_quiz"/>
      <Route component={TelepathyGetQuizPage2} path="/Telepathy_get_quiz2"/>
      <Route component={TelepathyGetQuizPage3} path="/Telepathy_get_quiz3"/>
      <Route component={YoureMatched} path="/talktothem"/>
      <Route component={TeleMunWait} path="/tele_mun_done"/>
      <Route component={ProfileMainPage} path="/profile_main"/>
      <Route component={MatchListPage} path="/match_list"/>
      <Route component={UserNotFoundPage} path="/user_not_found"/>

      <Route component={AdminLoginPage} path="/Admin"/>
      <Route component={AdminRegistPage} path="/Admin_regist"/>
      <Route component={AdminMainPage} path="/Admin_main"/>
      <Route component={AdminGramPage} path="/Admin_gram"/>
      <Route component={AdminGramReadPage} path="/Admin_gram_read/:_id"/>
      <Route component={AdminUserPage} path="/admin_users"/>
      <Route component={AdminBadListPage} path="/Admin_badList"/>
      <Route component={AdminBadWritePage} path="/Admin_bad_write"/>
      <Route component={AdminBadReadPage} path="/Admin_bad_read/:_id"/>

    </>
  )
}

export default App;
