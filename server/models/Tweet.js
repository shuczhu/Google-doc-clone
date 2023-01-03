const { Schema, model } = require('mongoose');

const tweetSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  isSeleted: {
    type: Boolean,
    default: false,
  },
  scheduledTime: {
    type: Date,
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Tweet = model('tweet', tweetSchema);

module.exports = Tweet;
