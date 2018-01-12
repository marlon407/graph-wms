import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import WarehouseType from './WarehouseTypeQL.es6';
import Warehouse from './WarehouseSchema.es6';

export default {
  addWarehouse:{
    type:WarehouseType,
    args: {
      description:{
        name:'description',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: (root, {title, description}) => {
      var newWarehouse = new Warehouse({title:title, description:description});

      return new Promise((resolve, reject) => {
        newWarehouse.save((err, res) => {
          err ? reject(err): resolve(res);
        });
      });
    }
  }
};
