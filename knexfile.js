// Update with your config settings.
const devConfig = {
  client : 'pg',
  connection : {
    host: '127.0.0.1',
    user: 'devjobs_2', // ya se que es alreves, pero sirve  :)
    password: 'passpass',
    database: 'dba_devjobs_2'
  },

  migrations: {
    directory: './src/database/migrations'
  },

  seeds: {
    directory: './src/database/seeds'
  }

}


module.exports = {
  development: devConfig
};
