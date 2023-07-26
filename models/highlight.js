import mongoose, { Schema } from 'mongoose';

var highlight = new Schema({
  isActive: { type: Boolean },
  image: { type: String },
  title: { type: String },
  description: { type: String },
  page: { type: String },
  color: { type: String }
}, { timestamps: true });

mongoose.models = {};

var Highlight = mongoose.model('Highlight', highlight);

export default Highlight;

