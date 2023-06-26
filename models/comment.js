import mongoose, { Schema } from 'mongoose';

var comment = new Schema({
  userFullName: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true },
  content: { type: String, required: true }
}, { timestamps: true });

mongoose.models = {};

var Comment = mongoose.model('Comment', comment);

export default Comment;
