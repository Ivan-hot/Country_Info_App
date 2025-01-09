import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CountriesController } from './countries/controllers/countries.controller';
import { AppController } from './app.controller';

@Module({
  imports: [HttpModule],
  controllers: [CountriesController, AppController],
  providers: [],
})
export class AppModule {}
