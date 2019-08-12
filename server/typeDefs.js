const { gql } = require('apollo-server-express');

// The GraphQL schema
export const typeDefs = gql`
  type Query {
      "A simple type for getting started!"
      hello: String
      cats:[Cat!]!
    }
  type Cat {
    id: ID!,
    name: String!
  }
  type Mutation {
    createCat(name: String!): Cat!
  }
`;
