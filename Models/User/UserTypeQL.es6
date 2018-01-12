import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import User from './UserSchema.es6';
import WarehouseType from '../Warehouse/WarehouseTypeQL.es6';

export default new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    surname:{
      type: GraphQLString
    },
    age:{
      type: GraphQLInt
    },
    wahouses:{
      type: new GraphQLList(WarehouseType)
    },
    friends:{
      type: new GraphQLList(this)
    }
  })
});
