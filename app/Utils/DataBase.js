const knex = require('knex');
const config = require('../Config/DataBaseConfig');

const DB = knex(config);

module.exports = DB;
