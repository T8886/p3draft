const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Profile {
    _id: ID
    username: String
    email: String
    password: String
    sign: String
    comment: [Comment]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, sign: String!): Auth
    login(email: String!, password: String!, sign: String!): Auth

    addComment(profileId: ID!, comment: String!): Profile

    removeProfile: Profile
    removeComment(comment: String!): Profile
  }
`;

module.exports = typeDefs;