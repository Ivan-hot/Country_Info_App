"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const countries_controller_1 = require("./countries.controller");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
describe('CountriesController', () => {
    let controller;
    let httpService;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [countries_controller_1.CountriesController],
            providers: [axios_1.HttpService],
        })
            .overrideProvider(axios_1.HttpService)
            .useValue({
            get: jest.fn().mockReturnValue((0, rxjs_1.of)({ data: [] })),
        })
            .compile();
        controller = module.get(countries_controller_1.CountriesController);
        httpService = module.get(axios_1.HttpService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should return available countries', async () => {
        const result = await controller.getAvailableCountries();
        expect(result).toEqual([]);
    });
    it('should return country info', async () => {
        const result = await controller.getCountryInfo('UA');
        expect(result).toHaveProperty('countryCode');
        expect(result).toHaveProperty('borders');
        expect(result).toHaveProperty('populationData');
        expect(result).toHaveProperty('flagUrl');
    });
});
//# sourceMappingURL=countries.controller.spec.js.map