const path = require('path');
require('dotenv').config({path: '../../.env'});
const { Pool } = require('pg')

const pool = new Pool({
  database: 'products'
});

module.exports = {
  query: (text, params) => { return pool.query(text, params) },
  connect: () => {return pool.connect()}
}