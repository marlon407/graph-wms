import express from 'express';
import mongoose from 'mongoose';
import {graphql} from 'graphql';
import bodyparser from 'body-parser';
import os from 'os';

import schema from './schema.es6';

let db = mongoose.connection;

let app = express();
let PORT = 9000;

//Let's use the body-parser middleware
app.use(bodyparser.text({type: 'application/graphql'}));

app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('index.html'));

app.post('/', (req, res) => {
  //Execute the query
  graphql(schema, req.body)
    .then((result) => {
      res.send(result);
    });
});

app.get('/', (req, res) => {
  // const startUsage = process.cpuUsage();
  graphql(schema, req.query.query)
    .then((result) => {
      res.send(result);
      console.log(process.memoryUsage().heapUsed);
      // console.log(process.cpuUsage(startUsage).user);
    });
});

let server = app.listen(PORT, function () {
  mongoose.connect('mongodb://localhost/wms-mongo');
});
