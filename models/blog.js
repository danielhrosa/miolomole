import mongoose, { Schema } from 'mongoose';

var blog = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {};

var Blog = mongoose.model('Blog', blog);

export default Blog;