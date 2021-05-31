import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var text = new Schema({
  textKey: { type: String, required: true },
  text: { type: String, required: true },
  page: { type: String, required: true },
  editedBy: { type: String },
}, { timestamps: true });

mongoose.models = {};

var Text = mongoose.model('Text', text);

export default Text;