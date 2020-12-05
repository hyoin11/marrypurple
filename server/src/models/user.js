import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    user_email: String,
    hashedUser_pw: String,
    user_gender: {
        type: String,
        enum: ['male', 'female'],
        default : 'male'
    },
    user_age: Number,
    user_nick: String,
    profile_pic : {
        type: [String],
        default:  'http://localhost:4000/noone.png'
        },
    regdate:{
        type: Date,
        default: Date.now
    },
    brief_intro: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    school: {
        type: String,
        default: null
    },
    personality: {
        type: [String],
        default: null
    },
    fav_song: {
        type: String,
        default: null
    },
    fav_movie: {
        type: String,
        default: null
    },
    fav_food: {
        type: String,
        default: null
    },
    login_time:{
        type: Date,
        default: Date.now
        },
    premium: {
        type: String,
        enum: ['no_sub','3month','6month','1year'],
        default: 'no_sub'
    },
    stopAccount: {
        type: String,
        default: false
    },
    match_gender: {
        type: String,
        enum: ['male', 'female','both'],
        default : 'both'
    },
    match:{ type: mongoose.Schema.Types.ObjectId, ref: 'Matching' },
    reported:{type: [String], default:null},
    provider: {type: String, default:''},
    authToken : {type: String , default:null},
    facebook:{},
    kakao:{},
    google:{}
});



UserSchema.methods.setUser_pw = async function(user_pw){
    const hash = await bcrypt.hash(user_pw , 10);
    this.hashedUser_pw = hash;
};

UserSchema.methods.checkUser_pw = async function(user_pw){
    const result = await bcrypt.compare(user_pw, this.hashedUser_pw);
    return result;
};

//username찾아 전달받는
UserSchema.statics.findByUser_email = function(user_email){
    return this.findOne({"user_email": user_email});
}

UserSchema.methods.serialize = function(){
    const data = this.toJSON();
    delete data.hashedUser_pw;
    return data;
}


//토큰만드는거
UserSchema.methods.generateToken = function(){
    const token = jwt.sign(
        {
            _id: this._id,
            user_email : this.user_email 
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d' //7일동안 값이 유지
        }
    );
    return token;
}

const 
User = mongoose.model('User', UserSchema);

export default User;
