import mongoose, { Schema } from 'mongoose';
import User from './user';
import Highlight from './highlight';

var book = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  illustrators: [{ type: Schema.Types.ObjectId, ref: User }],
  authors: [{ type: Schema.Types.ObjectId, ref: User }],
  size: { type: Object },
  pages: { type: Number },
  genre: [{ type: Object }],
  themes: [{ type: Object }],
  ISBN: { type: Object },
  ageIndication: { type: Object },
  synopsis: { type: String },
  price: { type: String },
  image: { type: String },
  video: { type: String },
  audio: { //audio = acessivel kkk
    visual: { type: String },
    description: { type: String },
    video: { type: String },
  },
  highlight: { type: Schema.Types.ObjectId, ref: Highlight }
}, { timestamps: true });

mongoose.models = {};

var Book = mongoose.model('Book', book);

export default Book;