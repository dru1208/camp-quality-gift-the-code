const campSession = (sequelize, DataTypes) => {
  const CampSession = sequelize.define('campSession', {
    location: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  })

  return CampSession
}

export default campSession