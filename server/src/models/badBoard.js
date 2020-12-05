import mongoose from 'mongoose';

const { Schema } = mongoose;

const BadBoardSchema = new Schema({
    User: {
        profile_pic: String,
        user_nick: String,
        _id: String
    },
    reason: String
});

const BadBoard = mongoose.model('BadBoard', BadBoardSchema);
export default BadBoard;