import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('/kevin')
export class AppController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() item: Item) {
    return this.itemsService.create(item);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
}
