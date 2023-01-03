require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
const router = require('./routes');
const db = require('./database/db.js')

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get(`/${process.env.LTOKEN}`, (req, res) => {
  res.send(`${process.env.LTOKEN}`);
});

app.use(router);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on localhost:${process.env.PORT}`);
  }
});