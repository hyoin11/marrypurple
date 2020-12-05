module.exports = {
    server_port: 4000,
    db_url: 'mongodb://localhost:27017/marry',
    db_schemas: [{file:'../models/user.js', collection:'users', schemaName:'UserSchema', modelName:'UserModel'}],
    route_info: [

    ],
    facebook: {
        clientID:'2718746858339968',
        clientSecret:'73e89062e4381959fe004d4e397d4b06',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    kakao: {
        clientID :'d1edf6c40f5a019d6cc6f174065086f6',
        callbackURL: 'http://localhost:3000/auth/kakao/callback'
    },
    google:{
        clientID: '184711586203-5i7lhn5uht1mpg8f8f05uaeq2666e0io.apps.googleusercontent.com',
        clientSecret:'7XA26w2K7rOvqy4sDXV3YbBO',
        callbackURL: 'http://localhost:3000/auth/google/callback'

    }
}