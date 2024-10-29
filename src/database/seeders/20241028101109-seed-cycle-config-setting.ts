import { QueryInterface } from 'sequelize';

export = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('Settings', [
      {
        key: 'cycle_duration',
        value: '7',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('Settings', { key: 'default_cycle_duration' }, {});
  },
};
