import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import Warehouse from './WarehouseSchema.es6';
import PalletType from '../Pallet/PalletTypeQL.es6';

export default new GraphQLObjectType({
  name: 'Warehouse',
  description: 'A Warehouse',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    description:{
      type: GraphQLString
    },
    pallets:{
      type: new GraphQLList(PalletType)
    }
  })
});
