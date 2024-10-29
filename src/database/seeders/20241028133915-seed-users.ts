import { QueryInterface } from 'sequelize';


export default {
  async up(queryInterface: QueryInterface) {
    const hashedPassword =  "$2y$10$8DYUIbrEKe6qllXfnQziN.gDT6CgZ5klBmSNB7acNKmMhf.UhmnWm";

    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: hashedPassword,
        country_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Alice Green',
        email: 'alice.green@example.com',
        password: hashedPassword,
        country_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'George Brown',
        email: 'george.brown@example.com',
        password: hashedPassword,
        country_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Diana Gray',
        email: 'diana.gray@example.com',
        password: hashedPassword,
        country_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: hashedPassword,
        country_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bob White',
        email: 'bob.white@example.com',
        password: hashedPassword,
        country_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ethan Blue',
        email: 'ethan.blue@example.com',
        password: hashedPassword,
        country_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Sam Brown',
        email: 'sam.brown@example.com',
        password: hashedPassword,
        country_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },


      {
        name: 'Charlie Black',
        email: 'charlie.black@example.com',
        password: hashedPassword,
        country_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },


      {
        name: 'Benjamin King',
        email: 'ben.king@example.com',
        password: hashedPassword,
        country_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: 'Curtis Black',
        email: 'curtis.black@example.com',
        password: hashedPassword,
        country_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },


      {
        name: 'Natasha Evlyn',
        email: 'natasha.ev@example.com',
        password: hashedPassword,
        country_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: 'Alex Mike',
        email: 'alex.mike@example.com',
        password: hashedPassword,
        country_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },


      {
        name: 'Arizona Ledye',
        email: 'arizone.ledye@example.com',
        password: hashedPassword,
        country_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },

    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {});
  },
};
