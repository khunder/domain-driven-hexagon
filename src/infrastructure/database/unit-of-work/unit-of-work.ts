import { TypeormUnitOfWork } from '@src/libs/ddd/infrastructure/database/base-classes/typeorm-unit-of-work';
import { UserOrmEntity } from '@modules/user/database/user.orm-entity';
import { UserOrmRepository } from '@modules/user/database/user.orm.repository';
import { WalletOrmEntity } from '@modules/wallet/database/wallet.orm-entity';
import { WalletOrmRepository } from '@modules/wallet/database/wallet.orm.repository';
import { Injectable } from '@nestjs/common';
import {UserRepositoryPort} from "@modules/user/database/user.repository.port";
import {WalletRepositoryPort} from "@modules/wallet/database/wallet.repository.port";
import {UnitOfWorkPort} from "@libs/ddd/domain/ports/unit-of-work.port";

@Injectable()
export class UnitOfWork extends TypeormUnitOfWork implements UnitOfWorkPort{
  // Add new repositories below to use this generic UnitOfWork

  // Convert TypeOrm Repository to a Domain Repository
  getUserRepository(correlationId: string): UserRepositoryPort {
    return new UserOrmRepository(
      this.getOrmRepository(UserOrmEntity, correlationId),
    ).setCorrelationId(correlationId);
  }

  getWalletRepository(correlationId: string): WalletRepositoryPort {
    return new WalletOrmRepository(
      this.getOrmRepository(WalletOrmEntity, correlationId),
    ).setCorrelationId(correlationId);
  }
}
