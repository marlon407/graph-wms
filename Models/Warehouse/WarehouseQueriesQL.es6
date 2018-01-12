import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import WarehouseType from './WarehouseTypeQL.es6';
import Warehouse from './WarehouseSchema.es6';

export default {
  warehouses: {
    type: new GraphQLList(WarehouseType),
    resolve: Warehouse.getListOfHobbies
  },
  warehouse: {
    type: WarehouseType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Warehouse.getWarehouseByPosition
  }
};
