const bcrypt = require("bcryptjs")

const admin = (sequelize, DataTypes) => {
  const Admin = sequelize.define('admin', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
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
  return Admin
}

export default admin