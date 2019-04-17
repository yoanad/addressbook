'use strict';

module.exports = {
  up: (queryInterface, sequelize) => {
      return queryInterface.bulkInsert('Organizations', [
        {
          name: 'Google',
          contact_details: 'Curabitur quis libero faucibus, gravida lorem sit'
        },
        {
          name: 'Amazon',
          contact_details: 'Curabitur quis libero faucibus, s eleifend turpis et rhoncus.'
        },
        {
          name: 'IBM',
          contact_details: 'dsaadsfaucibus, s eleifend turpis et rhoncus.'
        }
    ], {});
  },

  down: (queryInterface, sequelize) => {
      return queryInterface.bulkDelete('Organizations', null, {});
  }
};
