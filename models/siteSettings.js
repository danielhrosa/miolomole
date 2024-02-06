import mongoose, { Schema } from 'mongoose';

var siteSettings = new Schema({
  config: { type: String, unique: true, required: true },
  value: { type: String, required: true }
}, { timestamps: true });

mongoose.models = {};

var SiteSettings = mongoose.model('SiteSettings', siteSettings);

export default SiteSettings;