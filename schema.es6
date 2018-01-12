// schema.js
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import User from './Models/User/UserSchema.es6';
import Warehouse from './Models/Warehouse/WarehouseSchema.es6';
import Slot from './Models/Slot/SlotSchema.es6';
import Row from './Models/Row/RowSchema.es6';
import Level from './Models/Level/LevelSchema.es6';
import Address from './Models/Address/AddressSchema.es6';
import Item from './Models/Item/ItemSchema.es6';
import Pallet from './Models/Pallet/PalletSchema.es6';

import {
  UserQueries,
  UserMutations,
  UserType
  } from './Models/User/UserQL.es6';

import {
  WarehouseType,
  WarehouseQueries,
  WarehouseMutations,
} from './Models/Warehouse/WarehouseQL.es6';

import {
  SlotType,
  SlotQueries,
  SlotMutations,
} from './Models/Slot/SlotQL.es6';

import {
  RowType,
  RowQueries,
  RowMutations,
} from './Models/Row/RowQL.es6';

import {
  LevelType,
  LevelQueries,
  LevelMutations,
} from './Models/Level/LevelQL.es6';

import {
  AddressType,
  AddressQueries,
  AddressMutations,
} from './Models/Address/AddressQL.es6';

import {
  ItemType,
  ItemQueries,
  ItemMutations,
  } from './Models/Item/ItemQL.es6';

import {
  PalletType,
  PalletQueries,
  PalletMutations,
  } from './Models/Pallet/PalletQL.es6';


let RootQuery = new GraphQLObjectType({
  name: 'Query',      //Return this type of object
  fields: () => ({
    user: UserQueries.user,
    users: UserQueries.users,
    warehouse: WarehouseQueries.warehouse,
    warehouses: WarehouseQueries.warehouses,
    slot: SlotQueries.slot,
    slots: SlotQueries.slots,
    row: RowQueries.row,
    rows: RowQueries.rows,
    level: LevelQueries.level,
    levels: LevelQueries.levels,
    address: AddressQueries.address,
    addresses: AddressQueries.addresses,
    item: ItemQueries.item,
    items: ItemQueries.items,
    pallet: PalletQueries.pallet,
    pallets: PalletQueries.pallets
  })
});


let RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addUser: UserMutations.addUser,
    addHobby: HobbyMutations.addHobby
  })
});


let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default schema;
