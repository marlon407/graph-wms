import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import Address from './AddressSchema.es6';
import SlotType from '../Slot/SlotTypeQL.es6';
import RowType from '../Row/RowTypeQL.es6';
import LevelType from '../Level/LevelTypeQL.es6';

export default new GraphQLObjectType({
  name: 'Address',
  description: 'An address',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    },
    level:{
      type: LevelType
    },
    row:{
      type: RowType
    },
    slot:{
      type: SlotType,
      resolve: (address) => {
          return address.getAddressById(function(fullAddress) {
            console.log("fulladdress", fullAddress.slot)
            return fullAddress.slot
          })
        },
    },
  })
});
