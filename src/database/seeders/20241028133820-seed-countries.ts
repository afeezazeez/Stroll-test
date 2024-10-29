import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('countries', [
      { name: 'Singapore', created_at: new Date(), updated_at: new Date() },
      { name: 'United States', created_at: new Date(), updated_at: new Date() },
      { name: 'Canada', created_at: new Date(), updated_at: new Date() },
      { name: 'Australia', created_at: new Date(), updated_at: new Date() },
      { name: 'United Kingdom', created_at: new Date(), updated_at: new Date() },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('countries', {});
  },
};
