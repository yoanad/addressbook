'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    contact_details: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Organization.associate = (models) => {
    Organization.hasMany(models.Person, {
      foreignKey: 'organization_id',
      onDelete: 'set null'
    });
  };
  return Organization;
};