const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, minlength: 6 },
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
  todos: {todo: {type: String}}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;