import { CommonService } from './common.service';
import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommonEntity } from './common.entity';

export abstract class CommonController<T extends CommonEntity> {
  abstract getService(): CommonService<T>;

  @Get('')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<T[]> {
    return await this.getService().findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: number): Promise<T> {
    return await this.getService().findOne(id);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async save(@Body() entity: T): Promise<T> {
    return await this.getService().save(entity);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: any) {
    return await this.getService().delete(id);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: any, @Body() dto: T) {
    return this.getService().update(id, dto);
  }
}