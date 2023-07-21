"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("playbooks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categorieId: {
        references: {
          key: "id",
          model: "categories",
        },
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      categoriesName: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      text: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("playbooks");
  },
};