import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from '@/config/typeorm.config';
import { User } from './entities/user.entity';
import { Ca } from './entities/ca.entity';
import { Field } from './entities/field.entity';
import { Mapping } from './entities/mapping.entity';

// Add new repos here
const Repositories = TypeOrmModule.forFeature([User, Field, Mapping, Ca]);

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig), Repositories],
  exports: [TypeOrmModule],
})
export class DbModule {}
