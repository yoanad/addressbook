'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_details: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  return Person;
};