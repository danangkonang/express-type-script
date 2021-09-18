'use strict';

const faker = require('faker');

const fake_users = [...Array(10)].map((nm) => (
  {
    email: faker.internet.email(),
    password: '$2b$10$l43yx8k1PmO52ltWbESyVOdZ/xvk0RMbOuevytfMykdK/9qE9oDQm',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
));

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', fake_users),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
