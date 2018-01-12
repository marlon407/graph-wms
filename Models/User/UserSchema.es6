import mongoose from 'mongoose';

import Warehouse from '../Warehouse/WarehouseSchema.es6';

let UserSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  username: { type:String, required:true, unique:true},
  name: String,
  surname: String,
  age: Number,
  warehouses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse'}],
  type: String
});

UserSchema.set('toJSON', { getters: true });

let User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.getUserByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    User.find({}).populate('warehouses').exec((err, res) => {
      err ? reject(err) : resolve(res[id]);
    })
  });
};

module.exports.updateUser = (user) => {
  return new Promise((resolve, reject) => {
    user.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
};

module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}).populate('warehouses').exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};