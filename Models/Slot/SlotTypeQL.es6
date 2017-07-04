import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import Slot from './SlotSchema.es6';

export default new GraphQLObjectType({
  name: 'Slot',
  description: 'A slot',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    number: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    width: {
      type: new GraphQLNonNull(GraphQLInt)
    },
  })
});
