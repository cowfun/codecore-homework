const kx = require('./connection');

kx.schema.createTable('teams', table => {
  table.increments('id');
  table.string('photo_path');
  table.string('title');
  table.text('members');
}).then(res => {
  console.log(res)
  process.exit()
}).catch(res => {
    console.log(res)
    process.exit()
  })
