import mongoose, { Schema } from 'mongoose';
import BookPnld from './bookPnld';

var pnld = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  color: { type: String, required: true },
  hide: { type: Boolean, required: true, default: false },
  books: [{ type: Schema.Types.ObjectId, ref: BookPnld }],
}, { timestamps: true });

mongoose.models = {};

var PNLD = mongoose.model('PNLD', pnld);

export default PNLD;