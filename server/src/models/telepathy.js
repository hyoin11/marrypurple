import mongoose, { Schema } from 'mongoose';

const telepathySchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    user_nick: String,
    profile_pic: String,
    questions: [String],
    answers: [String]
})

const Telepathy = mongoose.model('Telepathy', telepathySchema);

export default Telepathy;