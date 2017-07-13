import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import PalletType from './PalletTypeQL.es6';
import Pallet from './PalletSchema.es6';

export default {
  addPallet:{
    type:PalletType,
    args: {
      item:{
        name:'item',
        type: GraphQLInt
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
    },
    resolve: (root, {item, heigth, width, quantity, type}) => {
      var newPallet = new Pallet({item:item, heigth:heigth, width:width, quantity, type});

      return new Promise((resolve, reject) => {
        newPallet.save((err, res) => {
          err ? reject(err): resolve(res);
        });
      });
    }
  }
};
