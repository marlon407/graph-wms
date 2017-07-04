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
import Hobby from './Models/Hobby/HobbySchema.es6';
import Slot from './Models/Slot/SlotSchema.es6';

import {
  UserQueries,
  UserMutations,
  UserType
  } from './Models/User/UserQL.es6';

import {
  HobbyType,
  HobbyQueries,
  HobbyMutations,
} from './Models/Hobby/HobbyQL.es6';

import {
  SlotType,
  SlotQueries,
  SlotMutations,
  } from './Models/Slot/SlotQL.es6';


let RootQuery = new GraphQLObjectType({
  name: 'Query',      //Return this type of object
  fields: () => ({
    user: UserQueries.user,
    users: UserQueries.users,
    hobby: HobbyQueries.hobby,
    hobbies: HobbyQueries.hobbies,
    slot: SlotQueries.slot,
    slots: SlotQueries.slots
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
