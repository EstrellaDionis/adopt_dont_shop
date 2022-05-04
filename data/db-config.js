const knex = require("knex");

const configs = require("../knexfile");

//on Heroku, process.env.NODE_ENV will be 'production' (knexfile.js)
const env = process.env.NODE_ENV || "development";

const configToUse = configs[env];

module.exports = knex(configToUse);
