const Sequelize = require("sequelize")

const sequelize = new Sequelize('campQuality', 'campQualityRootAdmin', 'campQuality', {
  dialect: 'postgres',
})

const models = {
// fill this out
}

// const models = {
//   Author: sequelize.import('./author'),
//   Tweet: sequelize.import('./tweet'),
// };

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models;