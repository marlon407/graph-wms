import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import SlotType from './SlotTypeQL.es6';
import Slot from './SlotSchema.es6';

export default {
  slots: {
    type: new GraphQLList(SlotType),
    resolve: Slot.getListOfSlots
  },
  slot: {
    type: SlotType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Slot.getSlotByPosition
  }
};
