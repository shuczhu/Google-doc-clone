const db = require('../config/connection');
const { User, Tweet } = require('../models');

const userData = require('./userData.json');
const tweetData = require('./tweetData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Tweet.deleteMany({});

  const users = await User.insertMany(userData);
  const tweets = await Tweet.insertMany(tweetData);

  console.log('Seeded!');
  process.exit(0);
});
