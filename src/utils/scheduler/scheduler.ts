import cron from 'node-cron';
import AssignQuestions from "../commands/AssignQuestions";
import { CycleRepository } from "../../repositories/cycle.repository";
import { CountryRepository } from "../../repositories/country.repository";
import { QuestionRepository } from "../../repositories/question.repository";
import { QuestionAssignmentRepository } from "../../repositories/question-assignment.repository";
import { WinstonLogger } from "../logger/wintson.logger";
import { getDurationString } from "../helper";
import databaseService from "../database/database.service";

async function run() {
    const logger = new WinstonLogger("Cron Service");

    // Ensure database connection
    await databaseService.authenticate();

    // Repositories and command setup
    const cycleRepo = new CycleRepository();
    const countryRepo = new CountryRepository();
    const questionRepo = new QuestionRepository();
    const questionAssignmentRepo = new QuestionAssignmentRepository();
    const assignQuestions = new AssignQuestions(cycleRepo, countryRepo, questionRepo, questionAssignmentRepo);

    cron.schedule('0 19 * * 1', async () => {
        const formattedDate = new Date().toISOString().replace('T', ' ').slice(0, 19);
        const durationStr = getDurationString(Date.now());

        try {
            console.log(`[${formattedDate}] AssignQuestions ...................RUNNING`);
            await assignQuestions.run();
            console.log(`[${formattedDate}] AssignQuestions ................... ${durationStr} DONE`);
        } catch (error) {
            console.log(`[${formattedDate}] AssignQuestions ................... ${durationStr} FAILED`);
            logger.error('Error occurred while running AssignQuestions: ' + error);
        }
    }, {
        timezone: 'Asia/Singapore',
    });

    console.log('Scheduler set up successfully and will run every minute.');
}

run().catch(err => {
    const logger = new WinstonLogger("Cron Service");
    logger.error('Error starting the scheduler: ' + err);
    process.exit(1); // Exit if initialization fails
});
