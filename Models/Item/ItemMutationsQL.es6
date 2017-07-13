import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import ItemType from './ItemTypeQL.es6';
import Item from './ItemSchema.es6';

export default {
  addItem:{
    type:ItemType,
    args: {
      description:{
        name:'description',
        type:new GraphQLNonNull(GraphQLString)
      },
      value:{
        name:'value',
        type: GraphQLString
      }
    },
    resolve: (root, {description, value}) => {
      var newItem = new Item({description:description, value:value});

      return new Promise((resolve, reject) => {
        newItem.save((err, res) => {
          err ? reject(err): resolve(res);
        });
      });
    }
  }
};
