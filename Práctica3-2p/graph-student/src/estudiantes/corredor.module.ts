import { Module } from '@nestjs/common';
import { CorredorsService } from './corredor.service';
import { CorredorsResolver } from './corredor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corredor } from './entities/corredor.entity';

@Module({
  providers: [CorredorsResolver, CorredorsService],
  imports:[
    TypeOrmModule.forFeature([Corredor])
  ]
})
export class CorredorsModule {}
