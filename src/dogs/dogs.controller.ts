import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dog.interface';
import { Response } from 'express';

@Controller('dogs')
export class DogsController {

  constructor(private readonly dogsService: DogsService) {}

  // Route for POST request at /dogs
  @Post()
  async createDog(@Body() createDogDto: CreateDogDto, @Res() res: Response) {
    this.dogsService.createDog(createDogDto);

    res.status(400).json({
      message: "Dog created successfuly!"
    });

  }

  // Route for GET request at /dogs
  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

}
