import { Body, Controller, Get, Post } from '@nestjs/common';
// import { PostDto, SETTINGS } from './utils/dto';
import { AppService } from './app.service';
import { PostDto, SETTINGS } from './utils/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('all')
  getAll(): string {
    return "All data";
  }

  // @Post()
  // create1(@Body() dto: PostDto): string {
  //   return "Hello " + dto.name;
  // }

  @Post()
  create(@Body(SETTINGS.VALIDATION_PIPE) dto: PostDto): string {
    return "Hello " + dto.name;
  }
}
