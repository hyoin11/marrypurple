import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import Register from "../../components/auth/regist";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import nodemailer from 'nodemailer';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const [profile_pic, setProfile_pic] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const fileSelectHandler = (event) =>{
    imgbbUploader(event.target.files[0]).then(resp => {
      
      console.log(resp.data.data.url);
      setProfile_pic(resp.data.data.url);
      const { value, name } = event.target;
      dispatch(
        changeField({
          url: resp.data.data.url,
          form: "register",
          key: name,
          value,
          
        }),
      );
        
    })
  }


const imgbbUploader = ( img ) => {
    let body = new FormData()
    body.set('key', 'a88534ba3406503cc7c607af2810b2d9')
    body.append('image', img)

    return axios({
        url: 'https://api.imgbb.com/1/upload',
        method: 'post',
        timeout: 0,
        processData: false,
        mimeType: "multipart/form-data",
        contentType: false,
        data: body
    })
}

console.log('profile_pic',profile_pic);

  const onChange = (event) => {
    const { value,name } = event.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      }),
    );
  };

  //회원가입 등록 이벤트 핸들러
  const onSubmit = async (event) => {
    console.log("회원가입시도")
    event.preventDefault();

  

    
    
    const { user_email, user_pw, user_gender,user_age,user_nick} = form;
    if ([user_email, user_pw, user_gender,user_age,user_nick].includes("")) {
      setError("빈 칸을 모두 입력하세요");
      return;
    }
    // if 이메일인증 여기다가 넣기!

    dispatch(register({ user_email, user_pw, user_gender,user_age,user_nick,profile_pic}));
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        alert("이미 존재하는 회원입니다")
        return;
      }
      console.log(`error!`);
      console.log(authError);
      setError("회원가입 실패");
      return;
    }
  }, [ authError, dispatch, error]);
  useEffect(()=>{
    if (auth) {
      console.log("성공");
      console.log(auth);
      dispatch(check());
      return;
    }
  }, [auth,dispatch])
  useEffect(() => {
    if (user) {
      console.log(`check API success`);
      console.log(user);
      history.push("/marrylogin");
      try {
        localStorage.getItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage error");
      }
    }
  }, [user, history]);
  return (
    <Register
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      fileSelectHandler={fileSelectHandler}
      error={error}
    />
  );
};



export default withRouter(RegisterForm);
