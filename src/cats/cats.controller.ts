import { Controller, Get, Req, Post, HttpCode, Header, Param, Body } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action return all cats.';
  }

  @Get(':catId')
  // findOne(@Req() request: Request, @Param() params, @Body() body): string {
  findOne(@Req() request: Request, @Param('catId') catId, @Body() body): string {
    console.log(body, catId);
    // return `This action return cat with id: ${params.catId}.`;
    return `This action return cat with id: ${catId}.`;
  }

  @Get('ab*cd')
  willCard(): string {
    return 'This is a wilcard'
  }

  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This create a new cat.'
  }

}
