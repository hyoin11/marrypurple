import Router from "koa-router";
import * as authCtrl from "./auth.ctrl";
import nodemailer from 'nodemailer'

let passport = require('passport');



const auth = new Router();

auth.post("/register",authCtrl.register);
auth.post("/login", authCtrl.login);
auth.post("/findpw", authCtrl.findpw);
auth.patch("/changePw", authCtrl.changePw);
auth.patch("/profile", authCtrl.profileUpdate );
auth.get("/profile", authCtrl.read);
auth.get("/check", authCtrl.check);
auth.post("/logout", authCtrl.logout);
auth.patch("/snsRegister/:id",authCtrl.snsRegister);
auth.patch("/profile/:id", authCtrl.addPic );



//sns
module.exports = function(router, passport){
auth.route('/facebook').get(passport.authenticate('facebook',{
    scope: 'email'
}));

auth.route('/facebook/callback').get(passport.authenticate('facebook',{
    successRedirect: '/profile', //성공시 프로필로
    failureRedirect: '/' //실패시 메인으로
}));

auth.route('/kakao').get(passport.authenticate('kakao',{
    account_email: 'account_email'
}));

auth.route('/kakao/callback').get(passport.authenticate('kakao',{
    successRedirect: '/profile', //성공시 프로필로
    failureRedirect: '/' //실패시 메인으로
}));
auth.route('/google').get(passport.authenticate('google',{
    scope: ['profile','email']
    
}));

auth.route('/google/callback').get(passport.authenticate('google',{
    successRedirect: '/profile', //성공시 프로필로
    failureRedirect: '/' //실패시 메인으로
}));
}

export default auth;
