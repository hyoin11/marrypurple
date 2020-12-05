

let facebook = require('./passport/facebook');
let kakao = require('./passport/kakao');
let google = require('./passport/google');

module.exports = function (app, passport){
    console.log('config/passport 호출');

    // 사용자 인증 성공시 호출
    // 사용자 정보를 이용하여 세션을 만듭니다.
    passport.serializeUser( (user, done) => {
        console.log('serializeUser() 호출', user);
        done(null, user);   // 콜백에서 넘겨주는 user 객체의 정보를 이용하여 세션을 생성합니다.
    });

    passport.deserializeUser((user, done) => {
        console.log('deserializeUser() 호출', user);
        done(null, user);
    });


    passport.use('facebook',facebook(app,passport));
    passport.use('kakao',kakao(app,passport));
    passport.use('google',google(app,passport));
};