import mongoose from 'mongoose';

var WarehouseSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  description: String,
  pallets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pallet'}],
});

let Warehouse = mongoose.model('Warehouse', WarehouseSchema);

module.exports = Warehouse;

module.exports.getWarehouseByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Warehouse.find({}).populate('pallets').exec((err, res) => {
      err ? reject(err) : resolve(res[id]);
    });
  });
};

module.exports.getListOfHobbies = () => {
  return new Promise((resolve, reject) => {
    Warehouse.find({}).populate('pallets').exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};