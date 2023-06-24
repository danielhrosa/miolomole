import mongoose, { Schema } from 'mongoose';
import PublicationArea from './publicationArea'

const commentSchema = new Schema({
  phone: String,
  email: String,
  username: String,
  content: String
});

var publication = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  area: { type: Schema.Types.ObjectId, ref: PublicationArea },
  hide: { type: Boolean },
  comments: [commentSchema]
}, { timestamps: true });

mongoose.models = {};

var Publication = mongoose.model('Publication', publication);

export default Publication;