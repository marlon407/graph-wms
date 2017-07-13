import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import Level from './LevelSchema.es6';

export default new GraphQLObjectType({
  name: 'Level',
  description: 'A Level',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    number: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    heigth: {
      type: new GraphQLNonNull(GraphQLInt)
    },
  })
});
