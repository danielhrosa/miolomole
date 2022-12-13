import mongoose, { Schema } from 'mongoose';

var publicationArea = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  color: { type: String, required: true },
  hide: { type: Boolean, required: true, default: false },
}, { timestamps: true });

mongoose.models = {};

var PublicationArea = mongoose.model('PublicationArea', publicationArea);

export default PublicationArea;