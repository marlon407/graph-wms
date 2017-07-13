import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import Pallet from './PalletSchema.es6';
import ItemType from '../Item/ItemTypeQL.es6';

export default new GraphQLObjectType({
  name: 'Pallet',
  description: 'A pallet',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    item:{
      name:'item',
      type: new GraphQLSchema(ItemType)
    },
    heigth: {
      name: 'heigth',
      type: GraphQLString
    },
    width: {
      name: 'width',
      type: GraphQLString
    },
    quantity: {
      name: 'quantity',
      type: GraphQLString
    },
    type: {
      name: 'type',
      type: GraphQLString
    },
  })
});
