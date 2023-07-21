module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
  },
    {
      tableName: 'users',
      timestamps: false,
    });
    
  User.associate = (models) => {
    User.hasMany(models.Categories, {
      foreignKey: 'userId',
      as: 'categories',
    });
  };


  return User;
}