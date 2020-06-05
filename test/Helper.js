const Helpers = module.exports;
const db = require('./../app/Utils/DataBase');

Helpers.db = db;

Helpers.migrate = () => db.migrate.latest;

Helpers.clear = async () => {
  await db('investments').del();
};
