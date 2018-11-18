const bcrypt = require("bcryptjs")

const parent = (sequelize, DataTypes) => {
  const Parent = sequelize.define('parent', {
    firstName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.STRING,
  }, {
    freezeTableName: true,
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
        return bcrypt.compare(password, this.password);
      }
    }
  })
  return Parent
}

module.exports = parent