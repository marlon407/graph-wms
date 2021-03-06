import mongoose from 'mongoose';

var RowSchema = new mongoose.Schema({
  _id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  number: {
    type: Number,
    required: true
  },
  depth: {
    type: Number,
    required: true,
  }
});

let Row = mongoose.model('Row', RowSchema);

module.exports = Row;

module.exports.getRowByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Row.findById(id).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfRows = () => {
  return new Promise((resolve, reject) => {
    Row.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};