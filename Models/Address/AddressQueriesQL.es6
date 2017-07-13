import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import AddressType from './AddressTypeQL.es6';
import Address from './AddressSchema.es6';

export default {
  addresses: {
    type: new GraphQLList(AddressType),
    resolve: Address.getListOfAddresss
  },
  address: {
    type: AddressType,
    args: {
      id: {
        type: GraphQLString
      }
    },
    resolve: Address.getAddressByPosition
  }
};
