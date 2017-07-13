import mongoose from 'mongoose';

let AddressSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  row: {type: mongoose.Schema.Types.ObjectId, ref: 'Row'},
  level: {type: mongoose.Schema.Types.ObjectId, ref: 'Level'},
  slot: {type: mongoose.Schema.Types.ObjectId, ref: 'Slot'},
  type: String
});

AddressSchema.set('toJSON', { getters: true });

let Address = mongoose.model('Address', AddressSchema);

module.exports = Address;

module.exports.getAddressByPosition = (root, {id}) => {
  console.log("I am here")
  return new Promise((resolve, reject) => {
    Address.find({_id: id}).populate('row level slot').exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};

module.exports.updateAddress = (address) => {
  return new Promise((resolve, reject) => {
    address.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
};

module.exports.getListOfAddresss = () => {
  return new Promise((resolve, reject) => {
    Address.find({}).populate('row level slot').exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};