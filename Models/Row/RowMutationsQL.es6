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
  addRow:{
    type:RowType,
    args: {
      number:{
        name:'number',
        type:new GraphQLNonNull(GraphQLInt)
      },
      depth:{
        name:'depth',
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: (root, {number, depth}) => {
      var newRow = new Row({number:number, depth:depth});

      return new Promise((resolve, reject) => {
        newRow.save((err, res) => {
          err ? reject(err): resolve(res);
        });
      });
    }
  }
};
