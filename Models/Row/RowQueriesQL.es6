import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import RowType from './RowTypeQL.es6';
import Row from './RowSchema.es6';

export default {
  rows: {
    type: new GraphQLList(RowType),
    resolve: Row.getListOfRows
  },
  row: {
    type: RowType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Row.getRowByPosition
  }
};
