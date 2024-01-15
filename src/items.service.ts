import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  async create(item: Item): Promise<Item> {
    return this.itemsRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  // Weitere Methoden zum Aktualisieren und Löschen...
}