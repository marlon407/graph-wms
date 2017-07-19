import mongoose from 'mongoose';

let PalletSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
  heigth: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

PalletSchema.set('toJSON', { getters: true });

let Pallet = mongoose.model('Pallet', PalletSchema);

module.exports = Pallet;

module.exports.getPalletByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Pallet.findById(id).populate('item').exec((err, res) => {
      err ? reject(err): resolve(res);
    })
  });
};

module.exports.updatePallet = (address) => {
  return new Promise((resolve, reject) => {
    address.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
};

module.exports.getListOfPallets = () => {
  console.log("get all pallets")
  return new Promise((resolve, reject) => {
    Pallet.find({}).populate('item').exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};