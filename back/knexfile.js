// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/Database/db.sqlite3',
    },
    migrations: {
        directory: './src/Database/Migrations',
    },
    useNullAsDefault: true,
  },

};
