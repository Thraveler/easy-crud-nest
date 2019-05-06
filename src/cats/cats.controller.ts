import { Controller, Get, Req, Res, Post, Patch, Delete, HttpCode, Header, Param, Body, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Request, Response } from 'express';

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
  create(@Body() body): string {
    return JSON.stringify(body);
  }

  @Patch(':id')
  update(@Body() createCatDto: CreateCatDto): string {
    return JSON.stringify(createCatDto);
  }

  @Delete(':id')
  delete(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: "It works!"
    });
  }
  
}
