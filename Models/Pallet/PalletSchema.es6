import mongoose from 'mongoose';

/**
 * Pallet Schema
 */
const PalletSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true, index: true, default: mongoose.Types.ObjectId },
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  address: {type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
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
    Pallet.findById(id).populate('item address').exec((err, res) => {
      err ? reject(err): resolve(res);
    })
  });
};

module.exports.updatePallet = (pallet) => {
  return new Promise((resolve, reject) => {
    pallet.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
};

module.exports.getListOfPallets = () => {
  return new Promise((resolve, reject) => {
    Pallet.find()
      .populate({path: 'item', model: 'Item'})
      .populate({path: 'address', populate: {
        path: "slot", model: "Slot"
      }})
      .populate({path: 'address', populate: {
        path: "level", model: "Level"
      }})
      .populate({path: 'address', populate: {
        path: "row", model: "Row"
      }})
      .exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};