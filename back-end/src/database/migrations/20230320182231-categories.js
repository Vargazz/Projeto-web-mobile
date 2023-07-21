"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        field: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          key: "id",
          model: "users",
        },
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("categories");
  },
};
