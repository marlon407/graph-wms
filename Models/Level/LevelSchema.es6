import mongoose from 'mongoose';

var LevelSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  number: {
    type: Number,
    required: true
  },
  heigth: {
    type: Number,
    required: true,
  }
});

let Level = mongoose.model('Level', LevelSchema);

module.exports = Level;

module.exports.getLevelByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Level.findById(id).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfLevels = () => {
  return new Promise((resolve, reject) => {
    Level.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};