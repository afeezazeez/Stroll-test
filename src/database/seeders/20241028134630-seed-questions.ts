import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('questions', [
      { content: 'What is your favorite food?', country_id: 1, created_at: new Date(), updated_at: new Date() },
      { content: 'Describe your ideal vacation.', country_id: 1, created_at: new Date(), updated_at: new Date() },
      { content: 'What is your favorite hobby?', country_id: 1, created_at: new Date(), updated_at: new Date() },
      { content: 'What is your favorite book?', country_id: 1, created_at: new Date(), updated_at: new Date() },
      { content: 'What is one skill you want to improve?', country_id: 1, created_at: new Date(), updated_at: new Date() },

      { content: 'Tell us about a challenge you faced.', country_id: 2, created_at: new Date(), updated_at: new Date() },
      { content: 'What do you value most in life?', country_id: 2, created_at: new Date(), updated_at: new Date() },
      { content: 'What is your biggest achievement?', country_id: 2, created_at: new Date(), updated_at: new Date() },
      { content: 'What motivates you?', country_id: 2, created_at: new Date(), updated_at: new Date() },
      { content: 'Who has been the most influential person in your life?', country_id: 2, created_at: new Date(), updated_at: new Date() },
      { content: 'What does success mean to you?', country_id: 2, created_at: new Date(), updated_at: new Date() },
      { content: 'What is something you are passionate about?', country_id: 2, created_at: new Date(), updated_at: new Date() },
      { content: 'Where do you see yourself in five years?', country_id: 2, created_at: new Date(), updated_at: new Date() },


      { content: 'Describe a memorable experience.', country_id: 3, created_at: new Date(), updated_at: new Date() },
      { content: 'Describe your dream job.', country_id: 3, created_at: new Date(), updated_at: new Date() },
      { content: 'If you could meet any historical figure, who would it be?', country_id: 3, created_at: new Date(), updated_at: new Date() },
      { content: 'What is the best advice you have ever received?', country_id: 3, created_at: new Date(), updated_at: new Date() },

      { content: 'What is one goal you are currently working on?', country_id: 4, created_at: new Date(), updated_at: new Date() },
      { content: 'Describe a time you helped someone.', country_id: 4, created_at: new Date(), updated_at: new Date() },
      { content: 'If you could live anywhere, where would it be?', country_id: 4, created_at: new Date(), updated_at: new Date() },


      { content: 'Who has been the most influential person in your life?', country_id: 5, created_at: new Date(), updated_at: new Date() },
      { content: 'What does success mean to you?', country_id: 5, created_at: new Date(), updated_at: new Date() },
      { content: 'What is something you are passionate about?', country_id: 5, created_at: new Date(), updated_at: new Date() },
      { content: 'Where do you see yourself in five years?', country_id: 5, created_at: new Date(), updated_at: new Date() },


    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('questions', {});
  },
};
