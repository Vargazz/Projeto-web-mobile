module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING(255),
  },
    {
      tableName: 'categories',
      timestamps: false,
      underscored: true,
    }
  );

  Categories.associate = (models) => {
    Categories.belongsTo(models.User, {
      foreignKey: "userId",
      as: "users",
    });
  };

  Categories.associate = (models) => {
    Categories.hasMany(models.Playbooks, {
      foreignKey: "categorieId",
      as: "playbook",
    });
  };

  return Categories;
}