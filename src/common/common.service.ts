import { FindManyOptions, Repository } from 'typeorm';
import { CommonEntity } from './common.entity';

export abstract class CommonService<T extends CommonEntity> {
  abstract getRepository(): Repository<T>;

  async findAll(): Promise<T[]> {
    const entities = await this.getRepository().find();
    return entities;
  }

  abstract findOne(id: number): Promise<T>;

  async save(entity: T): Promise<T> {
    const data = this.getRepository().create(entity);
    return await this.getRepository().save(data);
  }

  async delete(id: any) {
    return this.getRepository().delete(id);
  }

  async update(id: any, dto: any) {
    return await this.getRepository().update(id, dto);
  }

  count(options?: FindManyOptions<T>): Promise<number> {
    return this.getRepository().count(options);
  }
}