const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tweets: [
    {
      type: Schema.Types.ObjectId,
      ref: "tweet",
  },
],
});

const User = model('user', userSchema);

module.exports = User;
