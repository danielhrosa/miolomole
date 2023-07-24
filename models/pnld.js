import mongoose, { Schema } from 'mongoose';
import Book from './book';
import User from './user';

var pnld = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  color: { type: String, required: true },
  hide: { type: Boolean, required: true, default: false },
  books: [{ type: Schema.Types.ObjectId, ref: Book }],
}, { timestamps: true });

mongoose.models = {};

var PNLD = mongoose.model('PNLD', pnld);

export default PNLD;