import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  changeField,initializeForm, login } from "../../modules/auth";
import MarryLogin from "../../components/auth/MarryLogin";
import { withRouter } from "react-router-dom";
import { check } from "../../modules/user";

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  // useSelector로 리덕스 스토어 state에 접근하는것.
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (event) => {
    const { value, name } = event.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      }),
    );
  };

  //  폼 등록 이벤트 핸들러
  const onSubmit = (event) => {
    console.log("로그인 시도");
    event.preventDefault();
    const { user_email, user_pw } = form;
    dispatch(login({ user_email, user_pw }));
  };

  // 컴포넌트가 처음 랜더링될 때 form을 초기화
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("Error!");
      console.log(authError);
      setError("로그인 실패 :(");
      return;
    }
    if (auth) {
      console.log("login success!");
      dispatch(check());
    }
  }, [authError, auth, dispatch]);
  useEffect(()=>{
    if(authError){
      if(authError.response.status===401){
        alert("아이디 또는 비밀번호가 일치하지 않습니다")
      }
    }
  }, [authError])
  useEffect(() => {
    if (user) {
      history.push("/match");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage error!");
      }
    }
  }, [user, history]);
  return (
    <MarryLogin
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
