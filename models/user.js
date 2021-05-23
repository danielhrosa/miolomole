import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  userName: { type: String, unique: true },
  userFullName: { type: String, unique: true, required: true },
  avatar: { type: String },
  occupation: [{ type: String }],
  description: { type: String },
  password: { type: String },
  token: { type: String },
  hideFromList: { type: Boolean },
}, {timestamps: true});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;