const { gql } = require('apollo-server-express');
import {Cat} from './models/Cat'

// A map of functions which return data for the schema.
export const resolvers = {
  Query: {
    hello: () => 'world',
    cats: () => Cat.find()
  },
  Mutation:{
    createCat: async (_, {name}) => {
      const kitty = new Cat({ name });
      await kitty.save()
      console.log(kitty)
      return kitty
    }
  }
};
