import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PlannersEntity } from './planners.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TreeRepository } from 'typeorm';

@Injectable()
export class PlannersService extends TypeOrmCrudService<PlannersEntity> {
  constructor(
    @InjectRepository(PlannersEntity)
    protected readonly repo: TreeRepository<PlannersEntity>,
  ) {
    super(repo);
  }

  async findAll(): Promise<PlannersEntity[]> {
    return this.repo.find();
  }

  async savePlanner(headers: any, planner: any) {
    const id = headers['planner-id'];

    planner.plannerTypeId = planner.plannerTypeId.id;
    planner.ECSId = planner.ECSId.id;
    planner.funds = planner.funds.id;
    planner.alias = planner.alias.id;
    delete planner.triggerRuns;
    delete planner.triggerSources;
    delete planner.triggerReports;

    await this.repo.update(id, planner);
    return this.repo.findOneBy({ id });
  }
}
