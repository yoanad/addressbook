'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('People', [
        {
          name: 'Josh',
          contact_details: 'Crhoncus. Mauris fsagdsittis.',
          organization_id: 1
        },
        {
          name: 'Joanna',
          contact_details: 'Crhoncus. Mauris fdsfsdfdsfsagdsittis.',
          organization_id: 2
        },
        {
          name: 'Alex',
          contact_details: 'Crhoncus. Mauris fdsfsdfdsfsagdsittis.',
          organization_id: 1
        },
        {
          name: 'Mohammed',
          contact_details: 'Crhoncus. Mauris fdsfsdfdsfsagdsittis.',
          organization_id: null
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
