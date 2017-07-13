import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import LevelType from './LevelTypeQL.es6';
import Level from './LevelSchema.es6';

export default {
  addLevel:{
    type:LevelType,
    args: {
      number:{
        name:'number',
        type:new GraphQLNonNull(GraphQLInt)
      },
      heigth:{
        name:'heigth',
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: (root, {number, heigth}) => {
      var newLevel = new Level({number:number, heigth:heigth});

      return new Promise((resolve, reject) => {
        newLevel.save((err, res) => {
          err ? reject(err): resolve(res);
        });
      });
    }
  }
};
