import mongoose from 'mongoose';

let AddressSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  row: {type: mongoose.Schema.Types.ObjectId, ref: 'Row'},
  level: {type: mongoose.Schema.Types.ObjectId, ref: 'Level'},
  slot: {type: mongoose.Schema.Types.ObjectId, ref: 'Slot'},
  type: String,
  description: String
});

AddressSchema.methods.getAddressById = function(cb) {
  console.log("idididid", this._id)
  return new Promise((resolve, reject) => {
    Address.findOne({_id: this._id}).populate('row level slot').exec((err, res) => {
        console.log("Done done", res)
        cb(res);
      })
    })
};

AddressSchema.set('toJSON', { getters: true });

let Address = mongoose.model('Address', AddressSchema);

module.exports = Address;

module.exports.getAddressByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Address.findOne({_id: id}).populate('row level slot').exec((err, res) => {
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