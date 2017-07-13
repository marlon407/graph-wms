import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import Row from './RowSchema.es6';

export default new GraphQLObjectType({
  name: 'Row',
  description: 'A row',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    number: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    depth: {
      type: new GraphQLNonNull(GraphQLInt)
    },
  })
});
