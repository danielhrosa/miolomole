import mongoose, { Schema } from 'mongoose';
import Highlight from './highlight';
import User from './user';

var bookPnld = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  illustrators: [{ type: Schema.Types.ObjectId, ref: User }],
  authors: [{ type: Schema.Types.ObjectId, ref: User }],
  size: { type: Object },
  pages: { type: Number },
  genre: [{ type: Object }],
  themes: [{ type: Object }],
  ISBN: { type: Object },
  pnldCode: { type: String },
  ageIndication: { type: Object },
  synopsis: { type: String },
  price: { type: String },
  digitalExperiencePrice: { type: String },
  image: { type: String },
  video: { type: String },
  type: { type: String },
  isHidden: { type: Boolean },
  assets: [{
    assetName: { type: String },
    assetType: { type: String },
    assetUrl: { type: String },
  }],
  seeWork: { type: String },
  teacherManual: { type: String },
  pnldVideo: { type: String },
  pnldVideoStudent: { type: String },
  pnldVideoTeacher: { type: String },
  highlight: { type: Schema.Types.ObjectId, ref: Highlight }
}, { timestamps: true });

mongoose.models = {};

var BookPnld = mongoose.model('BookPnld', bookPnld);

export default BookPnld;