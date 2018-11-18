// const Sequelize = require("sequelize")

// const sequelize = new Sequelize('campQuality', 'campqualityrootadmin', 'campQuality', {
//   dialect: 'postgres',
// })


const models = {
  Admin: require('./users/admin'),
  Parent: require('./users/parent'),
};

// Object.keys(models).forEach(key => {
//   if ('associate' in models[key]) {
//     models[key].associate(models)
//   }
// })

module.exports = models;