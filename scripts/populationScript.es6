import mongoose from 'mongoose';

import User from '../Models/User/UserSchema.es6';
import Hobby from '../Models/Hobby/HobbySchema.es6';
import Slot from '../Models/Slot/SlotSchema.es6';
import Row from '../Models/Row/RowSchema.es6';
import Level from '../Models/Level/LevelSchema.es6';
import Address from '../Models/Address/AddressSchema.es6';
import Item from '../Models/Item/ItemSchema.es6';
import Pallet from '../Models/Pallet/PalletSchema.es6';

mongoose.connect('mongodb://localhost/wms-mongo');

User.remove({})
User.remove({})
Hobby.remove({})
Slot.remove({})
Row.remove({})
Level.remove({})
Address.remove({})
Item.remove({})
Pallet.remove({})

let hobbyCycling = new Hobby({
  title:'cycling',
  description:'a painful sport',
  type:"hobby"
});

let hobbyHorses = new Hobby({
  title:'horses',
  description:'to get in one with an animal',
  type:"hobby"
});

let hobbyFlying = new Hobby({
  title:'flying',
  description:'man and machine in one',
  type:"hobby"
});

let hobbySleeping = new Hobby({
  title:'sleeping',
  description:'resting for whole day',
  type:"hobby"
});


let userRichard = new User({
  name:"Richard",
  surname:"Stallman",
  age:30,
  hobbies:[hobbyCycling, hobbyFlying],
  type:"user"
});

let userDonald = new User({
  name:"Donald",
  surname:"Knuth",
  age:26,
  hobbies:[hobbyHorses, hobbySleeping],
  type:"user"
});

let userLinus = new User({
  name:"Linux",
  surname:"Torvalds",
  age:8,
  hobbies:[hobbySleeping],
  type:"user"
});

let userTim = new User({
  name:"Tim",
  surname:"Berners-Lee",
  age:2,
  hobbies:[hobbySleeping, hobbyHorses],
  friends:[userRichard, userDonald],
  type:"user"
});

userDonald.friends = [userRichard, userTim, userLinus];
userRichard.friends = [userDonald, userTim, userLinus];
userLinus.friends = [userRichard, userDonald];


let slot01 = new Slot({
  number: 1,
  width: 10,
  type:"slot"
})
console.log("slot created", slot01);

let slot02 = new Slot({
  number: 2,
  width: 10,
  type:"slot"
})
console.log("slot created", slot02);

let slot03 = new Slot({
  number: 3,
  width: 10,
  type:"slot"
})
console.log("slot created", slot03);

let row1 = new Row({
  number: 1,
  depth: 2,
  type:"row"
})
console.log("row created", row1);

let row2 = new Row({
  number: 2,
  depth: 2,
  type:"row"
})
console.log("row created", row2);

let level1 = new Level({
  number: 1,
  heigth: 5,
  type:"level"
})
console.log("level created", level1);

let level2 = new Level({
  number: 2,
  heigth: 5,
  type:"level"
})
console.log("level created", level2);

let level3 = new Level({
  number: 3,
  heigth: 5,
  type:"level"
})
console.log("level created", level3);

row1.save();
row2.save();
level1.save();
level2.save();
level3.save();
slot01.save();
slot02.save();
slot03.save();


let address1 = new Address({
  row: row1,
  slot: slot01,
  level: level1,
  type:"address"
})
console.log("address created", address1);

let address2 = new Address({
  row: row1,
  slot: slot01,
  level: level2,
  type:"address"
})
console.log("address created", address2);

let address3 = new Address({
  row: row2,
  slot: slot02,
  level: level1,
  type:"address"
})
console.log("address created", address3);

let address4 = new Address({
  row: row2,
  slot: slot02,
  level: level2,
  type:"address"
})
console.log("address created", address4);

address1.save();
address2.save();
address3.save();
address4.save();

hobbyCycling.save();
hobbyFlying.save();
hobbyHorses.save();
hobbySleeping.save();

userRichard.save();
userDonald.save();
userLinus.save();
userTim.save();

setTimeout(function() {
  mongoose.disconnect();
}, 1000);