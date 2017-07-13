import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import LevelType from './LevelTypeQL.es6';
import Level from './LevelSchema.es6';

export default {
  levels: {
    type: new GraphQLList(LevelType),
    resolve: Level.getListOfLevels
  },
  level: {
    type: LevelType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Level.getLevelByPosition
  }
};
