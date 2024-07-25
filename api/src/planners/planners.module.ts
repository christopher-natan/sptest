import { Module } from '@nestjs/common';
import { PlannersService } from './planners.service';
import { PlannersController } from './planners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlannersEntity } from './planners.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlannersEntity])],
  providers: [PlannersService],
  controllers: [PlannersController],
})
export class PlannersModule {
}
