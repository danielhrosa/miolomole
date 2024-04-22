import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var pesquisas = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  iframeCode: { type: String, required: true },
  hide: { type: Boolean }
}, { timestamps: true });

mongoose.models = {};

var Pesquisas = mongoose.model('Pesquisas', pesquisas);

export default Pesquisas;