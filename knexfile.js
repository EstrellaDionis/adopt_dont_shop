// Update with your config settings.
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/animals.db3",
    },
    useNullAsDefault: null,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  staging: {},

  production: {},
};
