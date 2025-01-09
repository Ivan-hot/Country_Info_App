"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let CountriesController = class CountriesController {
    async getAvailableCountries() {
        try {
            const response = await axios_1.default.get('https://date.nager.at/api/v3/AvailableCountries');
            return response.data;
        }
        catch (error) {
            console.error('Error fetching available countries:', error.message);
            throw new Error('Failed to fetch available countries');
        }
    }
    async getCountryInfo(countryCode) {
        try {
            const bordersResponse = await axios_1.default.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
            const borderCountries = bordersResponse.data.borders || [];
            const populationResponse = await axios_1.default.get(`https://countriesnow.space/api/v0.1/countries/population?country=${countryCode}`);
            const populationData = populationResponse.data.data || [];
            const flagResponse = await axios_1.default.get(`https://countriesnow.space/api/v0.1/countries/flag/images?country=${countryCode}`);
            const flagUrl = flagResponse.data.data?.[0]?.image || '';
            return {
                countryCode,
                name: bordersResponse.data.name,
                flagUrl,
                borders: borderCountries,
                populationData,
            };
        }
        catch (error) {
            console.error('Error fetching country info:', error.message);
            throw new common_1.HttpException('Failed to fetch country information', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CountriesController = CountriesController;
__decorate([
    (0, common_1.Get)('available-countries'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "getAvailableCountries", null);
__decorate([
    (0, common_1.Get)('country-info/:countryCode'),
    __param(0, (0, common_1.Param)('countryCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "getCountryInfo", null);
exports.CountriesController = CountriesController = __decorate([
    (0, common_1.Controller)('countries')
], CountriesController);
//# sourceMappingURL=countries.controller.js.map