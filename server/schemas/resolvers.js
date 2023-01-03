const { User, Tweet } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, {_id}) => {
      const params = _id ? { _id } : {};
      return User.find(params)
    },
    tweets: async () => {
      return Tweet.find({});
    },
    tweet: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Tweet.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = await new User.create(args);
      return newUser.save();
    },
    updateUser: async (parent, {_id, username, email, password}) => {
      return User.findByIdAndUpdate (
        _id,
        { $set: {username, email, password}},
        {new: true}
      )
    },
    createTweet: async (parent, { content }) => {
      const newTweet = await new Tweet({ content });
      return newTweet.save();
    },
    updateTweet: async (parent, {_id, content, isSelected, scheduledTime, status}) => {
      return await Tweet.findByIdAndUpdate(
        _id, 
        { $set: {content, isSelected, scheduledTime, status}},
        { new: true}
      );
    }
  },
};

module.exports = resolvers;
