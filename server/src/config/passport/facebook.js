const passport = require('../passport');
//npm install passport-facebook
let FacebookStrategy = require('passport-facebook').Strategy;
let config = require('../config');

module.exports =function(app,passport){
    return new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL : config.facebook.callbackURL,
        profileFields: ['id','emails','displayName']
    },(accessToken, refreshToken,profile,done)=>{
        console.log('passport의 facebook 호출');
        console.dir(profile);

        let options ={
            criteria : {'userid':profile.id}
        };

        let database = app.get('database');
        database.UserModel.findOne({user_email:profile.id},(err, user)=>{
            if(err) return done(err);
            if(!user){
                let user = new database.UserModel({
                    name: profile.displayName,
                    user_email: profile.id,
                    provider: 'facebook',
                    authToken: accessToken,
                    facebook:profile._json
                });
                user.save((err)=>{
                    if(err){throw err;}
                    return done(null,user);
                })
            }else{
                return done(null,user);
            }
            return done(null,user);
        });

    });
}