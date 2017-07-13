import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import Item from './ItemSchema.es6';

export default new GraphQLObjectType({
  name: 'Item',
  description: 'An item',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    value: {
      type: GraphQLString
    },
  })
});
