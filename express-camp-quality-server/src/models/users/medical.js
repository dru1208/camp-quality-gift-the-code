const medical = (sequelize, DataTypes) => {
  const Medical = sequelize.define('medical', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  })

  return Medical
}

export default medical