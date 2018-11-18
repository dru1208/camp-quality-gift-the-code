const Sequelize = require("sequelize")

const sequelize = new Sequelize('campQuality', 'campqualityrootadmin', 'campQuality', {
  dialect: 'postgres',
})

const bcrypt = require("bcryptjs")


const Admin = sequelize.define('admin', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  campLocation: Sequelize.STRING,
  'createdAt': {
      type: Sequelize.INTEGER,
      allowNull: true,
  },
  'updatedAt': {
      type: Sequelize.INTEGER,
      allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
  instanceMethods: {
    generateHash(password) {
      return bcrypt.hash(password, bcrypt.genSaltSync(8));
    },
    validPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }
})

module.exports = Admin