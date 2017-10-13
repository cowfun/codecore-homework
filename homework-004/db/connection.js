const kx = require('knex')({
  client: 'pg',
  connection: {
    database: 'team_list'
  }
});

module.exports = kx;
