import md5 from 'md5'

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile: DataTypes.STRING
  })

  sequelize.addHook('beforeCreate', user => {
    user.password = md5(user.password)
  })

  return User
}
