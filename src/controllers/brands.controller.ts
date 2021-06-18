import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getbrands() {
    return `get brands`;
  }
}
