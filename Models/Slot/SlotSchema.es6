import mongoose from 'mongoose';

var SlotSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
    number: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true,
  }
});

let Slot = mongoose.model('Slot', SlotSchema);

module.exports = Slot;

module.exports.getSlotByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Slot.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res[id]);
    });
  });
};

module.exports.getListOfSlots = () => {
  return new Promise((resolve, reject) => {
    Slot.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};