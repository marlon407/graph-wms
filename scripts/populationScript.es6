import mongoose from 'mongoose';

import Slot from '../Models/Slot/SlotSchema.es6';
import Row from '../Models/Row/RowSchema.es6';
import Level from '../Models/Level/LevelSchema.es6';
import Address from '../Models/Address/AddressSchema.es6';
import Item from '../Models/Item/ItemSchema.es6';
import Pallet from '../Models/Pallet/PalletSchema.es6';

mongoose.connect('mongodb://localhost/wms-mongo');

let slot1 = new Slot({
  number: 1,
  width: 10,
  type:"slot"
});
slot1.save();

let row1 = new Row({
  number: 1,
  depth: 2,
  type:"row"
});
row1.save();

let level1 = new Level({
  number: 2,
  heigth: 5,
  type:"level"
});
level1.save();

let level2 = new Level({
  number: 222,
  heigth: 5,
  type:"level"
});
level2.save();

let address1 = new Address({
  row: row1,
  slot: slot1,
  level: level1,
  type:"address",
  description:"address 01",
});
address1.save();

let address2 = new Address({
  row: row1,
  slot: slot1,
  level: level2,
  type:"address",
  description:"address 02",
});
address2.save();

let item1 = new Item({
  description: "Telha tipo 1",
  value: "100"
});
item1.save();

let item2 = new Item({
  description: "Telha tipo 2",
  value: "80"
});
item2.save();

let pallet1 = new Pallet({
  item: item1,
  address: address2,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 1"
});
pallet1.save();

let pallet2 = new Pallet({
  item: item1,
  address: address2,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 2"
});
pallet2.save();

let pallet3 = new Pallet({
  item: item2,
  address: address2,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 3"
});
pallet3.save();

let pallet4 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 4"
});
pallet4.save();

let pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();

pallet5 = new Pallet({
  item: item2,
  address: address1,
  width: 10,
  heigth: 10,
  quantity: 20,
  type: "pallet 5"
});
pallet5.save();




setTimeout(function() {
  mongoose.disconnect();
}, 10000);