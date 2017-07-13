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
  pallets: {
    type: new GraphQLList(PalletType),
    resolve: Pallet.getListOfPallets
  },
  pallet: {
    type: PalletType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Pallet.getPalletByPosition
  }
};
