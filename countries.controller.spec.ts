import { Test, TestingModule } from '@nestjs/testing';
import { CountriesController } from './server/src/countries/controllers/countries.controller';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';

describe('CountriesController', () => {
  let controller: CountriesController;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [HttpService],
    })
      .overrideProvider(HttpService)
      .useValue({
        get: jest.fn().mockReturnValue(of({ data: [] })), // Мокируем HTTP-запрос
      })
      .compile();

    controller = module.get<CountriesController>(CountriesController);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return available countries', async () => {
    const result = await controller.getAvailableCountries();
    
    // Поменяйте на более конкретное ожидание, например:
    expect(result).toBeInstanceOf(Array);  // Убедитесь, что результат - это массив
    expect(result.length).toBeGreaterThan(0);  // Убедитесь, что массив не пустой
    expect(result[0]).toHaveProperty('countryCode');  // Убедитесь, что у каждого элемента есть countryCode
    expect(result[0]).toHaveProperty('name');  // Убедитесь, что у каждого элемента есть name
  });

  it('should return country info', async () => {
    const result = await controller.getCountryInfo('UA');
    expect(result).toHaveProperty('countryCode');
    expect(result).toHaveProperty('borders');
    expect(result).toHaveProperty('populationData');
    expect(result).toHaveProperty('flagUrl');
  });
});
