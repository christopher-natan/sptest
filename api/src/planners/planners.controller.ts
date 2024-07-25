import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { PlannersEntity } from './planners.entity';
import { PlannersService } from './planners.service';

@Crud({
  model: {
    type: PlannersEntity,
  },
})
@Controller('planners')
export class PlannersController implements CrudController<PlannersEntity> {
  constructor(public service: PlannersService) {}

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Post()
  public async savePlanner(
    @Body() planner: any,
    @Headers() headers: any,
  ): Promise<void> {
    console.log(planner);
    await this.service.savePlanner(headers, planner);
  }
}
