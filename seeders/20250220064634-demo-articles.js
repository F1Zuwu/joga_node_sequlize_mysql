'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Articles', [{
      name: 'Introduction to Ashtanga',
      slug: 'introduction to ashtanga',
      image: 'ashtanga.jpg',
      body: '<p>Lorem ipsum dolor sit amet, consectutur adipiscing elit</p>',
      published: '2020-01-08 15:02:30',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Articles', [{
      name: 'Morning vinyasa flow routine',
      slug: 'morning vinyasa flow routine',
      image: 'morning.jpg',
      body: '<p>Lorem ipsum dolor sit amet, consectutur adipiscing elit</p>',
      published: '2020.04.14 15:02:41',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Articles', [{
      name: 'Secrets of a yoga teacher',
      slug: 'secrets of a yoga teacher',
      image: 'joga-teacher.jpg',
      body: '<p>Lorem ipsum dolor sit amet, consectutur adipiscing elit</p>',
      published: '2060-05-28 15:02:55',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
