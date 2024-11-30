import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CarsController, PrismaService],
  providers: [CarsService, PrismaService],
})
export class CarsModule {}
