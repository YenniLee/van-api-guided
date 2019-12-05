module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
<<<<<<< HEAD
      filename: './data/shouts.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
=======
      filename: './data/hubs.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
>>>>>>> 38560e61beef2596b4e6325957e01435dbccb484
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
