// Update with your config settings.
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/pets.db3",
    },
    useNullAsDefault: false,
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
