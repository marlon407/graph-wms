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
  addSlot:{
    type:SlotType,
    args: {
      number:{
        name:'number',
        type:new GraphQLNonNull(GraphQLString)
      },
      width:{
        name:'width',
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: (root, {number, width}) => {
      var newSlot = new Slot({number:number, width:width});

      return new Promise((resolve, reject) => {
        newSlot.save((err, res) => {
          err ? reject(err): resolve(res);
        });
      });
    }
  }
};
