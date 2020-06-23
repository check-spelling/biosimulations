import {
  Controller,
  Get,
  Put,
  Body,
  Param,
  Post,
  Query,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiTags,
  ApiOAuth2,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { ModelsService } from './models.service';
import { CreateModelDTO, Model, ModelResource, Models } from './biomodel.dto';
import {
  JwtGuard,
  AdminGuard,
} from '@biosimulations/shared/biosimulations-auth';

import { BiomodelDB } from './biomodel.model';

const dbToApi = (dbModel: BiomodelDB): ModelResource => {
  const returnModel = new ModelResource(dbModel.id, dbModel.attributes, 'test');

  return returnModel;
};
@ApiTags('Models')
@Controller('models')
export class ModelsController {
  constructor(public service: ModelsService) {}
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: Models,
  })
  @Get()
  async getAll(): Promise<ModelResource[] | undefined> {
    const models = await this.service.search();

    return models?.map(dbToApi);
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Model | undefined> {
    const dbModel = await this.service.get(id);

    if (dbModel) {
      const returnModel = dbToApi(dbModel);
      const response = {
        data: returnModel,
      };
      return response;
    }
  }

  @UseGuards(JwtGuard)
  @ApiOAuth2([])
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ModelResource,
  })
  @Post()
  async create(@Body() body: CreateModelDTO) {
    return this.service.createNewBiomodel(body.data);
  }

  @UseGuards(AdminGuard)
  @Delete()
  async deleteAll() {
    this.service.deleteAll();
  }
}
