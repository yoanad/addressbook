const Sequelize = require('sequelize');
const config = require('config.json')[process.env.NODE_ENV];
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = sequelize;
