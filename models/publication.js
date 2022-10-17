import mongoose, { Schema } from 'mongoose';

var publication = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  area: { type: String, required: true },
  hide: { type: Boolean, required: true }
}, { timestamps: true });

mongoose.models = {};

var Publication = mongoose.model('Publication', publication);

export default Publication;