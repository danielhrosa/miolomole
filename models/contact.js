import mongoose, { Schema } from 'mongoose';

var contact = new Schema({
  name: { type: String },
  email: { type: String },
  message: { type: String },
}, { timestamps: true });

mongoose.models = {};

var Contact = mongoose.model('Contact', contact);

export default Contact;