import mongoose, { Schema } from 'mongoose';

const matchingSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    nick:String,
    match_gender: String,
    gender: String,
    matched: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Matching' }],
    pass: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Matching' }],
    like: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Matching' }],
    back: { type: mongoose.Schema.Types.ObjectId, ref: 'Matching', default:null },
    superLike:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Matching' ,default:null}],
    personality: [String]
})

const Matching = mongoose.model('Matching', matchingSchema);

export default Matching;