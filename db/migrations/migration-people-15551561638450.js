"use strict";
module.exports = {
  up: function(migration, Sequelize) {
    return migration.createTable("People", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      contact_details: {
        type: Sequelize.STRING
      },
      organization_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Organizations',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }

    });
  },
  down: function(migration, Sequelize) {
    return migration.dropTable("People");
  }
};