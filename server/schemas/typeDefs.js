const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Tweet {
    _id: ID!
    content: String!
    isSelected: Boolean
    status: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    tweets: [Tweet]
    tweet(id: ID!): Tweet
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createTweet(content: String!): Tweet
    updateUser(id: ID!, username: String, email: String, password: String): User
    updateTweet(id: ID!, content: String, isSelected: Boolean, status: String): Tweet
  }
`;

module.exports = typeDefs;
