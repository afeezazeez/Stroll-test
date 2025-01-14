import { transports, Logger, createLogger, LoggerOptions, format } from 'winston';
const { combine, timestamp, label, prettyPrint } = format;
import configService from "../config/config.service";
import { ILogger } from "./logger.interface";
import * as fs from 'fs';
import DailyRotateFile from 'winston-daily-rotate-file';

export class WinstonLogger implements ILogger {
    private readonly logConfig: LoggerOptions;
    public logger: Logger;

    constructor(scope: string) {
        const filePath = configService.get<string>('LOG_FILE_PATH');
        const logChannel = configService.get<string>('LOG_CHANNEL');

        const fileTransport = logChannel === 'daily'
            ? new DailyRotateFile({
                filename: `${filePath}-%DATE%.log`,
                datePattern: 'YYYY-MM-DD',
                maxFiles: '14d', // Retain logs for 14 days
            })
            : new transports.File({
                filename: filePath,
            });

        this.logConfig = {
            transports: [
                new transports.Console(),
                fileTransport,
            ],
            format: combine(label({ label: scope }), timestamp(), prettyPrint()),
        };

        this.logger = createLogger(this.logConfig);
    }

    debug(message: string, meta?: object): void {
        this.logger.debug(message, meta);
    }

    error(message: string, meta?: object): void {
        this.logger.error(message, meta);
    }

    info(message: string, meta?: object): void {
        this.logger.info(message, meta);
    }

    warn(message: string, meta?: object): void {
        this.logger.warn(message, meta);
    }

}

// Export a logger instance with a specific scope
const LoggerInstance = new WinstonLogger('App');
export default LoggerInstance;
