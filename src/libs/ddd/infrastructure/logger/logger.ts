
import {Logger as NestLogger} from "@nestjs/common";
import {LoggerPort} from "@libs/ddd/domain/ports/logger.port";

export class Logger extends NestLogger implements LoggerPort{
    setContext(context: string): void {
        this.context = context;
    }
}