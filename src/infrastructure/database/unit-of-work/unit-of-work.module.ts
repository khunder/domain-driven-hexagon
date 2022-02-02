import {FactoryProvider, Global, Module} from '@nestjs/common';
import {Logger} from "@libs/ddd/infrastructure/logger/logger";
import { UnitOfWork } from './unit-of-work';

const unitOfWorkSingleton = new UnitOfWork(new Logger());

const unitOfWorkSingletonProvider : FactoryProvider = {
  provide: "UnitOfWorkPort",
  useFactory: () => unitOfWorkSingleton,
};

@Global()
@Module({
  imports: [],
  providers: [unitOfWorkSingletonProvider],
  exports: ["UnitOfWorkPort"],
})
export class UnitOfWorkModule {}
