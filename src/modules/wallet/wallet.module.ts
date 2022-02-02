import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletOrmEntity } from './database/wallet.orm-entity';
import { WalletOrmRepository } from './database/walletOrmRepository';
import { createWalletWhenUserIsCreatedProvider } from './wallet.providers';

@Module({
  imports: [TypeOrmModule.forFeature([WalletOrmEntity])],
  controllers: [],
  providers: [WalletOrmRepository, createWalletWhenUserIsCreatedProvider],
})
export class WalletModule {}
