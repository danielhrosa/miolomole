import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var catalog = new Schema({
  color: { type: String },
  label: { type: String, required: true },
  link: { type: String, required: true },
  context: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {};

var Catalog = mongoose.model('Catalog', catalog);

export default Catalog;