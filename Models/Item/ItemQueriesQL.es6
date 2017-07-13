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
  items: {
    type: new GraphQLList(ItemType),
    resolve: Item.getListOfItems
  },
  item: {
    type: ItemType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Item.getItemByPosition
  }
};
