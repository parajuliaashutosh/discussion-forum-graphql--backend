import chalk from 'chalk';
import { DotenvConfig } from '../config/env.config';
import { Logger } from '../config/logger.config';
import { Environment } from '../constant/enum';

const log = console.log;

class Print {
    static error(message: string): void {
        if (DotenvConfig.NODE_ENV === Environment.PRODUCTION)
            Logger.error(message);

        log(chalk.bgRed(message));
    }

    static info(message: string): void {
        if (DotenvConfig.NODE_ENV === Environment.PRODUCTION)
            Logger.info(message);

        log(chalk.green(message));
    }

    static warn(message: string): void {
        if (DotenvConfig.NODE_ENV === Environment.DEVELOPMENT)
            log(chalk.yellow(message));
        else Logger.warn(message);
    }

    static debug(message: string): void {
        if (DotenvConfig.NODE_ENV === Environment.PRODUCTION)
            Logger.debug(message);
        log(chalk.blue(message));
    }
}

export default Print;
