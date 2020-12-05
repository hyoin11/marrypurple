import mongoose from 'mongoose';

const { Schema } = mongoose;

const FAQSchema = new Schema({
    question: String,
    anwser: String
});

const FAQ = mongoose.model('FAQ', FAQSchema);
export default FAQ;