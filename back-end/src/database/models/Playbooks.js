module.exports = (sequelize, DataTypes) => {
  const Playbooks = sequelize.define('Playbooks', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categorieId: DataTypes.INTEGER,
    name: DataTypes.STRING(255),
    categoriesName: DataTypes.STRING(255),
    text: DataTypes.STRING(20000),
  },
    {
      tableName: 'playbooks',
      timestamps: false,
    });
    

    Playbooks.associate = (models) => {
      Playbooks.belongsTo(models.Categories, {
        foreignKey: "categorieId",
        as: "categories",
      });
    };

  return Playbooks;
}