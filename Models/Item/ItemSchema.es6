import mongoose from 'mongoose';

var ItemSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
    description: {
    type: String,
    required: true
  },
  value: {
    type: String,
  }
});

let Item = mongoose.model('Item', ItemSchema);

module.exports = Item;

module.exports.getItemByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Item.findOne({id: id}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfItems = () => {
  return new Promise((resolve, reject) => {
    Item.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};