import mongoose from 'mongoose';

import Slot from '../Models/Slot/SlotSchema.es6';
import Row from '../Models/Row/RowSchema.es6';
import Level from '../Models/Level/LevelSchema.es6';
import Address from '../Models/Address/AddressSchema.es6';
import Item from '../Models/Item/ItemSchema.es6';
import Pallet from '../Models/Pallet/PalletSchema.es6';
import Warehouse from '../Models/Warehouse/WarehouseSchema.es6';

mongoose.connect('mongodb://localhost/wms-mongo');

let slot1 = new Slot({ number: "A", width: 2}).save();

let slot2 = new Slot({ number: "B", width: 2})
slot2.save()

let slot3 = new Slot({ number: "C", width: 2}).save();

let slot4 = new Slot({ number: "D", width: 2}).save();

let slot5 = new Slot({ number: "E", width: 2}).save();

let slot6 = new Slot({ number: "F", width: 2}).save();

let slot7 = new Slot({ number: "G", width: 2}).save();

let slot8 = new Slot({ number: "H", width: 2}).save();

let slot9 = new Slot({ number: "I", width: 2}).save();

let slot10 = new Slot({ number: "J", width: 2}).save();

let slot = new Slot({ number: "K", width: 2}).save();

slot = new Slot({ number: "L", width: 2}).save();

slot = new Slot({ number: "M", width: 2}).save();

slot = new Slot({ number: "N", width: 2}).save();

slot = new Slot({ number: "O", width: 2}).save();

slot = new Slot({ number: "P", width: 2}).save();

slot = new Slot({ number: "Q", width: 2}).save();

slot = new Slot({ number: "R", width: 2}).save();

slot = new Slot({ number: "S", width: 2}).save();

slot = new Slot({ number: "T", width: 2}).save();

slot = new Slot({ number: "U", width: 2}).save();

slot = new Slot({ number: "V", width: 2}).save();

slot = new Slot({ number: "W", width: 2}).save();

slot = new Slot({ number: "X", width: 2}).save();

slot = new Slot({ number: "Y", width: 2}).save();

slot = new Slot({ number: "Z", width: 2}).save();


let row1 = new Row({ number: 11, depth: 1 }).save();
let row2 = new Row({ number: 12, depth: 1 }).save();

let level1 = new Level({ number: 11, heigth: 1 }).save();
let level2 = new Level({ number: 12, heigth: 1 }).save();
let level3 = new Level({ number: 13, heigth: 1 }).save();


let address1 = new Address({
  row: row1,
  slot: slot1,
  level: level1,
  type:"ok",
});
address1.save();

let address2 = new Address({
  row: row1,
  slot: slot1,
  level: level2,
  type:"ok",
});
address2.save();

let address3 = new Address({
  row: row1,
  slot: slot1,
  level: level3,
  type:"ok",
});
address3.save();

// -------

address1 = new Address({
  row: row2,
  slot: slot1,
  level: level1,
  type:"ok",
});
address1.save();

console.log(address1._id);

address2 = new Address({
  row: row2,
  slot: slot1,
  level: level2,
  type:"ok",
});
address2.save();

address3 = new Address({
  row: row2,
  slot: slot1,
  level: level3,
  type:"ok",
});
address3.save();

setTimeout(function() {
  mongoose.disconnect();
}, 10000);