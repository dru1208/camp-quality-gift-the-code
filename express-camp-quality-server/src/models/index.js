const Sequelize = require("sequelize")

const sequelize = new Sequelize('campQuality', 'campQualityRootAdmin', 'campQuality', {
  dialect: 'postgres',
})

const models = {
  CampSession: sequelize.import('./camp/campSession'),
  CamperSession: sequelize.import('./camp/camperSession'),
  Admin: sequelize.import('./users/admin'),
  Parent: sequelize.import('./users/parent'),
  Medical: sequelize.import('./users/medical'),
  Camper: sequelize.import('./users/camper'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models;