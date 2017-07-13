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
  addAddress:{
    type:AddressType,
    args: {
      slot:{
        name:'slot',
        type: GraphQLInt
      },
      row:{
        name:'row',
        type: GraphQLInt
      },
      level:{
        name:'level',
        type: GraphQLInt
      }
    },
    resolve: (root, {slot, row, level}) => {
      var newAddress = new Address({slot:slot, row:row, level:level});

      return new Promise((resolve, reject) => {
        newAddress.save((err, res) => {
          err ? reject(err): resolve(res);
        });
      });
    }
  }
};
